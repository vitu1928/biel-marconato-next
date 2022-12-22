import Image from 'next/image'
// Biels
import Bielcruzado from "../../public/images/Biels/Bielcruzado.jpg"
import BielCulos from "../../public/images/Biels/BielCulos.jpg"
import BielLiz from "../../public/images/Biels/BielLiz.jpeg"
import Bielolhar from "../../public/images/Biels/Bielolhar.jpg"
import BielRio from "../../public/images/Biels/BielRio.jpg"
import BielRiste from "../../public/images/Biels/BielRiste.jpg"; // Guerra civil
import BielS2 from "../../public/images/Biels/BielS2.jpg"
import BielSentado from "../../public/images/Biels/BielSentado.jpeg"

import Parallax from '../../components/parallax'
import Transitions from '../../components/transicao'

export default function Galeria() {
    return (
        <Transitions>
            <Parallax imgSrc={Bielcruzado.src} title="Galeria"/>
            {/* <h2>Galeria</h2> */}
            <section id="galeria">
            {[
                BielLiz,

                BielS2,
                BielRiste,
                BielSentado,
                
                // BielOlhar,

                // BielaA1,
                
                // BielNé,
                BielCulos,
                Bielcruzado,
                Bielolhar,
                BielRio,
            ].map((v, index) => 
                <div 
                    style={
                        {
                            gridArea: v.src.split("/").pop().split(".").shift()
                        }
                    }
                    key={index}
                >
                <Image 
                    objectFit="fill"
                    objectPosition={"center center"}
                    src={v}
                    // data-inviewport="scale-in"
                />
                </div>
            )}
            </section>
        </Transitions>
    )
}