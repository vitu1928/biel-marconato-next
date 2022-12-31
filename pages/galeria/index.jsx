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
import FoguinhoDaRecordTV from "../../public/images/Diretores/FoguinhoDaRecordTV.jpg"
import GabrielaRosales from "../../public/images/Diretores/GabrielaRosales.jpg"
import MonicaTeixeira from "../../public/images/Diretores/MônicaTeixeira.jpg"

import Parallax from '../../components/parallax'
import Transitions from '../../components/transicao'

import { Galleria } from "./style.module.scss"
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
                <div className={Galleria}>
                    <section id="galeria">
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
                    </section>
                    <h2
                        style={{ marginLeft: 0 }}
                    >Modelo</h2>
                </div>
                <div className={Galleria}>
                    <h2
                        style={{ marginRight: 0, transform: "rotate(180deg)" }}
                    >Diretores</h2>
                    <section id="diretores">
                        {
                            [
                                MonicaTeixeira,
                                FernandoFerraz,
                                FoguinhoDaRecordTV,
                                GabrielaRosales,
                                Diretor4
                            ].map(mapGridArea)
                        }
                    </section>
                </div>
        </Transitions>
    )
}