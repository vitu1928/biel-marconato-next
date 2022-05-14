// Biels
import BielaA1 from "../../public/Biels/BielaA1.jpg"
import Bielcruzado from "../../public/Biels/Bielcruzado.jpg"
import BielCulos from "../../public/Biels/BielCulos.jpg"
import BielNé from "../../public/Biels/BielNé.jpeg"
import Bielolhar from "../../public/Biels/Bielolhar.jpg"
import BielRio from "../../public/Biels/BielRio.jpg"
import BielS2 from "../../public/Biels/BielS2.jpg"
import BielSentado from "../../public/Biels/BielSentado.jpeg"
import BielLiz from "../../public/Biels/BielLiz.jpeg"
import BielRiste from "../../public/Biels/BielRiste.jpg" // Guerra civil

import Image from 'next/image'

export default function Galeria() {
    return (
        <>
            <h2>Galeria</h2>
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
        </>
    )
}