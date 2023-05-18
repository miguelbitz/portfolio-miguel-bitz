'use client'

import React from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import foto from '../../assets/foto.jpg'
import Image from "next/image";

export default function Home() {
    React.useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    const colchetes = "{"
    const colchetes2 = "}"
    const apresentacao = "//Minha Apresentação"

    return (
        <div data-aos="fade-up" className="flex flex-col h-screen w-full items-center justify-center md:flex-row gap-10 p-5" id="secao1">
            <div data-aos="zoom-in" className="flex items-center justify-center w-1/2 self-center md:w-1/4">
                <Image className="rounded-full object-contain md:scale-75" src={foto} alt="foto" />
 
            </div>

            <div className="flex w-auto flex-col items-start justify-center gap-4">
                <p data-aos="fade-right" className="flex w-full justify-start text-6xl text-teal-500 font-sans font-bold md:text-8xl">Olá</p>
                <p data-aos="fade-left" className="flex w-full justify-start text-3xl text-teal-700 font-sans font-semibold">Bem-vindo ao meu portfólio,me chamo Miguel</p>
                <div data-aos="zoom-in" className="flex w-full justify-start">
                    <div className="drop-shadow-md flex p-5 flex-col items-start justify-center bg-gradient-to-bl from-violet-950 from-70% w-3/5 h-36  hover:bg-violet-900 transition duration-500 rounded-lg lg:w-96 ">
                        <p className="text-sm text-gray-600">{apresentacao}</p>
                        <p className="text-sm text-purple-700 font-bold">Infos <scan className="text-white">{colchetes}</scan></p>
                        <p className="text-sm pl-5">Nome: <scan className="text-cyan-500">Miguel,</scan></p>
                        <p className="text-sm pl-5">Sobrenome: <scan className="text-cyan-500">da Luz Alves</scan></p>
                        <p className="text-sm">{colchetes2}</p>
                    </div>
                </div>
                <div data-aos="zoom-in" className="flex w-full justify-end">
                <div className="drop-shadow-md flex p-5 flex-col items-start justify-center bg-gradient-to-bl from-violet-950 from-70% w-3/5 h-36 hover:bg-violet-900 transition duration-500 rounded-lg lg:w-96 ">
                        <p className="text-sm text-purple-700 font-bold">Cargo <scan className="text-white">{colchetes}</scan></p>
                        <p className="text-sm pl-5">Função: <scan className="text-cyan-500">Full Stack Web Designer</scan></p>
                        <p className="text-sm">{colchetes2}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}