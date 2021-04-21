const FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    usersData: [],
    pageSize: 10,
    totalUsersCount: 40,
    currentPage: 1,
    isFetching: true,
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, usersData: [...action.usersData.items], totalUsersCount: action.usersData.totalCount};
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
        case TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state
    }
}
export const follow = (userId) => ({type: FOLLOW, userId})
export const setUsers = (usersData) => ({type: SET_USERS, usersData})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})

export default usersReduser