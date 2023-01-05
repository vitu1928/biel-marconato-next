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

export default function Galeria() {
    return (
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
    )
}