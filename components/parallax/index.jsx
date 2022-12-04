import Link from "next/link"

import { DivParallax, Details, Menu, Summary } from "./style.module.scss"

export default function Parallax() {
    return (
        <div className={DivParallax}>       
            <div>
                <details className={Details} id="unique">
                    <summary className={Summary}/>
                    <nav className={Menu} onClick={({ target }) => target.parentElement.parentElement.open = false}>
                        <Link href="#sobre">Sobre</Link>
                        <Link href="#artista">Artista</Link>
                        <Link href="#galeria">Galeria</Link>
                        <Link href="#aparicoes">Na mídia</Link>
                        <Link href="#contatos">Contatos</Link>
                    </nav>
                </details>  
            </div>
            <h1>Biel Marconato</h1>
            <p>ator - modelo - influencer</p>
        </div>
    )
}