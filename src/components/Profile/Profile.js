import React from 'react'
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div>
                <ProfileInfo profile={props.profile}/>
            </div>
            <div>
                <MyPostContainer />
            </div>
        </div>
    )
}

export default Profile