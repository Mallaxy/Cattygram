import React from 'react'
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.avatar}>
                <img
                    src="http://placehold.it/150/a6ef6c"
                    alt=""/>
            </div>
            <div className={classes.postInfo}>
                <div className={classes.text}>
                    {props.body}
                </div>
                <button>Like! <span>{props.likeCount}</span></button>
            </div>
        </div>
    )
}

export default Post