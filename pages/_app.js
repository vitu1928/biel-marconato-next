import Head from 'next/head'

import '../styles/index.scss' 

export default function MyApp({ Component, pageProps }) {
  return   <>
      <Head>
        <title>Biel Marconato</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Biel Marconato" key="title" />
        <meta property="og:description" content="Biel Marconato Ator e modelo" key="description" />
        <meta name="keywords" content="Biel Marconato, Novela Reis" />
        <meta name="author" content="Victor Torrens" />
        <meta property="og:image" content="https://arquivos-elencodigital.s3.sa-east-1.amazonaws.com/imagens/elenco/60cfdd46cea2c_162423533460cfdd467652d.jpeg" key="image" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta http-equiv="content-language" content="pt-br" />
      </Head>
      <Component {...pageProps} />
    </>
}