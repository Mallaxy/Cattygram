import React, {useEffect} from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReduser";
import {withRouter} from 'react-router-dom'

const ProfileContainer = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) userId = props.myUser || 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            props.setUserProfile(response.data)
        })
    }, [])

    return (
        <Profile {...props} profile={props.profile}/>
    )
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    myUser: state.auth.userId
})
let WithRouterContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithRouterContainer)