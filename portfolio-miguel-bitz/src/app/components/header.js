import Link from 'next/link'

export default function Header() {
    return (
        <div>
            <ul className='flex justify-center gap-10 p-10 text-xs md:text-lg'>
                <li><Link href="#secao2" className="nav">Sobre</Link></li>
                <li><Link href="#secao3" className="nav">Tecnologias</Link></li>
                <li><Link href="#secao4" className="nav">Projetos</Link></li>
            </ul>
        </div>
    )
}
