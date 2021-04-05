import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, setUsers, toggleFetching} from "../../redux/usersReduser";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import classes from './UsersContainer.module.css'


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        if (this.props.usersData.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data)
            })
        }
        this.props.toggleFetching(false)
    }

    render() {
        return (
            <div>
                <div className={classes.preloader}>
                    {this.props.isFetching ? <Preloader/> : null}
                </div>
                <Users {...this.props}/>
            </div>
        )

    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         getUsers: (users) =>
//             dispatch(getUsersAC(users))
//         },
//         toggleFetching: (isFetching) => {
//             dispatch(toggleFetchingAC(isFetching))
//         }
//     }
// }

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        isFetching: state.usersPage.isFetching,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

export default connect(mapStateToProps, {follow, setUsers, getUsers, toggleFetching})(UsersContainer)