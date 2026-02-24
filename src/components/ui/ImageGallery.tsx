"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export default function ImageGallery({
  images,
  title,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({
    x: 0,
    y: 0,
    transformX: 0,
    transformY: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const MIN_SCALE = 1;
  const MAX_SCALE = 4;
  const ZOOM_STEP = 0.5;

  // Reset transform cuando cambia la imagen o se abre la galería
  useEffect(() => {
    setTransform({ scale: 1, x: 0, y: 0 });
  }, [currentIndex, isOpen]);

  // Reset index cuando se abre
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Bloquear scroll del body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Calcular límites de movimiento
  const getBounds = useCallback(() => {
    if (!containerRef.current || !imageRef.current || transform.scale <= 1) {
      return { minX: 0, maxX: 0, minY: 0, maxY: 0 };
    }

    const container = containerRef.current.getBoundingClientRect();
    const image = imageRef.current.getBoundingClientRect();

    const scaledWidth = image.width;
    const scaledHeight = image.height;

    const overflowX = Math.max(0, (scaledWidth - container.width) / 2);
    const overflowY = Math.max(0, (scaledHeight - container.height) / 2);

    return {
      minX: -overflowX,
      maxX: overflowX,
      minY: -overflowY,
      maxY: overflowY,
    };
  }, [transform.scale]);

  const constrainPosition = useCallback(
    (x: number, y: number) => {
      const bounds = getBounds();
      return {
        x: Math.max(bounds.minX, Math.min(bounds.maxX, x)),
        y: Math.max(bounds.minY, Math.min(bounds.maxY, y)),
      };
    },
    [getBounds],
  );

  // Zoom
  const handleZoom = useCallback((delta: number) => {
    setTransform((prev) => {
      const newScale = Math.max(
        MIN_SCALE,
        Math.min(MAX_SCALE, prev.scale + delta),
      );

      if (newScale === MIN_SCALE) {
        return { scale: newScale, x: 0, y: 0 };
      }

      const scaleFactor = newScale / prev.scale;
      const newX = prev.x * scaleFactor;
      const newY = prev.y * scaleFactor;

      return { scale: newScale, x: newX, y: newY };
    });
  }, []);

  const zoomIn = () => handleZoom(ZOOM_STEP);
  const zoomOut = () => handleZoom(-ZOOM_STEP);
  const resetZoom = () => setTransform({ scale: 1, x: 0, y: 0 });

  // Doble click para zoom
  const handleDoubleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (transform.scale > MIN_SCALE) {
        resetZoom();
      } else {
        setTransform({ scale: 2.5, x: 0, y: 0 });
      }
    },
    [transform.scale],
  );

  // Rueda del mouse
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.2 : 0.2;
      handleZoom(delta);
    },
    [handleZoom],
  );

  // Inicio de arrastre
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (transform.scale <= MIN_SCALE) return;

      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);

      setIsDragging(true);
      setDragStart({
        x: e.clientX,
        y: e.clientY,
        transformX: transform.x,
        transformY: transform.y,
      });
    },
    [transform],
  );

  // Movimiento de arrastre
  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      const newPos = constrainPosition(
        dragStart.transformX + deltaX,
        dragStart.transformY + deltaY,
      );

      setTransform((prev) => ({ ...prev, x: newPos.x, y: newPos.y }));
    },
    [isDragging, dragStart, constrainPosition],
  );

  // Fin de arrastre
  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setIsDragging(false);
  }, []);

  // Navegación
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Teclado
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          e.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
          e.preventDefault();
          goToNext();
          break;
        case "+":
        case "=":
          e.preventDefault();
          zoomIn();
          break;
        case "-":
          e.preventDefault();
          zoomOut();
          break;
        case "0":
          e.preventDefault();
          resetZoom();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToPrevious, goToNext]);

  if (!isOpen || images.length === 0) return null;

  const isZoomed = transform.scale > MIN_SCALE;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black flex flex-col"
      >
        {/* Header - altura fija reducida */}
        <div className="flex-shrink-0 flex items-center justify-between px-4 py-2 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-20">
          <div className="text-white">
            <h3 className="font-semibold text-sm sm:text-base">{title}</h3>
            <p className="text-xs text-gray-400">
              {currentIndex + 1} de {images.length}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-white/70 text-xs mr-2 min-w-[40px] text-right hidden sm:block">
              {Math.round(transform.scale * 100)}%
            </span>

            <button
              onClick={zoomOut}
              disabled={transform.scale <= MIN_SCALE}
              className="p-2 text-white hover:bg-white/10 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Alejar (-)"
            >
              <ZoomOut size={18} />
            </button>

            <button
              onClick={resetZoom}
              disabled={!isZoomed}
              className="p-2 text-white hover:bg-white/10 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Restablecer (0)"
            >
              <RotateCcw size={18} />
            </button>

            <button
              onClick={zoomIn}
              disabled={transform.scale >= MAX_SCALE}
              className="p-2 text-white hover:bg-white/10 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              title="Acercar (+)"
            >
              <ZoomIn size={18} />
            </button>

            <div className="w-px h-5 bg-white/20 mx-1" />

            <button
              onClick={onClose}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Cerrar (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Área principal de imagen - ocupa todo el espacio disponible */}
        <div
          ref={containerRef}
          className="flex-1 relative overflow-hidden flex items-center justify-center p-4 pt-14 pb-20"
          onWheel={handleWheel}
        >
          {/* Botones de navegación lateral */}
          {images.length > 1 && !isZoomed && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Contenedor de la imagen */}
          <motion.div
            ref={imageRef}
            className="relative select-none touch-none max-w-full max-h-full"
            style={{
              transform: `scale(${transform.scale}) translate(${transform.x / transform.scale}px, ${transform.y / transform.scale}px)`,
              transition: isDragging ? "none" : "transform 0.2s ease-out",
              cursor: isZoomed ? (isDragging ? "grabbing" : "grab") : "zoom-in",
            }}
            onDoubleClick={handleDoubleClick}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <Image
              src={images[currentIndex]}
              alt={`${title} - Imagen ${currentIndex + 1}`}
              width={1920}
              height={1080}
              className="max-w-[92vw] max-h-[70vh] sm:max-h-[75vh] w-auto h-auto object-contain rounded-lg"
              style={{
                maxWidth: "min(92vw, 1400px)",
              }}
              priority
              draggable={false}
            />
          </motion.div>

          {/* Instrucciones - solo en desktop */}
          {!isZoomed && (
            <p className="absolute bottom-20 text-white/50 text-xs hidden sm:block">
              Doble click para zoom • Flechas ←→ para navegar • Esc para cerrar
            </p>
          )}
        </div>

        {/* Thumbnails - altura fija en la parte inferior */}
        {images.length > 1 && (
          <div className="flex-shrink-0 absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex gap-2 justify-center overflow-x-auto max-w-2xl mx-auto py-1 scrollbar-hide">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-12 h-9 sm:w-14 sm:h-10 rounded overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? "border-blue-500 ring-2 ring-blue-500/50 opacity-100"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    width={56}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
