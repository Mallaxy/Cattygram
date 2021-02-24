import React from 'react'
import classes from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.profile__header}>
                <img src="http://parksadventure.com/wp-content/uploads/2017/10/header-image-1-2.png" alt="Ups...("/>
            </div>
            <div className={classes.person}>
                <div className={classes.person__avatar}>
                    <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/99/EP2402-CUSA05624_00-AV00000000000107/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720" alt=""/>
                </div>
                <div className={classes.person__info}>
                    <h2 className={classes.person__nickname}>Mallax</h2>
                </div>
            </div>
                <div className={classes.wall}>
                    <h2>My posts</h2>
                    <form action="">
                        <input type="text"/>
                        <button>Send</button>
                    </form>
                    <div className={classes.wall__post}>Post 1</div>
                    <div className={classes.wall__post}>Post 2</div>
                </div>
        </div>
    )
}

export default Profile