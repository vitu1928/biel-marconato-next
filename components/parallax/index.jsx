import { DivParallax } from "./style.module.scss"

export default function Parallax({ imgSrc, title }) {
    return (
        <div 
            className={DivParallax}
            style={{backgroundImage: `url(${imgSrc})`}}
        >
            <h1>Biel Marconato</h1>
            <h4>{title}</h4>
        </div>
    )
}