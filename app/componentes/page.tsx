'use client';
import { User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactBar() {
    const [sobreMi, setSobreMi] = useState(false);

    return (
        // Contenedor principal anclado arriba al centro
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
                        Soy Curro Valero Casajús, graduado en <strong>Ingeniería Informática</strong> por la <strong>Universidad de Zaragoza</strong>.
                        <br/><br/>
                        Siempre me ha gustado la tecnología y la innovación, es por ello que elegí esta profesión la cual ofrece muchísimas posibilidades.
                        <br/><br/>
                        Si quieres contactar conmigo puedes hacerlo a través de mi correo: <strong>currovalero2003@gmail.com</strong> o podemos conectar por LinkedIn.
                    </p>
                </div>

            </nav>
        </div>
    );
}
