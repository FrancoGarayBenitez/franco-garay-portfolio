"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  HardDrive,
  GitBranch,
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
    "Dominio del área de Salud",
  ];

  const timelineEvents = [
    {
      type: "cert",
      title: "Desarrollo Web",
      institution: "CoderHouse",
      date: "2022",
      description: "HTML, CSS y bases del desarrollo web moderno.",
      certificateUrl: "/docs/certificado-desarrollo-web.png",
      status: undefined as string | undefined,
      certificateDownloadUrl: null as string | null,
      featured: false,
    },
    {
      type: "cert",
      title: "JavaScript",
      institution: "CoderHouse",
      date: "2022",
      description: "JavaScript ES6+, DOM y programación asíncrona.",
      certificateUrl: "/docs/certificado-javascript.png",
      status: undefined as string | undefined,
      certificateDownloadUrl: null as string | null,
      featured: false,
    },
    {
      type: "cert",
      title: "React.js",
      institution: "CoderHouse",
      date: "2023",
      description: "React, hooks y desarrollo de aplicaciones SPA.",
      certificateUrl: "/docs/certificado-react.png",
      status: undefined as string | undefined,
      certificateDownloadUrl: null as string | null,
      featured: false,
    },
    {
      type: "edu",
      title: "Lic. Bioimágenes",
      institution: "UNC",
      date: "2024",
      description:
        "Licenciatura en Producción de Bioimágenes. Especializado en Tomografía Computada.",
      certificateUrl: null,
      status: "✓ Título en mano" as string | undefined,
      certificateDownloadUrl: "/docs/titulo_bioimagenes.jpeg" as string | null,
      featured: false,
    },
    {
      type: "edu",
      title: "Técnico Programador",
      institution: "UTN Mendoza",
      date: "2025",
      description:
        "Tecnicatura Universitaria en Programación. Proyecto final: El Buen Sabor. Título en trámite.",
      certificateUrl: "/docs/estadoAcadémicoUtn.pdf",
      status: undefined as string | undefined,
      certificateDownloadUrl: null as string | null,
      featured: true,
    },
  ];

  const techSkills = [
    {
      icon: <Code2 size={32} />,
      title: "Frontend",
      tools: "React · Next.js · TypeScript · Tailwind",
      color: "bg-blue-500",
    },
    {
      icon: <Server size={32} />,
      title: "Backend",
      tools: "Java · Spring Boot · Spring Security · JWT",
      color: "bg-green-500",
    },
    {
      icon: <HardDrive size={32} />,
      title: "Base de Datos",
      tools: "MySQL · Hibernate JPA · Supabase",
      color: "bg-purple-500",
    },
    {
      icon: <GitBranch size={32} />,
      title: "Herramientas",
      tools: "Git · GitHub · Vite · Gradle",
      color: "bg-orange-500",
    },
  ];

  const handleCertificateDownload = (url: string, title: string) => {
    const ext = url.split(".").pop()?.toLowerCase() || "png";
    if (ext === "pdf") {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.toLowerCase().replace(/\s+/g, "-")}.${ext}`;
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
                En 2024 me gradué como{" "}
                <strong>Licenciado en Producción de Bioimágenes</strong> en la
                UNC, especializado en Tomografía Computada. Ese mismo año, ya
                con dos años de formación en programación encima, supe que
                quería cruzar definitivamente al mundo del desarrollo de
                software.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                En <strong>2025</strong> completé la{" "}
                <strong>
                  Tecnicatura Universitaria en Programación (UTN Mendoza)
                </strong>{" "}
                con el sistema <em>El Buen Sabor</em> como proyecto final: una
                plataforma gastronómica full stack con Spring Boot, React y
                WebSocket. Ese perfil dual no es casualidad — uno de mis
                proyectos, <strong>Radiología Mendoza</strong>, nació justamente
                de conocer el área de salud desde adentro.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Hoy estoy en búsqueda de mi primer empleo como desarrollador de
                software.
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
              <h4 className="text-xl font-bold mb-3">Perfil Técnico</h4>
              <div className="text-blue-100 text-sm mb-5 leading-relaxed space-y-1">
                <p>🎓 Lic. en Producción de Bioimágenes</p>
                <p className="text-blue-200 text-xs">
                  Universidad Nacional de Córdoba
                </p>
                <div className="border-t border-blue-500 my-2" />
                <p>🎓 Técnico Universitario en Programación</p>
                <p className="text-blue-200 text-xs">UTN Mendoza</p>
              </div>
              <motion.a
                href="/docs/cv_franco_garay.pdf"
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
        <div className="mb-12">
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
                      className={`absolute -left-2.25 top-0 w-4 h-4 rounded-full border-2 bg-white dark:bg-gray-800 ${colors.border}`}
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
                            event.title,
                          )
                        }
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`text-xs px-3 py-1.5 rounded font-medium transition-colors ${colors.buttonLight}`}
                      >
                        {event.certificateUrl.endsWith(".pdf")
                          ? "📊 Estado Académico"
                          : "📋 Certificado"}
                      </motion.button>
                    )}

                    {!event.certificateUrl && event.status && (
                      <div className="flex flex-col gap-1">
                        <span className={`text-xs font-medium ${colors.text}`}>
                          {event.status}
                        </span>
                        {event.certificateDownloadUrl && (
                          <motion.button
                            onClick={() =>
                              handleCertificateDownload(
                                event.certificateDownloadUrl!,
                                event.title,
                              )
                            }
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`text-xs px-3 py-1.5 rounded font-medium transition-colors ${colors.buttonLight}`}
                          >
                            📋 Título
                          </motion.button>
                        )}
                      </div>
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
                      className="relative flex flex-col items-center max-w-45"
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
                                event.title,
                              )
                            }
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full text-xs px-2 py-1.5 rounded font-medium transition-colors ${colors.button}`}
                          >
                            <Download size={12} className="inline mr-1" />
                            {event.certificateUrl.endsWith(".pdf")
                              ? "Ver Estado"
                              : "Descargar"}
                          </motion.button>
                        )}

                        {!event.certificateUrl && event.status && (
                          <div className="flex flex-col gap-1.5">
                            <div
                              className={`text-xs font-medium py-1 ${colors.text}`}
                            >
                              {event.status}
                            </div>
                            {event.certificateDownloadUrl && (
                              <motion.button
                                onClick={() =>
                                  handleCertificateDownload(
                                    event.certificateDownloadUrl!,
                                    event.title,
                                  )
                                }
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full text-xs px-2 py-1.5 rounded font-medium transition-colors ${colors.button}`}
                              >
                                <Download size={12} className="inline mr-1" />
                                Título
                              </motion.button>
                            )}
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
        <div className="pt-2">
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
