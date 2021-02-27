import React from 'react'
import classes from "../Messages.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/messages/' + props.id} activeClassName={classes.activeDialog}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem