import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.made}>Made by <span>Mallax</span></div>
            <div className={s.help}>Helped by <a
                href="https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g">IT-Kamasutra</a></div>
        </div>
    )
}

export default Footer