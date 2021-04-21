import React from 'react'
import s from "../Messages.module.css";

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div>
                <div className={s.text}>
                    {props.text}
                </div>
            </div>
        </div>
    )
}

export default Message