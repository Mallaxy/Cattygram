import React from 'react'
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
    let postElements = props.postsData.map(p => <Post body={p.body} likeCount={p.likeCount}/>)
    let newPostElement = React.createRef()
    let addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className={classes.main}>
            <h2>My posts</h2>
            <div>
                <textarea ref={newPostElement}
                          placeholder='Text'
                          value={props.newPostText}
                          onChange={onPostChange}/>
                <button onClick={addPost} className={classes.mainButton}>Post</button>
            </div>
            {postElements}
        </div>
    )
}


export default MyPosts