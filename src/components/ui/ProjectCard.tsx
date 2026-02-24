"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/types/global";
import {
  Github,
  ExternalLink,
  Play,
  X,
  Calendar,
  Code,
  Smartphone,
  Globe,
  ImageIcon,
  ZoomIn,
} from "lucide-react";
import ImageGallery from "./ImageGallery";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [imageError, setImageError] = useState(false);

  const allImages = project.images?.screenshots || [];
  const hasMultipleImages = allImages.length > 0;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "FULLSTACK":
        return <Code size={16} className="text-purple-600" />;
      case "MOBILE":
        return <Smartphone size={16} className="text-green-600" />;
      case "WEB":
        return <Globe size={16} className="text-blue-600" />;
      default:
        return <Code size={16} className="text-gray-600" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "FULLSTACK":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400";
      case "MOBILE":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "WEB":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      >
        {/* Imagen del proyecto */}
        <div className="relative h-48 overflow-hidden">
          {!imageError ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <Code size={48} className="mx-auto mb-2" />
                <p className="text-sm font-medium">{project.title}</p>
              </div>
            </div>
          )}

          {/* Overlay con botones */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            {project.demoVideoUrl && (
              <motion.button
                onClick={() => setShowVideo(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg"
                title="Ver video demo"
              >
                <Play size={20} />
              </motion.button>
            )}

            {hasMultipleImages && (
              <motion.button
                onClick={() => setShowGallery(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg"
                title="Ver galería"
              >
                <ImageIcon size={20} />
              </motion.button>
            )}
          </div>

          {/* Badge de categoría */}
          <div className="absolute top-3 left-3">
            <span
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                project.category,
              )}`}
            >
              {getCategoryIcon(project.category)}
              {project.category}
            </span>
          </div>

          {/* Badge Featured */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                ⭐ Destacado
              </span>
            </div>
          )}

          {/* Indicador de múltiples imágenes */}
          {hasMultipleImages && (
            <div className="absolute bottom-3 right-3">
              <span className="bg-black/60 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                <ZoomIn size={12} />
                {allImages.length} fotos
              </span>
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Calendar size={12} />
              {new Date(project.completionDate).getFullYear()}
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech.name}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
                style={{ borderLeft: `3px solid ${tech.color}` }}
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md">
                +{project.technologies.length - 4} más
              </span>
            )}
          </div>

          {/* Acciones */}
          <div className="flex gap-3">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex-1 justify-center text-sm font-medium"
            >
              <Github size={16} />
              Código
            </motion.a>

            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center text-sm font-medium"
              >
                <ExternalLink size={16} />
                Demo
              </motion.a>
            )}

            {project.demoVideoUrl && (
              <motion.button
                onClick={() => setShowVideo(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
              >
                <Play size={16} />
                Video
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal de Video */}
      {showVideo && project.demoVideoUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {project.title} - Demo
              </h3>
              <button
                onClick={() => setShowVideo(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Cerrar video"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <video
                src={project.demoVideoUrl}
                controls
                autoPlay
                muted
                className="w-full max-h-[70vh] rounded-lg"
                poster={project.images?.thumbnail}
              >
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Galería de imágenes */}
      <ImageGallery
        images={allImages}
        title={project.title}
        isOpen={showGallery}
        onClose={() => setShowGallery(false)}
      />
    </>
  );
}
