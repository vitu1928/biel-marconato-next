import { useEffect } from 'react'

// Estudos
// import Cinema from "../public/images/cinema.jpg"

// Components
import Aparicoes from '../components/aparicoes'
import Parallax from '../components/parallax'
import Sobre from '../components/sobre'
import Artista from './artista'

import Transitions from '../components/transicao'
import BielA1 from "../public/images/Biels/BielaA1.jpg"

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
    <Transitions>
      <Parallax
        imgSrc={BielA1.src}
        title="ator - modelo - influencer"
      />
      <Sobre />
      <hr />
      <Artista />
      <hr />
      <Aparicoes />
    </Transitions>
  )
}
