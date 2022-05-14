import Head from 'next/head'

// Estudos
import Teatro from "../public/Imagens/teatro.jpg"
// import Cinema from "../public/Imagens/cinema.jpg"
import Piano from "../public/Imagens/piano.jpg"
import Sapateado from "../public/Imagens/sapateado.jpg"

// Components
import Aparicoes from '../components/aparicoes'
import Artista from '../components/artista'
import Contatos from '../components/contatos'
import Galeria from '../components/galeria'
import Parallax from '../components/parallax'
import Sobre from '../components/sobre'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const inViewport = (entries, observer) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
      });
    };
    
    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {};
    
    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
    ELs_inViewport.forEach(EL => {
      Obs.observe(EL, obsOptions);
    });
  }, [])

  return (
    <div>
      <Head>
        <title>Biel Marconato</title>
        <meta name="description" content="Biel Marconato Web site" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Parallax />
      <main>   
        <Sobre />
        <hr />
        <Artista />
        <hr />
        <Galeria />
        <Aparicoes />
      </main>
      <footer>
        <Contatos />

        <div>
          <p>
          {/* <address>© 2022 feito por mim (Victor)</address> */}
          </p>
        </div>
      </footer>
    </div>
  )
}
