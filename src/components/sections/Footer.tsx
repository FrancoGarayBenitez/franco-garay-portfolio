'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github size={20} />,
            href: 'https://github.com/tu-usuario',
            color: 'hover:text-gray-900 dark:hover:text-white'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin size={20} />,
            href: 'https://linkedin.com/in/tu-perfil',
            color: 'hover:text-blue-600'
        },
        {
            name: 'Twitter',
            icon: <Twitter size={20} />,
            href: 'https://twitter.com/tu-usuario',
            color: 'hover:text-sky-500'
        },
        {
            name: 'Email',
            icon: <Mail size={20} />,
            href: 'mailto:juan.perez@email.com',
            color: 'hover:text-red-500'
        }
    ]

    const quickLinks = [
        { name: 'Inicio', href: '#hero' },
        { name: 'Sobre mí', href: '#about' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Contacto', href: '#contact' },
    ]

    return (
        <footer className="bg-gray-900 dark:bg-black text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand & Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-4">Juan Pérez</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Desarrollador Full Stack apasionado por crear experiencias digitales
                            excepcionales y soluciones innovadoras.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`text-gray-400 ${link.color} transition-colors p-2 rounded-lg hover:bg-gray-800`}
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
                        <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
                        <nav className="space-y-3">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-gray-300 hover:text-white transition-colors"
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
                        <h4 className="text-lg font-semibold mb-6">Contacto</h4>
                        <div className="space-y-3 text-gray-300">
                            <p>📧 juan.perez@email.com</p>
                            <p>📱 +52 123 456 7890</p>
                            <p>📍 Ciudad de México, México</p>
                            <p>💼 Disponible para proyectos freelance</p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-gray-400 text-sm">
                        © 2026 Juan Pérez. Todos los derechos reservados.
                    </p>

                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <span>Hecho con</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <Heart size={16} className="text-red-500 fill-current" />
                        </motion.div>
                        <span>y Next.js</span>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}