import React from 'react'
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.profileHeader}>
                <img src="http://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png" alt="Ups...("/>
            </div>
            <div className={classes.person}>
                <div className={classes.personAvatar}>
                    <img
                        src="https://via.placeholder.com/150/771796"
                        alt=""/>
                </div>
                <div className={classes.personInfo}>
                    <h2 className={classes.personNickname}>Mallax</h2>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo