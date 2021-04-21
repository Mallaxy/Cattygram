import React from 'react'
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img
                    src="http://placehold.it/150/a6ef6c"
                    alt=""/>
            </div>
            <div className={s.postInfo}>
                <div className={s.text}>
                    {props.body}
                </div>
                <button>Like! <span>{props.likeCount}</span></button>
            </div>
        </div>
    )
}

export default Post