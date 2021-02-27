import React from 'react'
import classes from "../Messages.module.css";

const Message = (props) => {
    return (
        <div className={classes.message}>
            <div className={classes.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div>
                <div className={classes.text}>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Message