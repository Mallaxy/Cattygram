import React from 'react'
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReduser";

const MyPosts = (props) => {
    let postElements = props.profilePage.postsData.map(p => <Post text={p.text} likeCount={p.likeCount}/>)
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <div className={classes.main}>
            <h2>My posts</h2>
            <div>
                <textarea ref={newPostElement}
                          placeholder='Text'
                          value={props.profilePage.newPostText}
                          onChange={onPostChange}/>
                <button onClick={addPost} className={classes.mainButton}>Post</button>
            </div>
            {postElements}
        </div>
    )
}


export default MyPosts