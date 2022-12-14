import { motion } from 'framer-motion'
import { useEffect } from 'react'

// Estudos
import Teatro from "../public/Imagens/teatro.jpg"
// import Cinema from "../public/Imagens/cinema.jpg"
import Piano from "../public/Imagens/piano.jpg"
import Sapateado from "../public/Imagens/sapateado.jpg"

// Components
import Parallax from '../components/parallax'
import Aparicoes from '../components/aparicoes'
import Artista from './artista'
import Sobre from '../components/sobre'

import BielA1 from "../public/Imagens/Biels/BielaA1.jpg";
import Transitions from '../components/transicao'

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
