import Image from 'next/image'
// Biels
import Bielcruzado from "../../public/images/Biels/Bielcruzado.jpg"
import Bielolhar from "../../public/images/Biels/Bielolhar.jpg"
import BielRio from "../../public/images/Biels/BielRio.jpg"
import BielRiste from "../../public/images/Biels/BielRiste.jpg"; // Guerra civil
import BielS2 from "../../public/images/Biels/BielS2.jpg"
import BielSentado from "../../public/images/Biels/BielSentado.jpeg"

import FernandoFerraz from "../../public/images/Diretores/FernandoFerraz.jpg"
import FoguinhoDaRecordTV from "../../public/images/Diretores/FoguinhodaRecordTV.jpg"
import GabrielaRosales from "../../public/images/Diretores/GabrielaRosales.jpg"
import MonicaTeixeira from "../../public/images/Diretores/MônicaTeixeira.jpg"

import Parallax from '../../components/parallax'
import Transitions from '../../components/transicao'

import { GaleriaModelo, GaleriaDiretores, GaleriaImg } from "./style.module.scss"

import { BreadcrumbJsonLd, WebPageJsonLd, CarouselJsonLd } from 'next-seo';
const directors = [
  {
    name: "Mônica Teixeira",
    images: [
      'https://www.bielmarconato.com.br/images/Diretores/MônicaTeixeira.jpg',
    ]
  },
  {
    name: "Fernando Ferraz",
    images: [
      'https://www.bielmarconato.com.br/images/Diretores/FernandoFerraz.jpg'
    ]
  },
  {
    name: "Foguinho da Record TV",
    images: [
      'https://www.bielmarconato.com.br/images/Diretores/FoguinhoDaRecordTV.jpg'
    ]
  },
  {
    name: "Gabriela Rosales",
    images: [
      'https://www.bielmarconato.com.br/images/Diretores/GabrielaRosales.jpg'
    ]
  }
];

export default function Galeria() {
    return (
        <>
            <WebPageJsonLd
                url="https://www.bielmarconato.com.br/galeria"
                title="Galeria - Biel Marconato"
                description="Confira a galeria de fotos e vídeos de Biel Marconato, com imagens dos seus projetos e eventos."
                images={
                    [   'https://www.bielmarconato.com.br/images/Biels/BielS2.jpg',
                        'https://www.bielmarconato.com.br/images/Biels/BielRio.jpg',
                        'https://www.bielmarconato.com.br/images/Biels/BielRiste.jpg',
                        'https://www.bielmarconato.com.br/images/Biels/Bielolhar.jpg',
                        'https://www.bielmarconato.com.br/images/Biels/BielSentado.jpeg',
                    ]
                }
            />

            <CarouselJsonLd
                ofType="default"
                data={directors.flatMap((director, index) => 
                director.images.map((imageUrl, imageIndex) => ({
                    url: imageUrl,
                    name: `${director.name} - Imagem ${imageIndex + 1}`,
                    description: `${director.name} - Imagem ${imageIndex + 1} com Biel Marconato`,
                    thumbnailUrl: imageUrl,  // URL da miniatura (usando a mesma imagem aqui)
                    contentUrl: imageUrl,    // URL do conteúdo original
                    position: index * 3 + imageIndex + 1,  // Calcula a posição dentro do carrossel
                }))
                )}
            />
            
            <BreadcrumbJsonLd
                itemListElements={[
                    {
                        position: 1,
                        name: 'Início',
                        item: 'https://www.bielmarconato.com.br',
                    },
                    {
                        position: 2,
                        name: 'Galeria',
                        item: 'https://www.bielmarconato.com.br/galeria',
                    },
                ]}
            />

            <Transitions>
                <Parallax img={Bielcruzado} title="Galeria" />
                <section className="modelo">
                    <article className={GaleriaModelo}>
                        <ul id="galeria">
                            {[
                                BielS2,
                                BielRiste,
                                BielSentado,
                                Bielcruzado,
                                Bielolhar,
                                BielRio,
                            ].map((v, index) => {
                                return <li
                                    style={{ gridArea: v.src.split("/").pop().split(".").shift() }}
                                    key={index}
                                >
                                    <Image
                                        layout='responsive'
                                        objectPosition={"center center"}
                                        src={v}
                                    />
                                </li>
                            })}
                        </ul>
                        <h2>Modelo</h2>
                    </article>
                </section>
                <section id="diretores">
                    <article className={GaleriaDiretores}>
                        <h2>Diretores</h2>
                        <ul>
                            {
                                [
                                    {
                                        img: MonicaTeixeira,
                                        name: "Mônica Teixeira"
                                    },
                                    {
                                        img: FernandoFerraz,
                                        name: "Fernando Ferraz"
                                    },
                                    {
                                        img: FoguinhoDaRecordTV,
                                        name: "Foguinho da Record TV"
                                    },
                                    {
                                        img: GabrielaRosales,
                                        name: "Gabriela Rosales"
                                    }
                                ].map(({ img, name }, k) => {
                                    return <li
                                        key={k}
                                        className={GaleriaImg}
                                    >
                                        <div>
                                            <Image
                                                // objectFit="cover"
                                                layout='responsive'
                                                objectPosition={"center center"}
                                                src={img}
                                            />
                                        </div>
                                        <h3>{name}</h3>
                                    </li>
                                })
                            }
                        </ul>
                    </article>
                </section>
            </Transitions>
        </>
    )
}