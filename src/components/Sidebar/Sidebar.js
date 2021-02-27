import React from 'react'
import classes from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className={classes.sidebar}>
            <ul className={classes.sidebarList}>
                <li className={classes.sidebarItem}>
                    <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
                </li>
                <li className={classes.sidebarItem}>
                    <NavLink to="/messages" activeClassName={classes.activeLink}>Messages</NavLink>
                </li>
                <li className={classes.sidebarItem}>
                    <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
                </li>
                <li className={classes.sidebarItem}>
                    <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
                </li>
                <li className={classes.sidebarItem}>
                    <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
                </li>
            </ul>
            <div className={classes.friendsBlock}>
                <div className={classes.friendsTittle}>Friends</div>
                <div className={classes.friendsList}>
                    <div className={classes.friendsItem}>
                        <img className={classes.friendAvatar} src="https://via.placeholder.com/150/771796" alt=""/>
                        <div className={classes.friendName}>Andrew</div>
                    </div>
                    <div className={classes.friendsItem}>
                        <img className={classes.friendAvatar} src="https://via.placeholder.com/150/771796" alt=""/>
                        <div className={classes.friendName}>Andrew</div>
                    </div>
                    <div className={classes.friendsItem}>
                        <img className={classes.friendAvatar} src="https://via.placeholder.com/150/771796" alt=""/>
                        <div className={classes.friendName}>Andrew</div>
                    </div>
                    <div className={classes.friendsItem}>
                        <img className={classes.friendAvatar} src="https://via.placeholder.com/150/771796" alt=""/>
                        <div className={classes.friendName}>Andrew</div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Sidebar