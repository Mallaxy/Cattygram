import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReduser";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";

const ProfileContainer = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) userId = props.userId || 16154
        props.getUserProfile(userId)
        props.getStatus(userId)
    }, [])

    return (
        <Profile {...props} profile={props.profile}/>
    )
}


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userId: state.auth.userId,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // AuthRedirect
)(ProfileContainer)
