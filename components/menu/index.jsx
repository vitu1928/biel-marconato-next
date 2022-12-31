import Link from "next/link"

import { useEffect } from "react";
import { BrowserView, MobileView } from 'react-device-detect';

import { Details, NavMenu, Summary, Navigation, Header } from "./style.module.scss"

export default function Menu() {
    const hrefs = require("../../public/hrefs.json")
    useEffect(() => {
        const debounce = (fn) => {
            let frame;
            return (...params) => {
                if (frame) cancelAnimationFrame(frame);
                frame = requestAnimationFrame(() => fn(...params))
            }
        }
        const storeScroll = () => document.documentElement.dataset.scroll = window.scrollY;

        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        storeScroll();
    }, [])

    return <>
        <BrowserView style={{ width: "100%" }}>
            <header className={Header}>
                <nav className={Navigation} id="navigation">
                    <ul>
                        {
                            Object.entries(hrefs).map(([k, v], i) => <li key={i}>
                                <Link href={k}>{v.toUpperCase()}</Link>
                            </li>)
                        }
                    </ul>
                </nav>
            </header>
        </BrowserView>
        <MobileView>
            <div>
                <details className={Details} id="unique">
                    <summary className={Summary} />
                    <nav className={NavMenu} onClick={({ target }) => target.parentElement.parentElement.open = false}>
                        <Link href="/">Sobre</Link>
                        <Link href="/galeria">Galeria</Link>
                        <Link href="/aparicoes">Na mídia</Link>
                        <Link href="#contatos">Contatos</Link>
                    </nav>
                </details>
            </div>
        </MobileView>
    </>
}