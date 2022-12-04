import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion';

import Menu from '../components/menu';
import Contatos from '../components/contatos';

import '../styles/index.scss'

export default function MyApp({ Component, pageProps }) {

  return <>
    <NextSeo
      title="Biel Marconato"
      description="Biel Marconato Ator e modelo"
      canonical="https://www.bielmarconato.com.br/"
      openGraph={{
        url: 'https://bielmarconato.com.br/',
        title: 'Biel Marconato WebSite',
        description: 'Site de Biel Marconato ',
        images: [
          {
            url: 'https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/60cfdd46cea2c_162423533460cfdd467652d.jpeg',
            width: 800,
            height: 600,
            alt: 'Biel Marconato',
            type: 'image/jpeg',
          }
        ],
        siteName: 'Biel Marconato',
      }}
    />

    <link rel="icon" href="Imagens/Biels/favicon-32x32.png" />

    <Menu />
    <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={{
          hidden: { opacity: 0, x: -200, y: 0 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: -100 },
        }}
        transition={{ type: 'linear' }}
        onExitComplete={() => window.scrollTo(0, 0)}
      ><Component {...pageProps} /></motion.main>
    <footer>
      <Contatos />

      <div id="by">
        <p>
          <address>2022 © por Victor</address>
        </p>
      </div>
    </footer>
  </>
}