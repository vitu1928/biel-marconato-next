import Imgbox from "../../components/imgbox";
import Parallax from "../../components/parallax";
import Transitions from "../../components/transicao";

import { SectionAparicoes } from "./style.module.scss";

import BielRio from "../../public/images/Biels/BielRio.jpg";

export default function Aparicoes() {
    const lugares = require("./lugares.json")

    return (
        <>
            <Transitions>
                <Parallax img={BielRio} />
                <section className={SectionAparicoes}>
                    <h2>Na mídia</h2>
                    <article>
                        <ul type="none">
                            {
                                lugares.map((data, k) => <li key={k}>
                                    <Imgbox
                                        {...data}
                                    />
                                </li>)
                            }
                        </ul>
                    </article>
                </section>
            </Transitions>
        </>
    )
}