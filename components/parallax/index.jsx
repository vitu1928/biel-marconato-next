import { DivParallax } from "./style.module.scss"

import Menu from "../menu"
import { useRouter } from "next/router"

export default function Parallax({ img }) {
    const router = useRouter();

    const hrefs = require("../../public/hrefs.json")
    return (
        <div 
            className={DivParallax}
            style={{backgroundImage: `url(${img?.src})`}}
        >
            <Menu />
            <h1>Biel Marconato</h1>
            <h4>{hrefs[router.pathname]}</h4>
        </div>
    )
}