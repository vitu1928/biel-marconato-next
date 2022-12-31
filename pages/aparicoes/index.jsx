import Imgbox from "../../components/imgbox";
import Parallax from "../../components/parallax";
import Transitions from "../../components/transicao";

import { SectionAparicoes } from "./style.module.scss";

import HarryP from "../../public/images/Aparicoes/HarryP.jpg";
import JardinsMaravilhas from "../../public/images/Aparicoes/JardinsMarvilhas.jpg";
import BielRio from "../../public/images/Biels/BielRio.jpg"

export default function Aparicoes() {

    return (
        <>
            <Transitions>
                <Parallax img={BielRio} />
                <section className={SectionAparicoes}>
                    <h2>Na mídia</h2>
                    <article>
                        <ul type="none">
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://gazetadanoticia.com.br/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-20-at-13.57.43.jpeg", alt: "Biel no teatro" }}
                                        title="Gazeta da noticia"
                                        popacitylow="Gabriel Marconato Fala Sobre Estreia No Teatro: “Foi Uma Experiência Muito Legal”                                "
                                        p="Aos 10 anos, o ator Gabriel Marconato só tem motivos para celebrar. Ele estreou recentemente seu primeiro espetáculo nos teatros.
                                            “Foi uma experiência muito legal, fiquei aflito quando o personagem ‘Sem Nome’ roubou o macaco (risos), isso me deu um desespero, eu gritava bem alto pra ver se o Stephen ouvia”, conta."
                                        href="https://gazetadanoticia.com.br/2022/06/21/gabriel-marconato-fala-sobre-estreia-no-teatro-foi-uma-experiencia-muito-legal/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://release.celebs.com.br/medias/posts/big/23952/1-38.jpg", alt: "Biel na record" }}
                                        title="Celebs"
                                        popacitylow="O ator mirim Biel Marconato aproveitou o dia de folga para um passeio de Maria Fumaça, na região de Campinas, interior de São Paulo."
                                        p="Biel aproveitou ao lado da família um passeio incrível na Maria Fumaça, saindo de Campinas e com paradas especiais pela região. Além de muita história sobre esses lugares, cantorias e comidas típicas."
                                        href="https://celebs.com.br/7691/biel-marconato-se-diverte-em-passeio-de-maria-fumaca-pela-regiao-de-campinas/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://media.jornaldooeste.com.br/2022/05/30765d4b-image001-3.jpg", alt: "Novela reis Biel Marconato" }}
                                        title="Jornal do oeste"
                                        popacitylow="Estreante na Record TV Biel Marconato comenta sobre as gravações da novela “Reis”                                "
                                        p="Estreante na Record TV, o ator mirim Biel Marconato comenta sobre as gravações da novela “Reis” e afirma “Já comecei a me sentir em casa!”.                                "
                                        href="https://www.jornaldooeste.com.br/variedades/estreante-na-record-tv-biel-marconato-comenta-sobre-as-gravacoes-da-novela-reis/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={
                                            {
                                                src: "https://timesbrasilia.com.br/wp-content/uploads/2022/06/biel-maria-fumac-768x1024.jpeg",
                                                alt: "Biel Maronato Times Brasilia trem",
                                                style: { objectPosition: "top center" }
                                            }
                                        }
                                        title="Times Brasilia"
                                        popacitylow="Biel Marconato se diverte em passeio de Maria Fumaça pela região de Campinas"
                                        p="O ator mirim Biel Marconato aproveitou o dia de folga para um passeio de Maria Fumaça, na região de Campinas, interior de São Paulo."
                                        href="https://timesbrasilia.com.br/cultura/biel-marconato-se-diverte-em-passeio-de-maria-fumaca-pela-regiao-de-campinas/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={
                                            {
                                                src: "https://timesbrasilia.com.br/wp-content/uploads/2022/05/biel-reis-1.jpeg",
                                                alt: "Biel Marconato Record"
                                            }
                                        }
                                        title="Times Brasilia"
                                        popacitylow="Biel Marconato comenta como foram as gravações da novela “Reis”"
                                        p="O ator mirim Biel Marconato estreou na Record TV e conta como foi participar das gravações da novela “Reis”, e afirma: “Logo que cheguei, comecei a me sentir em casa”."
                                        href="https://timesbrasilia.com.br/cultura/biel-marconato-comenta-como-foram-as-gravacoes-da-novela-reis/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={
                                            {
                                                src: "https://timesbrasilia.com.br/wp-content/uploads/2022/02/festa-Biel-4-768x512.jpg",
                                                alt: "Biel Marconato times Brasilia"
                                            }
                                        }
                                        title="Times Brasilia"
                                        popacitylow="Estrela mirim da Record TV Biel Marconato completou 10 anos com comemoração cheia de famosos"
                                        p="Uma das estrelas do casting mirim da Record TV, o ator Biel Marconato, completou 10 anos e comemorou no parque indoor Game Station em São Paulo, com diversos amigos e parceiros."
                                        href="https://timesbrasilia.com.br/destaque/estrela-mirim-da-record-tv-biel-marconato-completou-11-anos-com-comemoracao-cheia-de-famosos/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://marramaque.live/wp-content/uploads/2022/05/biel-reis-1.jpeg" }}
                                        title="Marramaque"
                                        popacitylow="BIEL MARCONATO COMENTA COMO FORAM AS GRAVAÇÕES DA NOVELA “REIS”"
                                        href="https://marramaque.live/index.php/2022/05/18/biel-marconato-comenta-como-foram-as-gravacoes-da-novela-reis/"
                                        p="O ator mirim Biel Marconato estreou na Record TV e conta como foi participar das gravações da novela “Reis”, e afirma: “Logo que cheguei, comecei a me sentir em casa” ..."
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={
                                            {
                                                src: JardinsMaravilhas.src,
                                                alt: "Biel no Jardim das maravilhas de Miró"
                                            }
                                        }
                                        title="Extra Globo"
                                        popacitylow="Atores mirins conferem a exposição 'O Jardim das Maravilhas de Miró', no Rio"
                                        href="https://extra.globo.com/tv-e-lazer/atores-mirins-conferem-exposicao-jardim-das-maravilhas-de-miro-no-rio-25365173.html"
                                        p="Atores mirins foram conferir a exposição 'O Jardim das Maravilhas de Miró', que acaba de chegar ao Rio. Sucesso de público em São Paulo, a mostra está disponível no Rio Design Barra ..."
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={
                                            {
                                                src: "https://modelbrazil.com.br/wp-content/uploads/2021/11/7EDCF1C1-9758-475F-A1F5-04B99843315D-213x300.jpeg",
                                                alt: "Biel Maronato Model Brazil",
                                                style: { objectPosition: "top center" }
                                            }
                                        }
                                        title="Biel Marconato Model Brazil"
                                        popacitylow="Gabriel Marconato: O modelo que aos 10 anos considerado uma grande promessa no mercado fashion e publicitário"
                                        p="Quem é hoje o BieL Marconato ?
                                    •Gabriel Marconato Ramos chamado carinhosamente pelos amigos BieL está com 10 anos ( 29/01/2011) ..."
                                        href="https://modelbrazil.com.br/gabriel-marconato-o-modelo-que-aos-10-anos-considerado-uma-grande-promessa-no-mercado-fashion-e-publicitario/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://observatoriodatv.uol.com.br/wp-content/uploads/2022/02/biel-marconato.jpg", alt: "Biel Marconato Observatório da TV" }}
                                        title="Observatório da TV"
                                        popacitylow="Estrela mirim da Record TV, Biel Marconato ganha festa de aniversário surpresa de Os Chocolix"
                                        p="Uma das estrelas do casting mirim da Record TV, o ator Biel Marconato, completou 10 anos no último final de semana no parque indoor Game Station em São Paulo."
                                        href="https://observatoriodatv.uol.com.br/colunas/anddreh-ponttez/estrela-mirim-da-record-tv-biel-marconato-ganha-festa-de-aniversario-surpresa-de-os-chocolix"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={
                                            {
                                                src: "https://vimagazine.com.br/wp-content/uploads/2022/02/festa-Biel-4-1024x683.jpg",
                                                alt: "Biel Marconato Vimagazine"
                                            }
                                        }
                                        title="Vimagazine"
                                        popacitylow="Estrela mirim da Record TV Biel Marconato completou 10 anos com comemoração cheia de famosos"
                                        p="Uma das estrelas do casting mirim da Record TV, o ator Biel Marconato, completou 10 anos e comemorou no parque indoor Game Station em São Paulo, com diversos amigos e parceiros."
                                        href="https://vimagazine.com.br/?p=2995"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={
                                            {
                                                src: "https://timesbrasilia.com.br/wp-content/uploads/2022/02/festa-Biel-4-768x512.jpg",
                                                alt: "Biel Marconato times Brasilia"
                                            }
                                        }
                                        title="Times Brasilia"
                                        popacitylow="Estrela mirim da Record TV Biel Marconato completou 11 anos com comemoração cheia de famosos"
                                        p="Uma das estrelas do casting mirim da Record TV, o ator Biel Marconato, completou 11 anos e comemorou no parque indoor Game Station em São Paulo, com diversos amigos e parceiros."
                                        href="https://timesbrasilia.com.br/destaque/estrela-mirim-da-record-tv-biel-marconato-completou-11-anos-com-comemoracao-cheia-de-famosos/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={
                                            {
                                                src: "https://culturaenegocios.com.br/wp-content/uploads/2022/02/Captura-de-tela-2022-02-09-151243-1200x600.png",
                                                alt: "Biel Marconato em Cultura e Negócios"
                                            }
                                        }
                                        title="Cultura e Negócios"
                                        popacitylow="Estrela mirim da Record TV Biel Marconato completou 11 anos com comemoração cheia de famosos"
                                        p="Uma das estrelas do casting mirim da Record TV, o ator Biel Marconato, completou 11 anos e comemorou no parque indoor Game Station em São Paulo, com diversos amigos e parceiros"
                                        href="https://culturaenegocios.com.br/estrela-mirim-da-record-tv-biel-marconato-completou-11-anos-com-comemoracao-cheia-de-famosos/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={
                                            {
                                                src: HarryP.src,
                                                alt: "Biel Marconato em Expresso News Instragram"
                                            }
                                        }
                                        title="Expresso News"
                                        popacitylow="Escalado para a próxima novela bíblica da emissora 'Reis'"
                                        p="Biel vem se destacando cada vez mais no teatro, TV e cinema. Na televisão já atuou em 'As Aventuras de Poliana' do SBT e na série 'Bugados' no Globoplay"
                                        href="https://www.instagram.com/p/CZzTW0eO78W/?utm_medium=copy_link"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={
                                            {
                                                src: "https://revistapan.com.br/wp-content/uploads/2022/02/festa-Biel-5.jpg",
                                                alt: "Biel Marconato no parque indoor Game Station"
                                            }
                                        }
                                        title="PAN"
                                        popacitylow="Estrela mirim da Record TV Biel Marconato completou 11 anos com comemoração cheia de famosos"
                                        p="Uma das estrelas do casting mirim da Record TV, o ator Biel Marconato, completou 11 anos e comemorou no parque indoor Game Station em São Paulo, com diversos amigos e parceiros."
                                        href="https://revistapan.com.br/estrela-mirim-da-record-tv-biel-marconato-completou-11-anos-com-comemoracao-cheia-de-famosos/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={
                                            {
                                                src: "https://timesbrasilia.com.br/wp-content/uploads/2022/05/biel-reis-1.jpeg",
                                                alt: "Biel Marconato Record"
                                            }
                                        }
                                        title="Times Brasilia"
                                        popacitylow="Biel Marconato comenta como foram as gravações da novela “Reis”"
                                        p="O ator mirim Biel Marconato estreou na Record TV e conta como foi participar das gravações da novela “Reis”, e afirma: “Logo que cheguei, comecei a me sentir em casa”."
                                        href="https://timesbrasilia.com.br/cultura/biel-marconato-comenta-como-foram-as-gravacoes-da-novela-reis/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://release.celebs.com.br/medias/posts/big/23218/1-4.jpg", alt: "Biel na record" }}
                                        title="Celebs"
                                        popacitylow="O ator mirim Biel Marconato estreou na Record TV e conta como foi participar das gravações da novela “Reis”, e afirma: 'Logo que cheguei, comecei a me sentir em casa'."
                                        p="O ator mirim, de apenas 10 anos de idade, fez aulas de interpretação para novelas bíblicas, o que o ajudou muito na hora de construir seu personagem ..."
                                        href="https://celebs.com.br/7400/biel-marconato-comenta-como-foram-as-gravacoes-da-novela-reis/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://www.correiodopovo.com.br/image/policy:1.825305:1653053746/.jpeg?f=2x1&$p=2be3c1c&w=2400&$w=d2ad2f2", alt: "" }}
                                        title="Correio do povo"
                                        popacitylow="Biel Marconato comenta como foram as gravações da primeira parte da novela “Reis” da Record TV"
                                        p="Eu lembro que tinha acabado de entrar em casa depois de passar o dia brincando e minha mãe recebeu uma mensagem dizendo que eu ia participar do elenco da novela “Reis”, como Ner, eu chorei muito de gratidão”."
                                        href=""
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://revistapan.com.br/wp-content/uploads/2022/05/biel-reis-1.jpeg", alt: "Biel Record" }}
                                        title="Revista PAN"
                                        popacitylow="Biel Marconato comenta como foram as gravações da novela “Reis”                               "
                                        p="O ator mirim Biel Marconato estreou na Record TV e conta como foi participar das gravações da novela “Reis”, e afirma: “Logo que cheguei, comecei a me sentir em casa”."
                                        href="https://revistapan.com.br/biel-marconato-comenta-como-foram-as-gravacoes-da-novela-reis/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://cdn.abcdoabc.com.br/biel_743d4492.jpg", alt: "Biel novela reis" }}
                                        title="Abc do abc"
                                        popacitylow="O ator mirim Biel Marconato viveu a primeira fase de um soldado notável israelita que defende seu povo na novela"
                                        p="“Eu lembro que tinha acabado de entrar em casa depois de passar o dia brincando e minha mãe recebeu uma mensagem dizendo que eu ia participar do elenco da novela “Reis”, como NER ..."
                                        href="https://www.abcdoabc.com.br/brasil-mundo/noticia/biel-marconato-comenta-como-foram-gravacoes-novela-reis-record-tv-157790"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://media.jornaldooeste.com.br/2022/05/30765d4b-image001-3.jpg", alt: "Novela reis Biel Marconato" }}
                                        title="Jornal do oeste"
                                        popacitylow="Estreante na Record TV Biel Marconato comenta sobre as gravações da novela “Reis”                                "
                                        p="Estreante na Record TV, o ator mirim Biel Marconato comenta sobre as gravações da novela “Reis” e afirma “Já comecei a me sentir em casa!”.                                "
                                        href="https://www.jornaldooeste.com.br/variedades/estreante-na-record-tv-biel-marconato-comenta-sobre-as-gravacoes-da-novela-reis/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://culturaenegocios.com.br/wp-content/uploads/2022/05/biel-reis-1-640x400.jpeg", alt: "Biel Record" }}
                                        title="Cultura e Negócios"
                                        popacitylow="Biel Marconato comenta como foram as gravações da novela “Reis”"
                                        p="O ator mirim Biel Marconato estreou na Record TV e conta como foi participar das gravações da novela “Reis”, e afirma: “Logo que cheguei, comecei a me sentir em casa”"
                                        href="https://culturaenegocios.com.br/biel-marconato-comenta-como-foram-as-gravacoes-da-novela-reis/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://portaldosfamosos.com.br/wp-content/uploads/2022/05/biel-reis-2.jpeg", alt: "" }}
                                        title="Portal dos famosos"
                                        popacitylow="Biel Marconato comenta como foram as gravações da primeira parte da novela “Reis” da Record TV"
                                        p="“Eu lembro que tinha acabado de entrar em casa depois de passar o dia brincando e minha mãe recebeu uma mensagem dizendo que eu ia participar do elenco da novela “Reis”, como NER, eu chorei muito de gratidão”."
                                        href="https://portaldosfamosos.com.br/2022/05/22/biel-marconato-comenta-como-foram-as-gravacoes-da-primeira-parte-da-novela-reis-da-record-tv/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={
                                            {
                                                src: "https://culturaenegocios.com.br/wp-content/uploads/2022/02/Captura-de-tela-2022-02-09-151243-1200x600.png",
                                                alt: "Biel Marconato em Cultura e Negócios"
                                            }
                                        }
                                        title="Cultura e Negócios"
                                        popacitylow="Estrela mirim da Record TV Biel Marconato completou 10 anos com comemoração cheia de famosos"
                                        p="Uma das estrelas do casting mirim da Record TV, o ator Biel Marconato, completou 10 anos e comemorou no parque indoor Game Station em São Paulo, com diversos amigos e parceiros"
                                        href="https://culturaenegocios.com.br/estrela-mirim-da-record-tv-biel-marconato-completou-11-anos-com-comemoracao-cheia-de-famosos/"
                                    />
                                </div>
                            </li>
                            <li>
                                <div>
                                    <Imgbox
                                        img={{ src: "https://noticias.sorocaba.sp.gov.br/wp-content/uploads/2022/05/noticias.sorocaba.sp.gov.br-secretaria-de-cultura-de-sorocaba-recebe-visita-do-ator-mirim-biel-marconato-whatsapp-image-2022-05-27-at-12.40.51.jpeg", alt: "Biel na secretaria de cultura de sorocaba" }}
                                        title="Secretaria de Cultura de Sorocaba"
                                        popacitylow="Secretaria de Cultura de Sorocaba recebe visita do ator mirim Biel Marconato"
                                        p="A Secretaria de Cultura (Secult), representada pelo secretário Luiz Antonio Zamuner, recebeu, nesta semana, a visita do ator mirim Biel Marconato, de 10 anos, no Chalé Francês, localizado no Centro de Sorocaba."
                                        href="https://noticias.sorocaba.sp.gov.br/secretaria-de-cultura-de-sorocaba-recebe-visita-do-ator-mirim-biel-marconato/"
                                    />
                                </div>
                            </li>
                        </ul>
                    </article>
                </section>
            </Transitions>
        </>
    )
}