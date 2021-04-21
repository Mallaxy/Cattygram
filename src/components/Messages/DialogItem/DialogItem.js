import React from 'react'
import s from "../Messages.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div>
            <NavLink to={'/messages/' + props.id} activeClassName={s.activeDialog}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem