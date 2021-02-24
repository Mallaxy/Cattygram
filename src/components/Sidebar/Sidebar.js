import React from 'react'
import classes from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <nav className={classes.sidebar}>
            <ul className={classes.sidebar__list}>
                <li className={classes.sidebar__item}><a href="#">Profile</a></li>
                <li className={classes.sidebar__item}><a href="#">Messages</a></li>
                <li className={classes.sidebar__item}><a href="#">News</a></li>
                <li className={classes.sidebar__item}><a href="#">Music</a></li>
                <li className={classes.sidebar__item}><a href="#">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Sidebar