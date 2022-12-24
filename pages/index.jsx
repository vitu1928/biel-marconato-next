import Image from 'next/image';
import { useEffect } from 'react'
import { Carousel } from 'primereact/carousel';
import { Tooltip } from 'primereact/tooltip';

import EscolaOficina from "../public/images/EscolaOficina.jpeg"

import BielRiste from "../public/images/Biels/BielRiste.jpg"; // Guerra civil
import BielA1 from "../public/images/Biels/BielaA1.jpg"
import BielOlhar from "../public/images/Biels/Bielolhar.jpg"

//Novela Reis
import NovelaReis from "../public/images/NovelaReis/NovelaReis.jpg";
import VigiaDeCana from "../public/images/NovelaReis/VigiaDeCana.jpg";
import CapaNovela from "../public/images/NovelaReis/CapaNovela.jpg";
import Novel from "../public/images/NovelaReis/Novel.jpg";
import RecordTV from "../public/images/NovelaReis/RecordTV.jpg";

//Sky
import Leleko from "../public/images/Sky/leleko.jpg";
import Lipi from "../public/images/Sky/lipi.jpg";
import Palhaco from "../public/images/Sky/paiaço.jpg";
import Sky from "../public/images/Sky/sky.jpg";
import SkyGirl from "../public/images/Sky/SkyGirl.jpg";

//Vicente na Cidade Fantasma
import Susto from "../public/images/CidadeFantasma/susto.jpg"
import Arrepiado from "../public/images/CidadeFantasma/arrepiado.jpg"
import Aspirando from "../public/images/CidadeFantasma/aspirando.jpg"
import Cena from "../public/images/CidadeFantasma/cena.jpg"
import Correndo from "../public/images/CidadeFantasma/correndo.jpg"
import Mirando from "../public/images/CidadeFantasma/mirando.jpg"
// import PianoTerror from "../public/images/CidadeFantasma/pianoterror.jpg"
import Susto2 from "../public/images/CidadeFantasma/susto2.jpg"

import Transitions from '../components/transicao';
import Parallax from '../components/parallax'

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

export default function Home() {
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

  function workImages(Img) {
    return <Image
        layout='intrinsic'
        objectFit='contain'
        src={Img}
        width={500}
        height={500}
      />
  }

  return (
    <Transitions>
      <article>
        <Parallax
          img={BielA1}
        />
        <h2>ator - modelo - influencer</h2>
        <section id="sobre" data-inviewport="slide-in">
          <div>
            <p>
              Biel Marconato, 12 anos, atua no meio audiovisual como
              ator, modelo e influencer. É um menino que está sempre
              buscando se aprimorar e se atualizar.
            </p>
            <p>
              <Tooltip target=".escola-oficina">
                <Image
                 src={EscolaOficina}
                 width={200}
                 height={200}
                 />
              </Tooltip>
              Como parte da sua formação de ator, estuda há 1 ano na <span className="escola-oficina">Escola Oficina</span> e faz vários cursos e workshops através da agência Cintra com os melhores profissionais do mercado tais como
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

        <h2>Artista</h2>
        <section id="artista">
          {/* Imagens ? */}
          <div>
            <h3>Trabalhos Realizados</h3>
            <div data-inviewport="slide-p-in" id="tr">
              <p>
                <strong>Desfiles</strong>: Feira Opera 2020/21, Catwalk internacional,
                Aquarela Nacional, Passarela produção Brasil como
                Mister São Paulo.
              </p>
              <p>
                <strong>Catálogos e campanhas</strong>: Oliver Kids, Malwee, Hering, Ellus, Demanos, Puket, Pistol Star e Hershey&apos;s.
              </p>
              <p>
                <strong>Novelas</strong>: As aventuras de Poliana SBT e Novela Reis da Record tv através da agência Cintra.<br />
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
              <Carousel
                data-inviewport="scale-in"
                value={[Susto, Arrepiado, Aspirando, Cena, Correndo, Mirando, Susto2]}
                numVisible={1}
                numScroll={1}
                className="custom-carousel"
                autoplayInterval={2000}
                itemTemplate={workImages}
                footer={<p><strong>Filme</strong>: Vicente na cidade Fantasma
                  Personagem: Vicente (protagonista)</p>}
              />
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
              <Carousel
                data-inviewport="scale-in"
                value={[CapaNovela, NovelaReis, VigiaDeCana]}
                numVisible={1}
                numScroll={1}
                className="custom-carousel"
                autoplayInterval={3000}
                itemTemplate={workImages}
                footer={<p><strong>Novela:</strong> Reis</p>}
              />
            </div>
            <div>
            <Carousel
                data-inviewport="scale-in"
                value={[Leleko, Palhaco, Lipi, SkyGirl, Sky]}
                numVisible={1}
                numScroll={1}
                className="custom-carousel"
                autoplayInterval={3000}
                itemTemplate={workImages}
                footer={<p><strong>Programa de comédia:</strong> SKY TV como Lipi</p>}
              />
            </div>
          </div>
        </section>
      </article>
    </Transitions>
  )
}
