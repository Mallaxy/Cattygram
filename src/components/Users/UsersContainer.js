import React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage, setUsers, toggleFetching} from "../../redux/usersReduser";
import Users from "./Users";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleFetching(false)
            this.props.setUsers(data)
        })
    }

    render() {
        return (
            <div>
                <Users {...this.props}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        isFetching: state.usersPage.isFetching,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

export default connect(mapStateToProps, {follow, setUsers, toggleFetching, setCurrentPage})(UsersContainer)