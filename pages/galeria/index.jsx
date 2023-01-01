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
    function mapGridArea(v, index) {
        return <div
            style={{ gridArea: v.src.split("/").pop().split(".").shift() }}
            key={index}
        >
            <Image
                objectFit="cover"
                layout='intrinsic'
                objectPosition={"center center"}
                src={v}
            />
        </div>
    }
    return (
        <Transitions>
            <Parallax img={Bielcruzado} title="Galeria" />
            <section>
                <article className={GaleriaModelo}>
                    <div id="galeria">
                        {[
                            BielS2,
                            BielRiste,
                            BielSentado,
                            Bielcruzado,
                            Bielolhar,
                            BielRio,
                        ].map(mapGridArea)}
                    </div>
                    <h2 >Modelo</h2>
                </article>
            </section>
            <section id="diretores">
                <article className={GaleriaDiretores}>
                    <h2>Diretores</h2>
                    <div id="diretores">
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
                                return <div
                                    key={k}
                                    className={GaleriaImg}
                                >
                                    <div>
                                        <Image
                                            objectFit="cover"
                                            layout='intrinsic'
                                            objectPosition={"center center"}
                                            src={img}
                                        />
                                    </div>
                                    <h3>{name}</h3>
                                </div>
                            })
                        }
                    </div>
                </article>
            </section>
        </Transitions>
    )
}