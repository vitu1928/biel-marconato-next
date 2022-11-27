import Image from 'next/image'

// Trabalhos Recentes
import BielRiste from "../../public/Imagens/Biels/BielRiste.jpg"; // Guerra civil
import NovelaReis from "../../public/Imagens/NovelaReis.jpg"
import Vicente from "../../public/Imagens/Vicente.jpg"

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
<<<<<<< Updated upstream
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
=======

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
>>>>>>> Stashed changes
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
                    <strong>Desfiles</strong>: Feira Opera 2020/21, Catwalk internacional,
                    Aquarela Nacional, Passarela produção Brasil como
                    Mister São Paulo.
                </p>
                <p>
                    <strong>Catálogos e campanhas</strong>: Malwee, Hering, Ellus, Demanos, Puket, Pistol Star e Hershey&apos;s.
                </p>
                <p>
                    <strong>Novela</strong>: As aventuras de Poliana SBT.<br />
                    <strong>Séries</strong>: Escolinha Ecológica NGT TV e Bugados Globo play.<br />
                    <strong>Comerciais</strong>: Prefeitura de Sorocaba, Itau, Bradesco.
                </p>
                <p>
                    <strong>Editoriais</strong>: Villy Ribeiro, Luciana Kajaer, Márcio Falcão.
                </p>
            </div>
            </section>
        </>
    )
}