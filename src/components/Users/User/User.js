import React, {useState} from "react";
import s from './User.module.css'
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {usersAPI} from "../../../api/api";

const User = ({user, follow}) => {

    const [isFetching, setIsFetching] = useState(false)

    const handleClick = () => {
        setIsFetching(true)
        user.followed
            ? usersAPI.unfollowUser(user.id).then(resultCode => {
                setIsFetching(false)
                if (resultCode === 0) {follow(user.id)}
            })
            : usersAPI.followUser(user.id).then(resultCode => {
                setIsFetching(false)
                if (resultCode === 0) {follow(user.id)}
            })
    }

    return (
        <div className={s.wrapper}>
            <div className={s.item}>
                <NavLink to={'/profile/' + user.id} className={s.imageLink}>
                    <img
                        src={user.photos.large || 'https://cdn.iconscout.com/icon/premium/png-256-thumb/cat-29-81503.png'}
                        alt="Ups...("/>
                </NavLink>
                <Button size="large" variant="contained" color={user.followed ? "default" : "primary"}
                        onClick={() => handleClick()} className={s.button} disabled={isFetching}>
                    {user.followed ? "Unfollow" : "Follow"}
                </Button>
                <div className={s.info}>
                    <div>{user.name}</div>
                </div>
            </div>
        </div>
    )
}

export default User
