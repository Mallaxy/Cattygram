import React, {useEffect} from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReduser";

const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthUserData()
    }, [])

        return (
            <Header {...props} />
        )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)
