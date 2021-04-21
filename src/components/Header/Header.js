import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <img src="https://freesvg.org/img/1581931068cat-animal-outline-freesvg.org.png" alt="Ups...("/>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>

    )
}

export default Header