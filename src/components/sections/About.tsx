"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Smartphone,
  Globe,
  GraduationCap,
  Award,
  Calendar,
  CheckCircle2,
  FileText,
  Download,
  BookOpen,
} from "lucide-react";

export default function About() {
  const softSkills = [
    "Metodologías Ágiles",
    "Resolución de Problemas",
    "Trabajo en Equipo",
    "Arquitectura de Software",
  ];

  const timelineEvents = [
    {
      type: "cert",
      title: "Desarrollo Web",
      institution: "CoderHouse",
      date: "2021",
      description: "HTML, CSS y bases del desarrollo web moderno.",
      certificateUrl: "/docs/certificado-desarrollo-web.png",
      featured: false,
    },
    {
      type: "cert",
      title: "JavaScript",
      institution: "CoderHouse",
      date: "2022",
      description: "JavaScript ES6+, DOM y programación asíncrona.",
      certificateUrl: "/docs/certificado-javascript.png",
      featured: false,
    },
    {
      type: "cert",
      title: "React.js",
      institution: "CoderHouse",
      date: "2022",
      description: "React, hooks y desarrollo de aplicaciones SPA.",
      certificateUrl: "/docs/certificado-react.png",
      featured: false,
    },
    {
      type: "study",
      title: "Backend",
      institution: "CoderHouse",
      date: "2022",
      description: "Node.js, Express y bases de datos (en proceso).",
      certificateUrl: null,
      featured: false,
    },
    {
      type: "edu",
      title: "Graduación UTN",
      institution: "UTN",
      date: "2024",
      description: "Tecnicatura Universitaria en Programación completada.",
      certificateUrl: "/docs/constancia-tramite-utn.png",
      featured: true,
    },
  ];

  const techSkills = [
    {
      icon: <Code2 size={32} />,
      title: "Frontend",
      tools: "React, Next.js, TS",
      color: "bg-blue-500",
    },
    {
      icon: <Database size={32} />,
      title: "Backend",
      tools: "Node, Express, SQL",
      color: "bg-green-500",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile",
      tools: "React Native, Expo",
      color: "bg-purple-500",
    },
    {
      icon: <Globe size={32} />,
      title: "DevOps",
      tools: "Docker, Vercel, Git",
      color: "bg-orange-500",
    },
  ];

  const handleCertificateDownload = (url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    // Cambio la extensión a .png
    link.download = `${title.toLowerCase().replace(/\s+/g, "-")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "cert":
        return <Award size={14} className="text-green-600" />;
      case "study":
        return <BookOpen size={14} className="text-orange-600" />;
      case "edu":
        return <GraduationCap size={14} className="text-blue-600" />;
      default:
        return <Award size={14} className="text-gray-600" />;
    }
  };

  const getEventColors = (type: string, featured: boolean) => {
    if (featured) {
      return {
        border: "border-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]",
        bg: "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800",
        text: "text-blue-600",
        button: "bg-blue-600 text-white hover:bg-blue-700",
        buttonLight:
          "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/30",
      };
    }

    switch (type) {
      case "cert":
        return {
          border: "border-green-500",
          bg: "bg-green-50 dark:bg-green-900/10 border-green-100 dark:border-green-800",
          text: "text-green-600",
          button: "bg-green-600 text-white hover:bg-green-700",
          buttonLight:
            "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/30",
        };
      case "study":
        return {
          border: "border-orange-500",
          bg: "bg-orange-50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-800",
          text: "text-orange-600",
          button: "bg-orange-600 text-white hover:bg-orange-700",
          buttonLight:
            "bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/30",
        };
      default:
        return {
          border: "border-gray-500",
          bg: "bg-gray-50 dark:bg-gray-900/10 border-gray-100 dark:border-gray-800",
          text: "text-gray-600",
          button: "bg-gray-600 text-white hover:bg-gray-700",
          buttonLight:
            "bg-gray-100 dark:bg-gray-900/20 text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-900/30",
        };
    }
  };

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* 1. STORYTELLING & PROFESSIONAL PROFILE */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center lg:text-left"
          >
            Sobre Mí
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Mi trayectoria comenzó con la curiosidad de entender cómo se
                construye la tecnología. Tras completar la carrera Full Stack en{" "}
                <strong>CoderHouse</strong>, decidí profundizar mi formación
                académica ingresando a la <strong>UTN</strong> para dominar las
                bases de la ingeniería.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Hoy, combino la agilidad de los entornos modernos con el rigor
                del análisis universitario. Mi objetivo es escribir{" "}
                <strong>código escalable</strong> y aportar soluciones técnicas
                sólidas en equipos de alto rendimiento.
              </p>

              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                  >
                    <CheckCircle2 size={16} className="text-blue-500" /> {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* PROFESSIONAL PROFILE CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-500 rounded-full opacity-30" />
              <div className="bg-blue-500 p-4 rounded-full mb-4 shadow-inner">
                <FileText size={40} className="text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Perfil Técnico</h4>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Técnico Universitario graduado, enfocado en el desarrollo de
                software robusto y aprendizaje continuo.
              </p>
              <motion.a
                href="/cv.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-sm shadow-md hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <Download size={16} />
                Descargar CV
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* 2. TIMELINE SIMPLIFICADA */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Mi Formación
          </h3>

          {/* Timeline Mobile (Vertical) */}
          <div className="md:hidden">
            <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4">
              {timelineEvents.map((event, index) => {
                const colors = getEventColors(event.type, event.featured);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pb-8 pl-8"
                  >
                    <div
                      className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-white dark:bg-gray-800 ${colors.border}`}
                    />

                    <div className="flex items-center gap-2 mb-1">
                      {getEventIcon(event.type)}
                      <h4 className={`text-base font-bold ${colors.text}`}>
                        {event.title}
                      </h4>
                      <span className="text-xs text-gray-500 ml-auto">
                        {event.date}
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {event.description}
                    </p>

                    {event.certificateUrl && (
                      <motion.button
                        onClick={() =>
                          handleCertificateDownload(
                            event.certificateUrl!,
                            event.title
                          )
                        }
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`text-xs px-3 py-1.5 rounded font-medium transition-colors ${colors.buttonLight}`}
                      >
                        📋 Certificado
                      </motion.button>
                    )}

                    {!event.certificateUrl && (
                      <span className="text-xs text-gray-400 italic">
                        En progreso
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Timeline Desktop (Horizontal) */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700" />

              <div className="flex justify-between items-start">
                {timelineEvents.map((event, index) => {
                  const colors = getEventColors(event.type, event.featured);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative flex flex-col items-center max-w-[180px]"
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-4 bg-white dark:bg-gray-800 mb-4 ${colors.border} ${event.featured ? "scale-125 z-10" : ""}`}
                      />

                      <div
                        className={`p-4 rounded-xl shadow-sm border text-center ${colors.bg}`}
                      >
                        <div className="flex items-center justify-center gap-1 mb-2">
                          {getEventIcon(event.type)}
                          <h4 className={`text-sm font-bold ${colors.text}`}>
                            {event.title}
                          </h4>
                        </div>

                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          {event.date}
                        </p>

                        <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                          {event.description}
                        </p>

                        {event.certificateUrl && (
                          <motion.button
                            onClick={() =>
                              handleCertificateDownload(
                                event.certificateUrl!,
                                event.title
                              )
                            }
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full text-xs px-2 py-1.5 rounded font-medium transition-colors ${colors.button}`}
                          >
                            <Download size={12} className="inline mr-1" />
                            Descargar
                          </motion.button>
                        )}

                        {!event.certificateUrl && (
                          <div className="text-xs text-gray-400 italic py-1.5">
                            En proceso
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 3. STACK TECNOLÓGICO */}
        <div className="pt-10">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Stack Tecnológico
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 p-6 rounded-2xl border border-gray-100 dark:border-gray-600 shadow-sm text-center flex flex-col items-center hover:shadow-lg transition-all group cursor-pointer"
              >
                <div
                  className={`${skill.color} p-3 rounded-xl text-white mb-4 shadow-lg shadow-gray-200 dark:shadow-none group-hover:scale-110 transition-transform`}
                >
                  {skill.icon}
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono tracking-tighter">
                  {skill.tools}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
