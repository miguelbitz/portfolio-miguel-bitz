import Link from "next/link"

export default function About() {
    return (
        <div data-aos="fade-up" className="flex flex-col item-center justify-center min-h-screen p-5 gap-10 " id="secao2">
            <p data-aos="fade-right" className=" text-2xl text-teal-500 font-sans font-bold text-center md:text-6xl ">Sobre</p>
            <div data-aos="fade-left" className="flex p-10 flex-col bg-gradient-to-bl from-violet-950 from-60% md:w-1/2 self-center">
                <p className="text-justify leading-loose"><span className="pl-5" />Sou natural de Porto Alegre, Rio Grande do Sul. Nasci em 1995 e, desde 2013, me apaixonei pelo mundo da programação. Ao longo dos anos, acabei focando em empreendedorismo para ajudar a familia, e hoje me encontro em uma emocionante transição de carreira.<br></br>
                    <span className="text-justify pl-5 leading-loose" />Atualmente, estou totalmente dedicado aos estudos e aprimoramento das minhas habilidades em programação, buscando me tornar um profissional altamente qualificado. Acredito que, por meio da dedicação e do empenho, posso contribuir significativamente para o desenvolvimento de soluções tecnológicas inovadoras.<br></br>
                    <span className="text-justify pl-5 leading-loose" />Compartilhar minha paixão pela programação e aprender com outros profissionais da área é uma das minhas maiores motivações. Estou entusiasmado com as possibilidades que essa carreira oferece e, como um programador apaixonado, estou sempre em busca de novos desafios e oportunidades para crescer e me destacar neste campo.<br></br>
                    <span className="text-justify pl-5 leading-loose" />Nas horas vagas (quando sobra tempo) gosto de assistir animes e series junto com minha noiva, além de jogar alguma coisa no meu computador.
                </p>
            </div>
        </div>
    )
}