import Image from 'next/image'

import BielOlhar from "../../public/Biels/Bielolhar.jpg"

export default function Sobre() {
    return (
        <>
            <h2>Sobre</h2>
            <section id="sobre" data-inviewport="slide-in">
            <div>
                <p>
                Biel Marconato, 10 anos, atua no meio audiovisual como
                ator, modelo e influencer. É um menino que está sempre
                buscando se aprimorar e se atualizar.
                </p>
                <p>
                Como parte da sua formação teatral estudou na Escola
                Oficina e fez curso com os diretores Márcio Trigo,
                Foguinho, Bruno Stuane e Thiago Coquelet. Em sua
                carreira já participou de campanhas publicitárias, peças de
                teatro e seriados de televisão.
                </p>
                <p>
                Atualmente estuda piano e sapateado e tem como
                passatempo jogar videogame.
                </p>
                <p>
                Em seu Instagram, Biel Marconato compartilha dicas de
                moda, os bastidores das campanhas, gravações e também
                dicas de estudos e línguas.
                </p>
                <p>
                Estando sempre ligado na trend do momento, Biel mostra
                seu lado divertido através dos reels de comédia.
                </p>
            </div>
            <Image 
                layout='intrinsic'
                objectFit='contain'
                objectPosition={"center center"}
                src={BielOlhar}
            />
            </section>
        </>
    )
}