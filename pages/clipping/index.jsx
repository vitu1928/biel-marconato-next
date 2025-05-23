import Imgbox from "../../components/imgbox";
import Parallax from "../../components/parallax";
import Transitions from "../../components/transicao";

import { SectionClipping } from "./style.module.scss";

import BielRio from "../../public/images/Biels/BielRio.jpg";
import { BreadcrumbJsonLd, WebPageJsonLd, NextSeo } from 'next-seo';

export default function Clipping() {
    const lugares = require("./lugares.json")

    return (
        <>
            <WebPageJsonLd
                url="https://www.bielmarconato.com.br/galeria"
                title="Clipping - Biel Marconato"
                description="Confira a galeria de fotos e vídeos de Biel Marconato, com imagens dos seus projetos e eventos."
                images={
                    [   'https://release.celebs.com.br/medias/posts/big/23952/1-38.jpg',
                        'https://tonafama.ig.com.br/wp-content/uploads/2023/04/Biel-Marconato-780x437.jpeg',
                        'https://culturaenegocios.com.br/wp-content/uploads/2022/02/Captura-de-tela-2022-02-09-151243-1200x600.png',
                        'https://vimagazine.com.br/wp-content/uploads/2022/02/festa-Biel-4-1024x683.jpg'                    ]
                }
            />
            <NextSeo
                title="Clipping Biel"
                description="Clipping das menções de Biel Marconato nas redes"
                canonical="https://www.bielmarconato.com.br/clipping"
                openGraph={{
                    url: 'https://www.bielmarconato.com.br/clipping',
                    type: 'website',
                    title: 'Clipping de Biel Marconato',
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
                    siteName: 'Clipping Biel',
                }}
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
                    name: 'Clipping',
                    item: 'https://www.bielmarconato.com.br/clipping',
                },
                ]}
            />
            <Transitions>
                <Parallax img={BielRio} />
                <section className={SectionClipping}>
                    <h2>Na mídia</h2>
                    <article>
                        <ul type="none">
                            {
                                lugares.map((data, k) => <li key={k}>
                                    <Imgbox
                                        {...data}
                                    />
                                </li>)
                            }
                        </ul>
                    </article>
                </section>
            </Transitions>
        </>
    )
}
