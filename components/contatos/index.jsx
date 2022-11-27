import Image from 'next/image'

// Contatos
import Whatsapp from "../../public/Imagens/whatsapp.png"
import Instagram from "../../public/Imagens/instagram.png"
import Gmail from "../../public/Imagens/gmail.png"
import Youtube from "../../public/Imagens/youtube.png"

export default function Contatos() {
    return (
        <>
            <h2>Contatos</h2>
            <div id="contatos">
                <div>
                    <a
                        href="https://api.whatsapp.com/send?phone=555521981329073"
                        rel="external"
                    >
                        <Image
                            layout='intrinsic'
                            objectFit='contain'
                            objectPosition={"center center"}
                            src={Whatsapp}
                            width={100}
                            height={50}
                        />
                        Gislaine
                    </a>
                </div>
                <div>
                    <a href="mailto:assessoriabielmarconato@gmail.com">
                        <Image
                            layout='intrinsic'
                            objectFit='contain'
                            objectPosition={"center center"}
                            src={Gmail}
                            width={50}
                            height={50}
                        />
                        assessoriabielmarconato@gmail.com
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.instagram.com/bielmarconato/"
                        rel="external"
                    >
                        <Image
                            layout='intrinsic'
                            objectFit='contain'
                            objectPosition={"center center"}
                            src={Instagram}
                            width={100}
                            height={50}
                        />
                        @bielmarconato
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.youtube.com/channel/UCEcyv8yzT6j_6kmavNOMQjA"
                        rel="external"

                    >
                        <Image
                            layout='intrinsic'
                            objectFit='contain'
                            objectPosition={"center center"}
                            src={Youtube}
                            width={100}
                            height={50}
                        />
                        BIEL MARCONATO OFICIAL
                    </a>
                </div>
            </div>
        </>
    )
}