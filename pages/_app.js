import { NextSeo } from 'next-seo';

import Contatos from '../components/contatos';

import './index.scss';

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
            url: 'https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/images/elenco/60cfdd46cea2c_162423533460cfdd467652d.jpeg',
            width: 800,
            height: 600,
            alt: 'Biel Marconato',
            type: 'image/jpeg',
          }
        ],
        siteName: 'Biel Marconato',
      }}
    />

    <link rel="icon" href="images/Biels/favicon-32x32.png" />

    <Component {...pageProps} />

    <footer>
      <Contatos />

      <div id="by">
        <address>2022 © por Victor</address>
      </div>
    </footer>
  </>
}