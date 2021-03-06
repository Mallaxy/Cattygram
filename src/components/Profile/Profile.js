import React from 'react'
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <MyPosts profilePage={props.profilePage}
                         dispatch={props.dispatch}/>
            </div>
        </div>
    )
}

export default Profile