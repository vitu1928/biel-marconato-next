import Head from 'next/head'
import Image from 'next/image'

// Biels
import BielOlhar from "../public/Biels/Bielolhar.jpg"
import BielaA1 from "../public/Biels/BielaA1.jpg"
import Bielcruzado from "../public/Biels/Bielcruzado.jpg"
import BielCulos from "../public/Biels/BielCulos.jpg"
import BielNé from "../public/Biels/BielNé.jpeg"
import Bielolhar from "../public/Biels/Bielolhar.jpg"
import BielRio from "../public/Biels/BielRio.jpg"
import BielS2 from "../public/Biels/BielS2.jpg"
import BielSentado from "../public/Biels/BielSentado.jpeg"
import BielLiz from "../public/Biels/BielLiz.jpeg"
import BielRiste from "../public/Biels/BielRiste.jpg" // Guerra civil


// Estudos
import Teatro from "../public/Imagens/teatro.jpg"
// import Cinema from "../public/Imagens/cinema.jpg"
import Piano from "../public/Imagens/piano.jpg"
import Sapateado from "../public/Imagens/sapateado.jpg"

// Trabalhos Recentes
import NovelaReis from "../public/Imagens/NovelaReis.jpg"
import Vicente from "../public/Imagens/Vicente.jpg"

// Contatos
import Whatsapp from "../public/Imagens/whatsapp.png"
import Instagram from "../public/Imagens/instagram.png"
import Gmail from "../public/Imagens/gmail.png"
import Youtube from "../public/Imagens/youtube.png"

import ImageGallery from 'react-image-gallery';

export default function Home() {
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

  return (
    <div>
      <Head>
        <title>Biel Marconato</title>
        <meta name="description" content="Biel Marconato Web site" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div id="parallax">
        <h1>Biel Marconato</h1>
        <p>ator - modelo - influencer</p>
      </div>

      <main>
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

        <hr />

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
                objectFit="contain"
                objectPosition={"center center"}
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
                width={400}
                height={400}
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
              <strong>CATÁLOGOS E CAMPANHAS</strong>: Malwee, Hering, Ellus, Demanos, Puket, Pistol Star e Hershey's.
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

        <hr />
        
        <h2>Galeria</h2>
        <section id="galeria">
          <ImageGallery 
            items={
                [
                  BielOlhar,
                  BielaA1,
                  Bielcruzado,
                  BielCulos,
                  BielNé,
                  Bielolhar,
                  BielRio,
                  BielS2,
                  BielSentado,
                  BielLiz,
                  BielRiste
                ].map((a) => {
                  return {
                    original: a.src,
                    thumbnail: a.src,
                    sizes: 500,
                    originalHeight: 500,
                    originalWidth: 600
                  }
                })
            }
            showPlayButton={false}
            thumbnailPosition="right"
            infinite={false}
            showBullets={true}
          />
        </section>
        <section id="aparicoes">
          <h2>
            Aparições
          </h2>
        </section>
      </main>
      <footer>
        <h2>Contatos</h2>
        <div id="contatos">
          <div>
            <a 
              href="https://api.whatsapp.com/qr/YUBIYO3LC6XQL1?autoload=1&app_absent=0"
              rel="external"
              target="_blank"
            >
              <Image 
                layout='intrinsic'
                objectFit='contain'
                objectPosition={"center center"}
                src={Whatsapp}
                width={100}
                height={50}
              />
              Gislaine
            </a>
          </div>
          <div>
            <a href="mailto:assessoriabielmarconato@gmail.com">
              <Image 
                layout='intrinsic'
                objectFit='contain'
                objectPosition={"center center"}
                src={Gmail}
                width={50}
                height={50}
              />
              assessoriabielmarconato@gmail.com
            </a>
          </div>
          <div>
            <a 
              href="https://www.instagram.com/bielmarconato/"
              rel="external"
              target="_blank"
            >
              <Image 
                layout='intrinsic'
                objectFit='contain'
                objectPosition={"center center"}
                src={Instagram}
                width={100}
                height={50}
              />
              @bielmarconato
            </a>
          </div>
          <div>
            <a 
              href="https://www.youtube.com/channel/UCEcyv8yzT6j_6kmavNOMQjA"
              rel="external"
              target="_blank"
            >
              <Image 
                layout='intrinsic'
                objectFit='contain'
                objectPosition={"center center"}
                src={Youtube}
                width={100}
                height={50}
              />
              BIEL MARCONATO OFICIAL
            </a>
          </div>
        </div>
        <div>
          <p>
            <address>© 2022 feito por mim (Victor)</address>
          </p>
        </div>
      </footer>
    </div>
  )
}
