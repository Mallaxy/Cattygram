import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthUserData} from "../../redux/authReduser";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
            headers: {'API-KEY': '6d37f9b3-5211-4067-a35f-17f090789f82'}
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)