import { FaReact, FaHtml5, FaCss3, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';


export default function Technologies() {
    return (
        <div data-aos="fade-up" className="flex flex-col item-center justify-center min-h-screen p-5 gap-y-60 " id="secao3">
            <p data-aos="fade-right" className=" text-4xl text-teal-500 font-sans font-bold text-center md:text-6xl ">Tecnologias</p>
            <div>
                <div data-aos="fade-left" className="flex flex-wrap items-center justify-center gap-10 gap-y-28 h-90 w-full">
                    <div className='flex flex-col justify-center h-48 w-40 items-center bg-gradient-to-bl from-violet-950 rounded-lg transform hover:scale-90 transition duration-500 '>
                        <FaHtml5 size={120} />
                        <p>HTML</p>
                    </div>
                    <div className='flex flex-col justify-center h-48 w-40 items-center bg-gradient-to-bl from-violet-950 rounded-lg transform hover:scale-90 transition duration-500'>
                        <FaCss3 size={120} />
                        <p>CSS</p>
                    </div>
                    <div className='flex flex-col justify-center h-48 w-40 items-center bg-gradient-to-bl from-violet-950 rounded-lg transform hover:scale-90 transition duration-500'>
                        <FaJsSquare size={120} />
                        <p>JavaScript</p>
                    </div>
                    <div className='flex flex-col justify-center h-48 w-40 items-center bg-gradient-to-bl from-violet-950 rounded-lg transform hover:scale-90 transition duration-500'>
                        <FaReact size={120} />
                        <p>ReactJS</p>
                    </div>
                    <div className='flex flex-col justify-center h-48 w-40 items-center bg-gradient-to-bl from-violet-950 rounded-lg transform hover:scale-90 transition duration-500'>
                        <SiTailwindcss size={120} />
                        <p>Tailwind</p>
                    </div>
                    <div  className='flex flex-col justify-center h-48 w-40 items-center bg-gradient-to-bl from-violet-950 rounded-lg transform hover:scale-90 transition duration-500'>
                        <TbBrandNextjs size={120} />
                        <p>NextJS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}