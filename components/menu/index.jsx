import Link from "next/link"

import { Details, NavMenu, Summary } from "./style.module.scss"

export default function Menu() {
    return <div>
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
}