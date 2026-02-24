"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Hola, soy{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Franco Garay
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Desarrollador Full Stack especializado en React, Node.js y
              TypeScript
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Ver Proyectos
              </motion.button>
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors text-center font-medium"
              >
                Descargar CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <Image
                src="/profile.png"
                alt="Franco Garay"
                width={300}
                height={300}
                className="rounded-full shadow-2xl w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover"
                priority
                style={{ objectPosition: "top" }}
              />
              {/* Decorative elements */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full border-4 border-blue-200 dark:border-blue-800 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
