import Link from "next/link"

export default function Parallax() {
    return (
        <div id="parallax">
            <div>
                <details id="unique">
                    <summary />
                    <nav className="menu" onClick={({ target }) => target.parentElement.parentElement.open = false}>
                        <Link href="#sobre">Sobre</Link>
                        <Link href="#artista">Artista</Link>
                        <Link href="#galeria">Galeria</Link>
                        <Link href="#aparicoes">Aparições na mídia</Link>
                        <Link href="#contatos">Contatos</Link>
                    </nav>
                </details>  
            </div>
            <h1>Biel Marconato</h1>
            <p>ator - modelo - influencer</p>
        </div>
    )
}