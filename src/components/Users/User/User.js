import React from "react";
import classes from './User.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>
                <div className={classes.leftContent}>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/cat-29-81503.png' alt=""/>
                    </NavLink>
                    {props.followed
                        ? <button onClick={() => {
                            props.follow(props.user.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(props.user.id)
                        }}>Follow</button>}
                </div>
                <div className={classes.rightContent}>
                    <div className={classes.info}>
                        <div>{props.user.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User