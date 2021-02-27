import React from 'react'
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.avatar}>
                <img
                    src="https://via.placeholder.com/150/771796"
                    alt=""/>
            </div>
            <div className={classes.text}>
                {props.text}
            </div>
            <button>Like! <span>{props.likeCount}</span></button>
        </div>
    )
}

export default Post