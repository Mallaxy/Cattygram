import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.made}>Made by <span>Mallax</span></div>
            <div className={classes.help}>Helped by <a
                href="https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g">IT-Kamasutra</a></div>
        </div>
    )
}

export default Footer