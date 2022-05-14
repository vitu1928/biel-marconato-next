import Image from 'next/image'

// Trabalhos Recentes
import NovelaReis from "../../public/Imagens/NovelaReis.jpg"
import Vicente from "../../public/Imagens/Vicente.jpg"
import BielRiste from "../../public/Biels/BielRiste.jpg" // Guerra civil

export default function Artista() {
    return (
        <>
            <h2>Artista</h2>
            <section id="artista">
            {/* Imagens ? */}
            <h3>Trabalhos Recentes</h3>
            <div>
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
                    objectFit="cover"
                    objectPosition={"left center"}
                    src={NovelaReis}
                    width={500}
                    height={500}
                    data-inviewport="scale-in"
                />
                <p><strong>Novela:</strong> Reis</p>
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
            </div>

            <div data-inviewport="slide-p-in" id="tr">
                <h3>Trabalhos Realizados</h3>
                <p>
                <strong>DESFILES</strong>: Feira Opera 2020/21, Catwalk internacional,
                Aquarela Nacional, Passarela produção Brasil como
                Mister São Paulo.
                </p>
                <p>
                <strong>CATÁLOGOS E CAMPANHAS</strong>: Malwee, Hering, Ellus, Demanos, Puket, Pistol Star e Hershey&apos;s.
                </p>
                <p>
                <strong>TV</strong>: Novela: As aventuras de Poliana SBT, Série: Bugados Globo play e Série: Escolinha Ecológica NGT TV.
                </p>
                <p>
                <strong>COMERCIAIS</strong>: Prefeitura de Sorocaba, Itau, Bradesco.
                </p>
                <p>
                <strong>EDITORIAIS</strong>: Villy Ribeiro, Luciana Kajaer, Márcio Falcão.
                </p>
            </div>
            </section>
        </>
    )
}