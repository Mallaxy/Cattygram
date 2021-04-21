import React, {useEffect} from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReduser";
import {usersAPI} from "../../api/api";

const HeaderContainer = (props) => {
    useEffect(() => {
        usersAPI.authUser().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                props.setAuthUserData(id, email, login)
            }
        })
    }, [])

        return (
            <Header {...props} />
        )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)