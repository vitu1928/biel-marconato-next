import HarryP from "../../public/Imagens/Aparicoes/HarryP.jpg"
import JardinsMaravilhas from "../../public/Imagens/Aparicoes/JardinsMarvilhas.jpg"
import VigiaDeCana from "../../public/Imagens/Aparicoes/VigiaDeCana.jpg"

import Image from "next/image"

export default function Aparicoes() {
  return (
    <>
      <h2>
        Aparições na mídia
      </h2>
      <section id="aparicoes">
        <Image 
          layout='intrinsic'
          objectFit='cover'
          objectPosition={"center center"}
          src={JardinsMaravilhas}
          height={800}
          width={400}
        />
        <div>
          <base target="_blank" />
          <ul>
              <li>
                <a href="https://modelbrazil.com.br/?s=Biel+Marconato+">
                  <p>Model <br /> Brazil</p>
                  <img 
                    alt="Biel Marconato Model Brazil"
                    src="https://modelbrazil.com.br/wp-content/upload s/2021/11/7EDCF1C1-9758-475F-A1F5-04B99843315D-213x300.jpeg"
                    style={
                      {
                        height: "140%"
                      }
                    }
                  />
                </a>
              </li>
              <li>
                <a href="https://extra.globo.com/tv-e-lazer/biel-morconato-estreia-na-tv-em-reis-nova-novela-da-record-25447856.html">
                  <p>Extra</p>
                  <img 
                    alt="Biel Marconato Globo"
                    src="https://extra.globo.com/incoming/25448060-066-487/w448h673-PROP/whatsapp-image-2022-03-25-at-11.30.58.jpeg.jpg"
                  />
                </a>
              </li>
              <li>
                <a href="https://observatoriodatv.uol.com.br/colunas/anddreh-ponttez/estrela-mirim-da-record-tv-biel-marconato-ganha-festa-de-aniversario-surpresa-de-os-chocolix">
                  <p>Observatório<br />da TV</p>
                  <img
                    alt="Biel Marconato Observatório da TV"
                    src="https://observatoriodatv.uol.com.br/wp-content/uploads/2022/02/biel-marconato.jpg"
                  />
                </a>
              </li>
              <li>
                <a href="https://vimagazine.com.br/?p=2995">
                  <p>Vimagazine</p>
                  <img 
                    alt="Biel Marconato Vimagazine" 
                    src="https://vimagazine.com.br/wp-content/uploads/2022/02/festa-Biel-4-1024x683.jpg"
                  />
                </a>
              </li>
          </ul>
        </div>
        <div>
          <base target="_blank" />
          <ul>
              <li>
                <a href="https://timesbrasilia.com.br/destaque/estrela-mirim-da-record-tv-biel-marconato-completou-11-anos-com-comemoracao-cheia-de-famosos/">
                  <p>Times<br />Brasilia</p>
                  <img alt="Biel Marconato" src="https://timesbrasilia.com.br/wp-content/uploads/2022/02/festa-Biel-4-768x512.jpg" />
                </a>
              </li>
              <li>
                <a href="https://culturaenegocios.com.br/estrela-mirim-da-record-tv-biel-marconato-completou-11-anos-com-comemoracao-cheia-de-famosos/">
                <p>Cultura E Negócios</p>
                  <img alt="Biel Marconato" src="https://culturaenegocios.com.br/wp-content/uploads/2022/02/Captura-de-tela-2022-02-09-151243-1200x600.png" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/p/CZzTW0eO78W/?utm_medium=copy_link">
                  <p>Expresso<br />News</p>
                  <img alt="Biel Marconato" src={HarryP.src} />
                </a>
              </li>
              <li>
                <a href="https://revistapan.com.br/estrela-mirim-da-record-tv-biel-marconato-completou-11-anos-com-comemoracao-cheia-de-famosos/">
                  <p>PAN</p>
                  <img alt="Biel Marconato" src="https://revistapan.com.br/wp-content/uploads/2022/02/festa-Biel-5.jpg" />
                </a>
              </li>
          </ul>
        </div>
        <Image 
          layout='intrinsic'
          objectFit='fill'
          objectPosition={"center center"}
          src={VigiaDeCana}
          height={800}
          width={400}
        />
      </section>
    </>
  )
}