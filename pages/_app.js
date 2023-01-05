import { NextSeo } from 'next-seo';
import Head from 'next/head';

import Contatos from '../components/contatos';

import '../styles/global.scss'
import '../styles/sections/artista.scss'
import '../styles/sections/clipping.scss'
import '../styles/sections/sobre.scss'
import '../styles/sections/modelo.scss'
import '../styles/sections/diretores.scss'

export default function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <link rel="icon" href="images/Biels/favicon-32x32.png" />

    </Head>
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
            url: "https://instagram.fcgh7-1.fna.fbcdn.net/v/t51.2885-15/288925766_557324139231729_314863560274674866_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcgh7-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=c1wB-0Mf1DAAX9vjbv6&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjg2MjcxMjc1Mzk3NjEwMjc0Nw%3D%3D.2-ccb7-5&oh=00_AfDLZBEPlVLFxJx2OrkvfgxcRLGoRC0NuBEKisiLOtBF8w&oe=63BBBAE2&_nc_sid=6136e7",
            width: 800,
            height: 600,
            alt: 'Biel Marconato',
            type: 'image/jpeg',
          }
        ],
        siteName: 'Biel Marconato',
      }}
    />
    <Component {...pageProps} />

    <footer>
      <Contatos />

      {/* <address>2022 © por Victor</address> */}
    </footer>
  </>
}