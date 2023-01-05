import { DivParallax } from "./style.module.scss"

import Menu from "../menu"

export default function Parallax({ img }) {
    return (
        <div
            className={DivParallax}
            style={{ backgroundImage: `url(${img?.src})` }}
        >
            <Menu />
            <h1>Biel Marconato</h1>
        </div>
    )
}