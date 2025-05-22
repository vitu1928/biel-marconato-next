
import { NextSeo } from 'next-seo';

import Head from 'next/head';

import Contatos from '../components/contatos';

import '../styles/global.scss';
import '../styles/sections/artista.scss';
import '../styles/sections/clipping.scss';
import '../styles/sections/diretores.scss';
import '../styles/sections/modelo.scss';
import '../styles/sections/sobre.scss';

export default function MyApp({ Component, pageProps }) {

  return (<>
    <Head>
      <link rel="icon" href="images/Biels/favicon-32x32.png" />
      
     

    </Head>
    <NextSeo
      
      title="Biel Marconato"
      description="Biel Marconato Ator e modelo"
      canonical="https://www.bielmarconato.com.br/"
      openGraph={{
        url: 'https://bielmarconato.com.br/',
        type: 'website',
        title: 'Biel Marconato WebSite',
        description: 'Site de Biel Marconato ',
        images: [
          {
            url: "images/Biels/Biel90.jpg",
            width: 90,
            height: 90,
            alt: 'Biel Marconato',
            type: 'image/jpeg',
          },
          {
            url: "images/Biels/Bielcruzado.jpg",
            width: 640,
            height: 640 ,
            alt: 'Biel Marconato',
            type: 'image/jpeg',
          },
          {
            url: "images/Biels/Bielellus.jpeg",
            width: 1080,
            height: 1080 ,
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
  </>)
}