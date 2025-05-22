import Image from 'next/image';
import { Carousel } from 'primereact/carousel';
import { Tooltip } from 'primereact/tooltip';
import { useEffect } from 'react';

import EscolaOficina from "../public/images/EscolaOficina.jpeg";

import BielA1 from "../public/images/Biels/BielaA1.jpg";
import BielOlhar from "../public/images/Biels/Bielolhar.jpg";
import BielRiste from "../public/images/Biels/BielRiste.jpg"; // Guerra civil

//Novela Reis
import CapaNovela from "../public/images/NovelaReis/CapaNovela.jpg";
import Novel from "../public/images/NovelaReis/Novel.jpg";
import NovelaReis from "../public/images/NovelaReis/NovelaReis.jpg";
import RecordTV from "../public/images/NovelaReis/RecordTV.jpg";
import VigiaDeCana from "../public/images/NovelaReis/VigiaDeCana.jpg";

//Sky
import Leleko from "../public/images/Sky/leleko.jpg";
import Lipi from "../public/images/Sky/lipi.jpg";
import Palhaco from "../public/images/Sky/paiaço.jpg";
import Sky from "../public/images/Sky/sky.jpg";
import SkyGirl from "../public/images/Sky/SkyGirl.jpg";

//Vicente na Cidade Fantasma
import Arrepiado from "../public/images/CidadeFantasma/arrepiado.jpg";
import Aspirando from "../public/images/CidadeFantasma/aspirando.jpg";
import Cena from "../public/images/CidadeFantasma/cena.jpg";
import Correndo from "../public/images/CidadeFantasma/correndo.jpg";
import Mirando from "../public/images/CidadeFantasma/mirando.jpg";
import Susto from "../public/images/CidadeFantasma/susto.jpg";
import Susto2 from "../public/images/CidadeFantasma/susto2.jpg";

//Icones
import Campanha from "../public/images/Icones/campanha.png";
import Comercial from "../public/images/Icones/comercial.png";
import Desfile from "../public/images/Icones/desfile.png";
import Editorial from "../public/images/Icones/editorial.png";
import Novela from "../public/images/Icones/novela.png";
import Serie from "../public/images/Icones/serie.png";
import TV from "../public/images/Icones/tv.png";

import Parallax from '../components/parallax';
import Transitions from '../components/transicao';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import { BreadcrumbJsonLd, CarouselJsonLd, NextSeo  } from 'next-seo';
import Head from 'next/head';

const allImages = [
  // Imagens de "Guerra Civil"
  { url: BielRiste, name: "Guerra Civil - Imagem 1", description: "Filme Guerra Civil com Biel Marconato interpretando o protagonista Michelângelo." },
  
  // Imagens de "Vicente na Cidade Fantasma"
  { url: Susto, name: "Vicente na Cidade Fantasma - Imagem 1", description: "Filme Vicente na Cidade Fantasma, protagonizado por Biel Marconato como Vicente." },
  { url: Arrepiado, name: "Vicente na Cidade Fantasma - Imagem 2", description: "Filme Vicente na Cidade Fantasma, protagonizado por Biel Marconato como Vicente." },
  { url: Aspirando, name: "Vicente na Cidade Fantasma - Imagem 3", description: "Filme Vicente na Cidade Fantasma, protagonizado por Biel Marconato como Vicente." },
  { url: Cena, name: "Vicente na Cidade Fantasma - Imagem 4", description: "Filme Vicente na Cidade Fantasma, protagonizado por Biel Marconato como Vicente." },
  { url: Correndo, name: "Vicente na Cidade Fantasma - Imagem 5", description: "Filme Vicente na Cidade Fantasma, protagonizado por Biel Marconato como Vicente." },
  { url: Mirando, name: "Vicente na Cidade Fantasma - Imagem 6", description: "Filme Vicente na Cidade Fantasma, protagonizado por Biel Marconato como Vicente." },
  { url: Susto2, name: "Vicente na Cidade Fantasma - Imagem 7", description: "Filme Vicente na Cidade Fantasma, protagonizado por Biel Marconato como Vicente." },
  
  // Imagens de "Novela Reis"
  { url: CapaNovela, name: "Novela Reis - Imagem 1", description: "Novela Reis com a participação de Biel Marconato." },
  { url: NovelaReis, name: "Novela Reis - Imagem 2", description: "Novela Reis com a participação de Biel Marconato." },
  { url: VigiaDeCana, name: "Novela Reis - Imagem 3", description: "Novela Reis com a participação de Biel Marconato." },
  { url: Novel, name: "Novela Reis - Imagem 4", description: "Novela Reis com a participação de Biel Marconato." },
  { url: RecordTV, name: "Novela Reis - Imagem 5", description: "Novela Reis com a participação de Biel Marconato." },

  // Imagens de "Comédia SKY TV"
  { url: Leleko, name: "SKY TV - Imagem 1", description: "Comédia SKY TV com Biel Marconato como o personagem Leleko." },
  { url: Palhaco, name: "SKY TV - Imagem 2", description: "Comédia SKY TV com Biel Marconato como o personagem Palhaço." },
  { url: Lipi, name: "SKY TV - Imagem 3", description: "Comédia SKY TV com Biel Marconato como o personagem Lipi." },
  { url: SkyGirl, name: "SKY TV - Imagem 4", description: "Comédia SKY TV com Biel Marconato como o personagem SkyGirl." },
  { url: Sky, name: "SKY TV - Imagem 5", description: "Comédia SKY TV com Biel Marconato como o personagem Sky." }
];

const jsonLd = require('./jsonLd.json')

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
      layout='responsive'
      objectFit='contain'
      src={Img}
      width={500}
      height={500}
    />
  }

  return (
    <>
      
     <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        
      </Head>
  <NextSeo
      title="Biel Marconato"
      description="Biel Marconato Ator e modelo"
      canonical="https://www.bielmarconato.com.br/"
      openGraph={{
        url: 'https://bielmarconato.com.br/',
        type: 'website',
        title: 'Biel Marconato WebSite',
        description: 'Site de Biel Marconato ',
        images: [
          {
            url: "images/Biels/Biel90.jpg",
            width: 90,
            height: 90,
            alt: 'Biel Marconato',
            type: 'image/jpeg',
          },
          {
            url: "images/Biels/Bielcruzado.jpg",
            width: 640,
            height: 640 ,
            alt: 'Biel Marconato',
            type: 'image/jpeg',
          },
          {
            url: "images/Biels/Bielellus.jpeg",
            width: 1080,
            height: 1080 ,
            alt: 'Biel Marconato',
            type: 'image/jpeg',
          }
        ],
        siteName: 'Biel Marconato',
        
      }}
    /> 
     <CarouselJsonLd
        ofType="default"
        data={allImages.map((image, index) => ({
          url: image.url.src,  // URL da imagem
          name: image.name,    // Nome da imagem
          description: image.description,  // Descrição
          thumbnailUrl: image.url.src,  // Usando a URL da imagem como thumbnail
          contentUrl: image.url.src,    // Usando a URL da imagem como conteúdo
          position: index + 1,  // A posição é numerada
        }))}
      />

      <BreadcrumbJsonLd
          itemListElements={[
            {
              position: 1,
              name: 'Início',
              item: 'https://www.bielmarconato.com.br',
            },
          ]}
        />
        
      <Transitions>
        <Parallax img={BielA1}/>
        <section id="sobre" data-inviewport="slide-in">
          <article>
            <h2>ator - modelo - influencer</h2>
            <p>
              Biel Marconato, 14 anos, atua no meio audiovisual como
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
          </article>
          <aside>
            <Image
              layout='responsive'
              objectPosition={"center center"}
              src={BielOlhar}
            />
          </aside>
        </section>

        <section id="artista">
          <h2>Artista</h2>
          <article>
            <h3>Trabalhos Realizados</h3>
            <div id="TrabalhosRealizados">
              <ul id="TransparentBlack">
                {
                  [
                    {
                      h4: "Desfiles",
                      "p": "Feira Opera 2020/21, Catwalk internacional, Aquarela Nacional, Passarela produção Brasil como Mister São Paulo.",
                      "img": Desfile
                    },
                    {
                      h4: "Catálogos e campanhas",
                      "p": "Oliver Kids, Malwee, Hering, Ellus, Demanos, Puket, Pistol Star e Hershey&apos;s.",
                      "img": Campanha
                    },
                    {
                      h4: "Novelas",
                      "p": "As aventuras de Poliana SBT e Novela Reis da Record tv através da agência Cintra",
                      "img": Novela
                    },
                    {
                      h4: "Séries",
                      "p": "Escolinha Ecológica NGT TV e Bugados Globo play",
                      "img": Serie
                    },
                    {
                      h4: "TV",
                      "p": "personagem LIPI na tv SKY, programa de humor infantil exibido todos os sábados",
                      "img": TV
                    },
                    {
                      h4: "Comerciais",
                      "p": "Prefeitura de Sorocaba, Itau, Bradesco",
                      "img": Comercial
                    },
                    {
                      h4: "Editoriais",
                      "p": "Villy Ribeiro, Luciana Kajaer, Márcio Falcão",
                      "img": Editorial
                    },
                  ].map(({ h4, p, img }, key) => <li data-inviewport="slide-p-in" key={key}>
                    <div className="ImageContainer">
                      <img
                        src={img.src}
                        className="IconImage"
                      />
                    </div>
                    <h4>{h4}</h4>
                    <p>{p}</p>
                  </li>)
                }
              </ul>
            </div>
          </article>

          <article>
            <h3>Trabalhos Recentes</h3>
            <ul id="TrabalhosRecentes"> 
              <li className="TrabRecentItem">
                <Image
                  layout='responsive'
                  objectFit='contain'
                  objectPosition={"top center"}
                  src={BielRiste}
                  height={500}
                  
                  data-inviewport="scale-in"
                />
                <p className="Description"><strong>Filme</strong>: Guerra Cívil
                  Personagem: Michelângelo (protagonista)
                  Direção Flavio Carnielli</p>
              </li>
              <li>
                <Carousel
                  data-inviewport="scale-in"
                  value={[Susto, Arrepiado, Aspirando, Cena, Correndo, Mirando, Susto2]}
                  numVisible={1}
                  numScroll={1}
                  className="TrabRecentItem"
                  autoplayInterval={2000}
                  itemTemplate={workImages}
                  footer={<p className="Description"><strong>Filme</strong>: Vicente na cidade Fantasma
                    Personagem: Vicente (protagonista)</p>}
                />
              </li>
              <li>
                <Carousel
                  data-inviewport="scale-in"
                  value={[CapaNovela, NovelaReis, VigiaDeCana, Novel, RecordTV]}
                  numVisible={1}
                  numScroll={1}
                  className="TrabRecentItem"
                  autoplayInterval={3000}
                  itemTemplate={workImages}
                  footer={<p className="Description"><strong>Novela:</strong> Reis</p>}
                />
              </li>
              <li>
                <Carousel
                  data-inviewport="scale-in"
                  value={[Leleko, Palhaco, Lipi, SkyGirl, Sky]}
                  numVisible={1}
                  numScroll={1}
                  className="TrabRecentItem"
                  autoplayInterval={3000}
                  itemTemplate={workImages}
                  footer={<p className="Description"><strong>Programa de comédia:</strong> SKY TV como Lipi</p>}
                />
              </li>
            </ul>
          </article>
        </section>
      </Transitions>
    </>
  )
}
