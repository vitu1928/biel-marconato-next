// Biels
import Bielcruzado from "../../public/Imagens/Biels/Bielcruzado.jpg"
import BielLiz from "../../public/Imagens/Biels/BielLiz.jpeg"
import Bielolhar from "../../public/Imagens/Biels/Bielolhar.jpg"
import BielRio from "../../public/Imagens/Biels/BielRio.jpg"
import BielRiste from "../../public/Imagens/Biels/BielRiste.jpg"; // Guerra civil
import BielS2 from "../../public/Imagens/Biels/BielS2.jpg"
import BielSentado from "../../public/Imagens/Biels/BielSentado.jpeg"
import BielSentadoParque from "../../public/Imagens/Biels/BielParqueSentado.jpg"
import BielAzulSentado from "../../public/Imagens/Biels/BielAzulSentado.jpg"
import BielPoste from "../../public/Imagens/Biels/BielPoste.jpg"

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
                
                BielSentadoParque,
                BielPoste,
                BielAzulSentado,

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