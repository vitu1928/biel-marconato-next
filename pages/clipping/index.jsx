import Imgbox from "../../components/imgbox";
import Parallax from "../../components/parallax";
import Transitions from "../../components/transicao";

import { SectionClipping } from "./style.module.scss";

import BielRio from "../../public/images/Biels/BielRio.jpg";
import { BreadcrumbJsonLd, WebPageJsonLd } from 'next-seo';

export default function Clipping() {
    const lugares = require("./lugares.json")

    return (
        <>
            <WebPageJsonLd
                url="https://www.bielmarconato.com.br/galeria"
                title="Galeria - Biel Marconato"
                description="Confira a galeria de fotos e vídeos de Biel Marconato, com imagens dos seus projetos e eventos."
                images={
                    [   'https://release.celebs.com.br/medias/posts/big/23952/1-38.jpg',
                        'https://tonafama.ig.com.br/wp-content/uploads/2023/04/Biel-Marconato-780x437.jpeg',
                        'https://culturaenegocios.com.br/wp-content/uploads/2022/02/Captura-de-tela-2022-02-09-151243-1200x600.png',
                        'https://vimagazine.com.br/wp-content/uploads/2022/02/festa-Biel-4-1024x683.jpg'                    ]
                }
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