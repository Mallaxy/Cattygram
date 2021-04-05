import React from "react";
import {connect} from "react-redux";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReduser";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer