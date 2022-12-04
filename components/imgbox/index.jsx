import { useState } from "react"

import { DivImgBox, TransparentBox, Caption, OpacityLow } from "./style.module.scss"

export default function Imgbox(props) {
 // rel="_external" target="_blank"
    const [href, setHref] = useState("javascript:;")
    const [rel, setRel] = useState("")
    const [target, setTarget] = useState("")
    
    function set() {
        setHref(props.href)
        setRel("_external")
        setTarget("_blank")
    }

    function unset() {
        setHref("javascript:;")
        setRel("")
        setTarget("")
    }
    
    return (
        <a 
            rel={rel}
            target={target}
            href={href}
            onClick={() => setTimeout(set)}
            onMouseEnter={() => setTimeout(set)}
            onMouseLeave={unset}
        >
            <div className={DivImgBox}>
                <img {...props.img} />
                <span>{props.title}</span>
                <div className={TransparentBox}>
                    <div className={Caption}>
                    <p>{props.title}</p>
                    <p className={OpacityLow}>{props.popacitylow}</p>
                    <p>{props.p}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}