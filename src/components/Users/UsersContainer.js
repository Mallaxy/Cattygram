import React, {useEffect} from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  getUsers,
} from "../../redux/usersReduser";
import Users from "./Users";

const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize)
  },[])

    return (
      <div>
        <Users {...props} />
      </div>
    );
}

const mapStateToProps = (state) => {
  const {userData, isFetching, pageSize, totalUsersCount, currentPage} = state.usersPage
  return state.usersPage
  // return {
  //   usersData: state.usersPage.usersData,
  //   isFetching: state.usersPage.isFetching,
  //   pageSize: state.usersPage.pageSize,
  //   totalUsersCount: state.usersPage.totalUsersCount,
  //   currentPage: state.usersPage.currentPage,
  // };
};

export default connect(mapStateToProps, {
  follow,
  setCurrentPage,
  getUsers,
})(UsersContainer);
