'use client';
import { User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ContactBar({ idioma }: { idioma: string }) {
    const [sobreMi, setSobreMi] = useState(false);
    return (
        <div className="fixed top-6 right-4 md:right-8 z-50 flex flex-col items-end">
            <nav 
                className={`
                    flex flex-col items-center bg-[#bba591] backdrop-blur-md border border-foreground/10 shadow-lg 
                    transition-all duration-500 ease-in-out overflow-hidden
                    ${sobreMi 
                        ? 'w-[95vw] md:w-[600px] rounded-3xl p-6 gap-6' // Estado ABIERTO (más ancho, alto y menos redondeado)
                        : 'w-[240px] rounded-full px-6 py-2 gap-0'          // Estado CERRADO (píldora ajustada a los iconos)
                    }
                `}
            >
                {/* 1. FILA SUPERIOR: Los iconos (siempre visibles) */}
                <div className="flex items-center justify-center gap-6 text-sm font-semibold">
                    <a href="https://www.linkedin.com/in/curro-valero-casajús-1a4941335" target="_blank" rel="noopener noreferrer">
                        <Image
                            priority 
                            src={"/LinkedIn.svg"}
                            height={32}
                            width={30}
                            alt="Logo de LinkedIn"
                            className="hover:scale-110 transition-transform"
                        />
                    </a>
                    
                    <button 
                        onClick={() => setSobreMi(!sobreMi)}
                        className={`hover:scale-110 transition-transform p-2 rounded-full ${sobreMi ? 'bg-black/10' : ''}`}
                    >
                        <User className="text-black" />
                    </button>
                    
                    <a href="https://github.com/Curryllo" target="_blank" rel="noopener noreferrer">
                        <Image
                            priority 
                            src={"/github.svg"}
                            height={32}
                            width={30}
                            alt="Logo de GitHub"
                            className="hover:scale-110 transition-transform"
                        />
                    </a>
                </div>

                {/* 2. CONTENIDO DESPLEGABLE: El texto (solo visible si sobreMi es true) */}
                <div 
                    className={`
                        transition-all duration-500 ease-in-out text-black font-mono text-center
                        ${sobreMi ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'}
                    `}
                >
                    <p className="text-sm md:text-base leading-relaxed">
                        {idioma === 'español' ? (
                            <>
                                Soy Curro Valero Casajús, graduado en <strong>Ingeniería Informática</strong> por la <strong>Universidad de Zaragoza</strong>.
                                <br/><br/>
                                Siempre me ha gustado la tecnología y la innovación, es por ello que elegí esta profesión la cual ofrece muchísimas posibilidades.
                                <br/><br/>
                                Si quieres contactar conmigo puedes hacerlo a través de mi correo: <strong>currovalero2003@gmail.com</strong> o podemos conectar por LinkedIn.
                            </>
                        ) : (
                            <>
                                I'm Curro Valero Casajús, a graduate in <strong>Software Engineering</strong> from the <strong>University of Zaragoza</strong>.
                                <br/><br/>
                                I have always been passionate about technology and innovation, which is why I chose this profession that offers so many possibilities.
                                <br/><br/>
                                If you want to contact me, you can do so through my email: <strong>currovalero2003@gmail.com</strong> or we can connect via LinkedIn.
                            </>
                        )}
                    </p>
                </div>

            </nav>
        </div>
    );
}

export default function Home() {
  const [idioma, setIdioma] = useState('español');

  const experienca = [
    {
      duration: "Enero 2026 - Julio 2026",
      puesto: "Estudiante en prácticas",
      description: "Full Stack en el proyecto de Historial Médico en el SALUD de Aragón, España"
    }
  ]

  const experiencaEnglish = [
    {
      duration: "January 2026 - July 2026",
      puesto: "Internship",
      description: "Full-stack developer on the Medical Records project at SALUD in Aragón, Spain"
    }
  ];

  const proyectos = [
    {
      year: "2026",
      title: "Trabajo Fin de Grado",
      description: "Sistema integral de gestión, explotación y alerta sobre enfermedades vectoriales",
      tech: ["JavaScript", "Kotlin", "Tailwind", "SQL", "JaCoCo", "NextJS", "Spring Boot", "Procesos ETL", "AWS", "PostgreSQL", "Git", "Github", "Docker"]
    },
    {
      year: "2022",
      title: "Space Invaders",
      description: "Creación del famoso juego Space Invaders en el procesador LPC2105",
      tech: ["Ensamblador"]
    },
    {
      year: "2024",
      title: "Gestor de incidencias",
      description: "Aplicación web para la gestión de incidencias IT",
      tech: ["React", ".NET", "SQL Server", "Nginx", "Ollama", "Docker"]
    },
    {
      year: "2024",
      title: "Narratives",
      description: "Aplicación de audiolibros disponible tanto para ordenador como para Android",
      tech: ["React", "React Native", "Ionic", "Flutter", "Node.js", "PostgreSQL"]
    },
    {
      year: "2025",
      title: "Fractal Link",
      description: "Aplicación web para recortar URLs aplicando arquitectura hexagonal y limpia", 
      tech: ["Kotlin", "Spring Boot", "RabbitMQ", "Git", "Github"]
    },
    {
      year: "2025",
      title: "ZaragozaGo",
      description: "Aplicación web para la consulta de información sobre el transporte público de la ciudad de Zaragoza, España",
      tech: ["React", "JavaScript", "Leaflet", "Express", "MongoDB", "Render", "Git", "Github"]
    },
    {
      year: "2025",
      title: "Coachito",
      description: "Aplicación Android para el control de entrenamientos en el gimnasio",
      tech: ["React Native", "TypeScript", "Expo", "Gluestack", "Jest", "Supabase", "Git", "Github"]
    },
    {
      year: "2026",
      title: "Sistema gestor de espacios",
      description: "Sistema para la reserva y gestión de espacios del edificio Ada Byron de la EINA aplicando Domain Driven Design (DDD)",
      tech: ["Java", "TypeScript", "NextJS", "JUnit", "PyGeoAPI", "RabbitMQ", "PostgreSQL", "Github"]
    }
  ];

  const proyectosEnglish = [
    {
      year: "2026",
      title: "Bachelor’s Thesis",
      description: "Management, monitoring and alert system for vector-borne disease",
      tech: ["JavaScript", "Kotlin", "Tailwind", "SQL", "JaCoCo", "NextJS", "Spring Boot", "Procesos ETL", "AWS", "PostgreSQL", "Git", "Github", "Docker"]
    },
    {
      year: "2022",
      title: "Space Invaders",
      description: "Implementation of the famous Space Invaders game on the LPC2105 processor",
      tech: ["Ensamblador"]
    },
    {
      year: "2024",
      title: "Incident Manager",
      description: "Web application for IT incident management",
      tech: ["React", ".NET", "SQL Server", "Nginx", "Ollama", "Docker"]
    },
    {
      year: "2024",
      title: "Narratives",
      description: "Audiobook app available for both computers and Android devices",
      tech: ["React", "React Native", "Ionic", "Flutter", "Node.js", "PostgreSQL"]
    },
    {
      year: "2025",
      title: "Fractal Link",
      description: "Web application for shortening URLs using hexagonal and clean architecture", 
      tech: ["Kotlin", "Spring Boot", "RabbitMQ", "Git", "Github"]
    },
    {
      year: "2025",
      title: "ZaragozaGo",
      description: "Web application for accessing information on public transport in the city of Zaragoza, Spain",
      tech: ["React", "JavaScript", "Leaflet", "Express", "MongoDB", "Render", "Git", "Github"]
    },
    {
      year: "2025",
      title: "Coachito",
      description: "Android app for tracking gym workouts",
      tech: ["React Native", "TypeScript", "Expo", "Gluestack", "Jest", "Supabase", "Git", "Github"]
    },
    {
      year: "2026",
      title: "Space management system",
      description: "A system for booking and managing spaces in EINA’s Ada Byron building, using Domain-Driven Design (DDD)",
      tech: ["Java", "TypeScript", "NextJS", "JUnit", "PyGeoAPI", "RabbitMQ", "PostgreSQL", "Github"]
    }
  ];

  const certificados = [
    {
      title: "B2 First",
      entidad: "Cambridge English"
    },
    {
      title: "Cyber Security 101 Certificate",
      entidad: "TryHackMe"
    },
    {
      title: "AWS Academy Graduate - Engineering Operations Technician - Training Badge",
      entidad: "Amazon Web Services"
    },
    {
      title: "Certificado de participación en Locked Shields Partners Run 2026",
      entidad: "NATO Cooperative Cyberdefence Centre of Excellence"
    }
  ];

  const certificadosEnglish = [
    {
      title: "B2 First",
      entidad: "Cambridge English"
    },
    {
      title: "Cyber Security 101 Certificate",
      entidad: "TryHackMe"
    },
    {
      title: "AWS Academy Graduate - Engineering Operations Technician - Training Badge",
      entidad: "Amazon Web Services"
    },
    {
      title: "Certifacet of participation Locked Shields Partners Run 2026",
      entidad: "NATO Cooperative Cyberdefence Centre of Excellence"
    }
  ];

  const tecnologias = [
    {
      name: "Linux",
      path: "/linux.svg"
    },
    {
      name: "JS/TS",
      path: "/typescript.svg"
    },
    {
      name: "Next.Js",
      path: "/next.svg"
    },
    {
      name: "Tailwind",
      path: "/tailwind.svg"
    },
    {
      name: "Git",
      path: "/git.svg"
    },
    {
      name: "Visual Studio Code",
      path: "/vs-code.svg"
    },
    {
      name: "Docker",
      path: "/docker.svg"
    },
    {
      name: "Bash",
      path: "/bash.svg"
    },
    {
      name: "PostgreSQL",
      path: "/postgresql.svg"
    },
    {
      name: "MongoDB",
      path: "/mongo.svg"
    },
    {
      name: "React",
      path: "/react.svg"
    },
    {
      name: "C++",
      path: "/c-plus-plus.svg"
    },
    {
      name: "Android Studio",
      path: "/android-studio.svg"
    }
  ]

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <div className="fixed top-6 ml-2 flex flex-col items-start">
        <nav>
          <button>
            {idioma === 'español' ? (
              <span 
                className="px-4 py-2 bg-[#bba591] text-[#0e1c4f] rounded-full font-semibold hover:scale-105 transition-transform"
                onClick={() => setIdioma('english')}
              >
                English
              </span>
            ) : (
              <span 
                className="px-4 py-2 bg-[#bba591] text-[#0e1c4f] rounded-full font-semibold hover:scale-105 transition-transform"
                onClick={() => setIdioma('español')}
              >
                Español
              </span>
            )}
          </button>
        </nav>
      </div>
      <ContactBar idioma={idioma} />
      <section className="min-h-screen w-full flex flex-col justify-center items-center pt-24 pb-12 px-4 md:px-8">
        <div className="text-[#0e1c4f] flex flex-col items-center mb-16 md:mb-24">
          <div className="font-mono font-bold text-2xl text-center mb-4">
              {idioma == 'español' ? '¡Hola! Soy Curro' : 'Hi! I am Curro' }
          </div>
          <div className="font-mono font-bold text-4xl md:text-6xl text-center">
            {idioma == 'español' ? 'Ingeniero de Software' : 'Software Engineer' }
          </div>
        </div>
          {/* Este div es el que centra TODO el bloque en la pantalla */}
          <div className="w-full max-w-5xl">
            <h2 className="text-3xl font-bold mb-10 text-center font-mono text-[#336659]">
              {idioma == 'español' ? 'Tecnologías' : 'Technologies' }
            </h2>
            {/* Ahora el carrusel está AQUÍ DENTRO, por lo que respetará el centro de la pantalla */}
            <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused]">
                {tecnologias.map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-32 md:w-40 mx-4 flex flex-col items-center justify-center p-6 bg-foreground/5 border border-foreground/10 rounded-2xl transition-colors hover:bg-foreground/10 cursor-default"
                  >
                    <div className="relative w-12 h-12 mb-4">
                      <Image 
                        src={tech.path} 
                        alt={`Logo de ${tech.name}`} 
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-semibold text-sm text-center text-[#0e1c4f]">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
      <section className="py-20 w-full px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-20 text-center font-mono text-[#336659]">
            {idioma == 'español' ? 'Experiencia' : 'Experience' }
          </h2>
          <div className="relative">
            {/* La línea vertical (Centrada en Desktop, a la izquierda en Móvil) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white -translate-x-1/2 rounded"></div>
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-white rounded"></div>
            {(idioma == 'español' ? experienca : experiencaEnglish).map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 w-full ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              > 
                {/* El puntito en la línea de tiempo (Desktop) */}
                <div className="hidden md:block absolute left-1/2 w-5 h-5 bg-[#bba591] rounded-full z-10 border-4 border-background -translate-x-1/2"></div>
                {/* El puntito en la línea de tiempo (Móvil) */}
                <div className="md:hidden absolute left-4 w-5 h-5 bg-[#bba591] rounded-full z-10 border-4 border-background -translate-x-[8px]"></div>

                {/* La tarjeta del proyecto */}
                <div className="w-full ml-12 md:ml-0 md:w-[45%] p-6 border-2 border-foreground/10 rounded-xl bg-foreground shadow-lg transition-transform hover:-translate-y-2">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold rounded-full bg-white text-[#336659]">
                    {exp.duration}
                  </span>
                  <h3 className="font-bold text-xl text-[#0e1c4f] mb-2">{exp.puesto}</h3>
                  <p className="text-sm text-[#0e1c4f] opacity-80">{exp.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN TIMELINE VERTICAL */}
      <section className="py-20 w-full px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-20 text-center font-mono text-[#336659]">
            {idioma == 'español' ? 'Mis Proyectos' : 'My Projects' }
          </h2>
          <div className="relative">
            {/* La línea vertical (Centrada en Desktop, a la izquierda en Móvil) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white -translate-x-1/2 rounded"></div>
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-1 bg-[#bba591] rounded"></div>
            {/* Iteramos sobre los proyectos */}
            {(idioma == 'español' ? proyectos : proyectosEnglish).sort((a, b) => Number(b.year) - Number(a.year)).map((project, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 w-full ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* El puntito en la línea de tiempo (Desktop) */}
                <div className="hidden md:block absolute left-1/2 w-5 h-5 bg-[#bba591] rounded-full z-10 border-4 border-background -translate-x-1/2"></div>
                {/* El puntito en la línea de tiempo (Móvil) */}
                <div className="md:hidden absolute left-4 w-5 h-5 bg-[#bba591] rounded-full z-10 border-4 border-background -translate-x-[8px]"></div>
                {/* --- INICIO DE LA TARJETA 3D --- */}
                {/* 1. Añadimos tabIndex={0} para hacerla "tocable", cursor-pointer para el ratón, y focus:outline-none para quitar el borde azul que ponen algunos navegadores */}
                <div 
                  tabIndex={0} 
                  className="group relative w-full ml-12 md:ml-0 md:w-[45%] h-56 [perspective:1000px] cursor-pointer focus:outline-none"
                >
                  {/* 2. Añadimos group-focus:[transform:rotateY(180deg)] justo al lado del group-hover */}
                  <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)] shadow-lg rounded-xl">
                    {/* 3. CARA FRONTAL (Se queda igual) */}
                    <div className="absolute inset-0 w-full h-full backface-hidden p-6 border-2 border-foreground/10 rounded-xl bg-foreground flex flex-col justify-center">
                      <span className="inline-block px-3 py-1 mb-3 text-xs font-bold rounded-full bg-white text-[#336659] self-start">
                        {project.year}
                      </span>
                      <h3 className="font-bold text-xl mb-2 text-[#0e1c4f]">{project.title}</h3>
                      <p className="text-sm opacity-80 text-[#0e1c4f] line-clamp-3">{project.description}</p>
                    </div>
                    {/* 4. CARA TRASERA (Se queda igual) */}
                    <div className="absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)] p-6 border-2 border-[#336659] rounded-xl bg-[#336659] text-background flex flex-col items-center justify-center text-center">
                      <h4 className="font-bold mb-4 font-mono text-lg">
                        {idioma == 'español' ? 'Stack Tecnológico' : 'Stack'}
                      </h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.tech?.map((t, i) => (
                          <span key={i} className="px-3 py-1 bg-background text-[#336659] rounded-full text-xs font-bold shadow">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* --- FIN DE LA TARJETA 3D --- */}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 pb-8 w-full px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-20 text-center font-mono text-[#336659]">
            {idioma == 'español' ? 'Certificados' : 'Certificates' }
          </h2>
          {/* Contenedor GRID: Gestiona las columnas automáticamente */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(idioma == 'español' ? certificados : certificadosEnglish).map((certificado, index) => (
              /* Eliminamos el div extra que tenías y ponemos el key directamente en la tarjeta */
              <div 
                key={index} 
                className="p-6 border-2 border-foreground/10 rounded-xl bg-foreground flex flex-col justify-center shadow-lg transition-transform hover:-translate-y-2"
              >
                <span className="inline-block px-3 py-1 mb-3 text-lg font-bold rounded-xl bg-white text-[#336659] self-start">
                  {certificado.entidad}
                </span>
                <h3 className="font-bold text-md mb-2 text-[#0e1c4f]">
                  {certificado.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}