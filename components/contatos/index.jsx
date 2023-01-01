import Image from 'next/image'

// Contatos
import Gmail from "../../public/images/Redes/gmail.png"
import Instagram from "../../public/images/Redes/instagram.png"
import Whatsapp from "../../public/images/Redes/whatsapp.png"
import Youtube from "../../public/images/Redes/youtube.png"

import { ContatosS, InstagramS, EmailS, WhatsappS, YoutubeS } from "./style.module.scss"

export default function Contatos() {
    return (
        <>
            <h2>Contatos</h2>
            <div className={ContatosS} id="contatos">
                    <a
                        href="https://api.whatsapp.com/send?phone=555521981329073"
                        rel="noreferrer"
                        target="_blank"
                        className={WhatsappS}
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
                    <a 
                        href="mailto:assessoriabielmarconato@gmail.com"
                        className={EmailS}
                    >
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
                    <a
                        href="https://www.instagram.com/bielmarconato/"
                        rel="noreferrer"
                        target="_blank"
                        className={InstagramS}
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
                    <a
                        href="https://www.youtube.com/channel/UCEcyv8yzT6j_6kmavNOMQjA?sub_confirmation=1"
                        rel="noreferrer"
                        target="_blank"
                        className={YoutubeS}
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
        </>
    )
}