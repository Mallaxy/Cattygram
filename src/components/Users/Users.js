import React from 'react'
import s from './Users.module.css'
import User from "./User/User";
import Preloader from "../common/preloader/Preloader";
import Pagination from '@material-ui/lab/Pagination'
import {makeStyles} from "@material-ui/core";
import {usersAPI} from "../../api/api";

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

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const onPageChange = (pageNumber) => {
        props.setCurrentPage(pageNumber)
        props.toggleFetching(true)
        usersAPI.getUsers(pageNumber, props.pageSize).then(data => {
            props.toggleFetching(false)
            props.setUsers(data)
        })
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