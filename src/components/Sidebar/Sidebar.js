import React from 'react'
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <nav className={s.sidebar}>
            <div className={s.sidebarItems}>
                <ul className={s.sidebarList}>
                    <li className={s.sidebarItem}>
                        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                    </li>
                    <li className={s.sidebarItem}>
                        <NavLink to="/messages" activeClassName={s.activeLink}>Messages</NavLink>
                    </li>
                    <li className={s.sidebarItem}>
                        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                    </li>
                    <li className={s.sidebarItem}>
                        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                    </li>
                    <li className={s.sidebarItem}>
                        <NavLink to="/users" activeClassName={s.activeLink}>Find Users</NavLink>
                    </li>
                    <li className={s.sidebarItem}>
                        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                    </li>
                </ul>
                <div className={s.friendsBlock}>
                    <div className={s.friendsTittle}>Friends</div>
                    <div className={s.friendsList}>
                        <div className={s.friendsItem}>
                            <img className={s.friendAvatar} src="https://via.placeholder.com/150/771796" alt=""/>
                            <div className={s.friendName}>Andrew</div>
                        </div>
                        <div className={s.friendsItem}>
                            <img className={s.friendAvatar} src="https://via.placeholder.com/150/771796" alt=""/>
                            <div className={s.friendName}>Max</div>
                        </div>
                        <div className={s.friendsItem}>
                            <img className={s.friendAvatar} src="https://via.placeholder.com/150/771796" alt=""/>
                            <div className={s.friendName}>Kolya</div>
                        </div>
                        <div className={s.friendsItem}>
                            <img className={s.friendAvatar} src="https://via.placeholder.com/150/771796" alt=""/>
                            <div className={s.friendName}>Roma</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Sidebar