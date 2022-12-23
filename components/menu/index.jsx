import Link from "next/link"
import { BrowserView, MobileView } from 'react-device-detect';

import { Details, NavMenu, Summary, Navigation } from "./style.module.scss"

export default function Menu() {
    return <>
        <BrowserView style={{width:"100%"}}>
            <nav className={Navigation}>
                <ul>
                    <li>
                        <Link href="/">Sobre</Link>
                    </li>
                    <li>
                        <Link href="/galeria">Galeria</Link>
                    </li>
                    <li>
                        <Link href="/aparicoes">Na mídia</Link>
                    </li>
                    <li>
                        <Link href="#contatos">Contatos</Link>
                    </li>
                </ul>
            </nav>
        </BrowserView>
        <MobileView>
            <div>
                <details className={Details} id="unique">
                    <summary className={Summary} />
                    <nav className={NavMenu} onClick={({ target }) => target.parentElement.parentElement.open = false}>
                        <Link href="/">Sobre</Link>
                        <Link href="/galeria">Galeria</Link>
                        <Link href="/aparicoes">Na mídia</Link>
                        <Link href="#contatos">Contatos</Link>
                    </nav>
                </details>
            </div>
        </MobileView>
    </>
}