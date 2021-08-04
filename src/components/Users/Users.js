import React, {useEffect} from 'react'
import s from './Users.module.css'
import User from "./User/User";
import Preloader from "../common/preloader/Preloader";
import Pagination from '@material-ui/lab/Pagination'
import {makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {follow, getUsers, setCurrentPage} from "../../redux/usersReduser";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


const Users = (props) => {
    const classes = useStyles()
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const onPageChange = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        props.getUsers(pageNumber,props.pageSize)
    }

    return (
        <div className={classes.root}>
            <div className={s.navigation}>
                <Pagination count={pagesCount} color="standard"
                            onChange={(event, page) => onPageChange(page)} size="medium"/>
                <div className={s.preloader}>
                    {props.isFetching ? <Preloader/> : null}
                </div>
            </div>
            {props.usersData.map(u => <User user={u} follow={props.follow} key={u.id}/>)}
        </div>
    )
}

export default Users

// const Users = () => {
//     const classes = useStyles()
//     const {usersData, isFetching, pageSize, totalUsersCount, currentPage} = useSelector(state => ({
//         usersData: state.usersPage.usersData,
//         isFetching: state.usersPage.isFetching,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//     }))
//     const dispatch = useDispatch()
//
//     useEffect(() => {
//         dispatch(getUsers(currentPage, pageSize))
//     },[])
//
//     const pagesCount = Math.ceil(totalUsersCount / pageSize)
//
//     const onPageChange = async(pageNumber) => {
//         await dispatch(setCurrentPage(pageNumber))
//         await dispatch(getUsers(pageNumber, pageSize))
//     }
//
//     return (
//         <div className={classes.root}>
//             <div className={s.navigation}>
//                 <Pagination count={pagesCount} color="standard"
//                             onChange={(event, page) => onPageChange(page)} size="medium"/>
//                 <div className={s.preloader}>
//                     {isFetching ? <Preloader/> : null}
//                 </div>
//             </div>
//             {usersData.map(u => <User user={u} follow={dispatch(follow(u.id))} key={u.id}/>)}
//         </div>
//     )
// }
