import { useEffect } from 'react';

import Image from 'next/image';

// Trabalhos Recentes
import BielRiste from "../../public/images/Biels/BielRiste.jpg"; // Guerra civil
import NovelaReis from "../../public/images/NovelaReis.jpg";
import Vicente from "../../public/images/Vicente.jpg";

import Transitions from '../../components/transicao';
import Sobre from '../../components/sobre';

export default function Artista() {
    useEffect(() => {
        const inViewport = (entries, observer) => {
            entries.forEach(entry => {
                entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
            });
        };

        const Obs = new IntersectionObserver(inViewport);
        const obsOptions = {};

        // Attach observer to every [data-inviewport] element:
        const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
        ELs_inViewport.forEach(EL => {
            Obs.observe(EL, obsOptions);
        });
    }, [])

    return (
        <Transitions>
            <Sobre />

            <h2>Artista</h2>
            <section id="artista">
                {/* Imagens ? */}
                <div>
                    <div data-inviewport="slide-p-in" id="tr">
                        <h3>Trabalhos Realizados</h3>
                        <p>
                            <strong>Desfiles</strong>: Feira Opera 2020/21, Catwalk internacional,
                            Aquarela Nacional, Passarela produção Brasil como
                            Mister São Paulo.
                        </p>
                        <p>
                            <strong>Catálogos e campanhas</strong>: Oliver Kids, Malwee, Hering, Ellus, Demanos, Puket, Pistol Star e Hershey&apos;s.
                        </p>
                        <p>
                            <strong>Novelas</strong>: As aventuras de Poliana SBT e Novela Reis da Record tv.<br />
                            <strong>Séries</strong>: Escolinha Ecológica NGT TV e Bugados Globo play.<br />
                            <strong>TV</strong>: personagem LIPI na tv SKY, programa de humor infantil exibido todos os sábados<br />
                            <strong>Comerciais</strong>: Prefeitura de Sorocaba, Itau, Bradesco.
                        </p>
                        <p>
                            <strong>Editoriais</strong>: Villy Ribeiro, Luciana Kajaer, Márcio Falcão.
                        </p>
                    </div>
                </div>
                <div>
                <h3>Trabalhos Recentes</h3>
                    <div>
                        <Image
                            layout='intrinsic'
                            objectFit='cover'
                            objectPosition={"center center"}
                            src={Vicente}
                            width={500}
                            height={500}
                            data-inviewport="scale-in"
                        />
                        <p><strong>Filme</strong>: Vicente na cidade Fantasma
                            Personagem: Vicente (protagonista)</p>
                    </div>
                    <div>
                        <Image
                            layout='intrinsic'
                            objectFit='cover'
                            objectPosition={"top center"}
                            src={BielRiste}
                            width={500}
                            height={500}
                            data-inviewport="scale-in"
                        />
                        <p><strong>Filme</strong>: Guerra Cívil
                            Personagem: Michelângelo (protagonista)
                            Direção Flavio Carnielli</p>
                    </div>
                    <div>
                        <Image
                            layout='intrinsic'
                            objectFit="cover"
                            objectPosition={"left center"}
                            src={NovelaReis}
                            width={500}
                            height={500}
                            data-inviewport="scale-in"
                        />
                        <p><strong>Novela:</strong> Reis</p>
                    </div>
                </div>
            </section>
        </Transitions>
    )
}