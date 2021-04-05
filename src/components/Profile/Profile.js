import React from 'react'
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div>
                <ProfileInfo profile={props.profile}/>
            </div>
            <div>
                <MyPostsContainer/>
            </div>
        </div>
    )
}

export default Profile