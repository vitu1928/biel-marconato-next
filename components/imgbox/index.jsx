import { useState } from "react"

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
            <div className="img-box">
                <img {...props.img} />
                <span>{props.title}</span>
                <div className="transparent-box">
                    <div className="caption">
                    <p>{props.title}</p>
                    <p className="opacity-low">{props.popacitylow}</p>
                    <p>{props.p}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}