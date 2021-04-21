import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPost, updateNewPostText} from "../../../redux/profileReduser";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

export const MyPostContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts)
