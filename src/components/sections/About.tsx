'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code2, Database, Smartphone, Globe } from 'lucide-react'

export default function About() {
    const skills = [
        {
            icon: <Code2 size={40} />,
            title: 'Frontend Development',
            description: 'React, Next.js, TypeScript, Tailwind CSS',
            color: 'bg-blue-500'
        },
        {
            icon: <Database size={40} />,
            title: 'Backend Development',
            description: 'Node.js, Express, Prisma, PostgreSQL',
            color: 'bg-green-500'
        },
        {
            icon: <Smartphone size={40} />,
            title: 'Mobile Development',
            description: 'React Native, Expo, Flutter',
            color: 'bg-purple-500'
        },
        {
            icon: <Globe size={40} />,
            title: 'DevOps & Cloud',
            description: 'Docker, AWS, Vercel, CI/CD',
            color: 'bg-orange-500'
        }
    ]

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                            Sobre Mí
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            Soy un desarrollador Full Stack apasionado por crear soluciones digitales
                            innovadoras. Con más de 3 años de experiencia, me especializo en desarrollar
                            aplicaciones web modernas y escalables.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            Mi enfoque se centra en escribir código limpio, implementar las mejores
                            prácticas y mantenerme actualizado con las últimas tecnologías del ecosistema web.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Descargar CV
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Image
                            src="/about-image.jpg"
                            alt="Trabajando en código"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
                        Mis Habilidades
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg text-center"
                            >
                                <div className={`${skill.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                                    {skill.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {skill.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {skill.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}