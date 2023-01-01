import Image from 'next/image'
// Biels
import Bielcruzado from "../../public/images/Biels/Bielcruzado.jpg"
import Bielolhar from "../../public/images/Biels/Bielolhar.jpg"
import BielRio from "../../public/images/Biels/BielRio.jpg"
import BielRiste from "../../public/images/Biels/BielRiste.jpg"; // Guerra civil
import BielS2 from "../../public/images/Biels/BielS2.jpg"
import BielSentado from "../../public/images/Biels/BielSentado.jpeg"

import Diretor4 from "../../public/images/Diretores/Diretor4.jpg"
import FernandoFerraz from "../../public/images/Diretores/FernandoFerraz.jpg"
import FoguinhoDaRecordTV from "../../public/images/Diretores/FoguinhodaRecordTV.jpg"
import GabrielaRosales from "../../public/images/Diretores/GabrielaRosales.jpg"
import MonicaTeixeira from "../../public/images/Diretores/MônicaTeixeira.jpg"

import Parallax from '../../components/parallax'
import Transitions from '../../components/transicao'

import { GaleriaModelo, GaleriaDiretores } from "./style.module.scss"

export default function Galeria() {
    function mapGridArea(v, index) {
        return <div
            style={
                {
                    gridArea: v.src.split("/").pop().split(".").shift()
                }
            }
            key={index}
        >
            <Image
                objectFit="cover"
                layout='intrinsic'
                objectPosition={"center center"}
                src={v}
            // data-inviewport="scale-in"
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
                            // BielLiz,
                            BielS2,
                            BielRiste,
                            BielSentado,
                            // BielOlhar,
                            // BielaA1,
                            // BielNé,
                            // BielCulos,
                            Bielcruzado,
                            Bielolhar,
                            BielRio,
                        ].map(mapGridArea)}
                    </div>
                    <h2
                        style={{ marginLeft: 0 }}
                    >Modelo</h2>
                </article>
            </section>
            <section id="diretores">
                <article className={GaleriaDiretores}>
                    <h2>Diretores</h2>
                    <div id="diretores">
                        {
                            [
                                MonicaTeixeira,
                                FernandoFerraz,
                                FoguinhoDaRecordTV,
                                GabrielaRosales,
                                Diretor4
                            ].map(mapGridArea)
                        }
                    </div>
                </article>
            </section>
        </Transitions>
    )
}