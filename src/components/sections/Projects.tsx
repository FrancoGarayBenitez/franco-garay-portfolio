"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { staggerContainer, fadeInUp } from "@/lib/animations/variants";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Una selección de proyectos que demuestran mis habilidades técnicas y
            creatividad
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
