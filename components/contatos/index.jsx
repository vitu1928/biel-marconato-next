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
            <address>
                <ul className={ContatosS} id="contatos">
                    <li>

                        <a
                            href="https://api.whatsapp.com/send?phone=555521981329073"
                            rel="noreferrer"
                            target="_blank"
                            className={WhatsappS}
                        >
                            <div>
                                <Image
                                    layout='responsive'
                                    objectPosition={"center center"}
                                    src={Whatsapp}
                                />
                            </div>
                            <p>Agência Cintra</p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:assessoriabielmarconato@gmail.com"
                            className={EmailS}
                        >
                            <div>
                                <Image
                                    layout='responsive'
                                    objectPosition={"center center"}
                                    src={Gmail}
                                />
                            </div>
                            <p>assessoriabielmarconato@gmail.com</p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/bielmarconato/"
                            rel="noreferrer"
                            target="_blank"
                            className={InstagramS}
                        >
                            <div>
                                <Image
                                    layout='responsive'
                                    objectPosition={"center center"}
                                    src={Instagram}
                                />
                            </div>
                            <p>@bielmarconato</p>
                        </a>
                    </li>
                    <li>

                        <a
                            href="https://www.youtube.com/channel/UCEcyv8yzT6j_6kmavNOMQjA?sub_confirmation=1"
                            rel="noreferrer"
                            target="_blank"
                            className={YoutubeS}
                        >
                            <div>
                                <Image
                                    layout='responsive'
                                    objectPosition={"center center"}
                                    src={Youtube}
                                />
                            </div>
                            <p>BIEL MARCONATO OFICIAL</p>

                        </a>
                    </li>
                </ul>
            </address>
        </>
    )
}