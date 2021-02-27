import React from 'react'
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
    let postElements = props.postsData.map(p => <Post text={p.text} likeCount={p.likeCount}/>)
    return (
        <div className={classes.wall}>
            <h2>My posts</h2>
            <form action="">
                <textarea name="post" id="" cols="30" rows="3">Text</textarea>
                <button className={classes.wallButton}>Post</button>
            </form>
            {postElements}
        </div>
    )
}

export default MyPosts