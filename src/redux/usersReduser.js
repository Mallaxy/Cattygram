const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
const GET_USERS = 'GET_USERS'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

let initialState = {
    usersData: [],
    followed: false,
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 4,
    isFetching: false,
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            debugger
            return {...state, usersData: [...action.usersData.items]};
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                }),
            }
        case GET_USERS: {
            let stateCopy = {...state, usersData: [...state.usersData]}
            stateCopy.usersData.unshift(action.users)
            return stateCopy
        }
        case TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}
export const follow = (userId) => ({type: FOLLOW, userId})
export const setUsers = (usersData) => ({type: SET_USERS, usersData})
export const getUsers = (users) => ({type: GET_USERS, users})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})

export default usersReduser