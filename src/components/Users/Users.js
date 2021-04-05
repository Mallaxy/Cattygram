import React from 'react'
import classes from './Users.module.css'
import User from "./User/User";


const Users = (props) => {
    debugger
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={classes.wrapper}>
            <div>
                {pages.map(p => <span className={props.currentPage === p && classes.selectedPage}>{p}</span>)}
            </div>
            {props.usersData.map(u  => <User user={u} follow={props.follow} key={u.id}/>)}
        </div>
    )
}

export default Users