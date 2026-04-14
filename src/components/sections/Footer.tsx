"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, MapPin } from "lucide-react";
import { env } from "@/lib/config/env";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: env.githubUrl,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: env.linkedinUrl,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      href: `mailto:${env.contactEmail}`,
      color: "hover:text-red-400",
    },
  ];

  const quickLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Franco Garay
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
              Desarrollador Full Stack con formación dual en programación y
              ciencias de la salud. Especializado en Java · Spring Boot · React
              · TypeScript.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-500 dark:text-gray-400 ${link.color} transition-colors p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800`}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Navegación
            </h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
              Contacto
            </h4>
            <div className="space-y-3 text-gray-500 dark:text-gray-400 text-sm">
              <a
                href={`mailto:${env.contactEmail}`}
                className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail size={14} />
                {env.contactEmail}
              </a>
              <a
                href="https://maps.google.com/?q=Godoy+Cruz,+Mendoza,+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <MapPin size={14} />
                {env.contactLocation}
              </a>
              <p className="text-blue-600 dark:text-blue-400 font-medium pt-1">
                En búsqueda activa de empleo
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-300 dark:border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Franco Garay. Todos los derechos
            reservados.
          </p>

          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <span>Hecho con</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-500 fill-current" />
            </motion.div>
            <span>y Next.js</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
