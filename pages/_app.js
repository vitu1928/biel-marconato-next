

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
     
    <Component {...pageProps} />

    <footer>
      <Contatos />

      {/* <address>2022 © por Victor</address> */}
    </footer>
  </>)
}