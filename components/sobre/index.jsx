import Image from 'next/image'

import BielOlhar from "../../public/images/Biels/Bielolhar.jpg"

export default function Sobre() {
    return (
        <>
            <h2>ator - modelo - influencer</h2>
            <section id="sobre" data-inviewport="slide-in">
                <div>
                    <p>
                        Biel Marconato, 12 anos, atua no meio audiovisual como
                        ator, modelo e influencer. É um menino que está sempre
                        buscando se aprimorar e se atualizar.
                    </p>
                    <p>
                        Como parte da sua formação de ator, estuda há 1 ano na Escola Oficina e faz vários cursos e workshops através da agência Cintra com os melhores profissionais do mercado tais como
                        Márcio Trigo, Foguinho, Bruno Stuane, Thiago Coquelet, Márcia Ítalo, Cristina Bethencourt, Edgar Miranda entre outros. Em sua
                        carreira já participou de campanhas publicitárias, peças de
                        teatro e seriados de televisão.
                    </p>
                    <p>
                        Atualmente estuda piano; cinema; TV; sapateado e tem como
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
                <div>
                    <Image
                        layout='intrinsic'
                        objectFit='contain'
                        objectPosition={"center center"}
                        src={BielOlhar}
                    />
                </div>
            </section>
        </>
    )
}