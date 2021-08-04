import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postsData: [
        {id: 1, body: 'Artem', likeCount: 10},
        {id: 2, body: 'Kira', likeCount: 10000},
        {id: 3, body: 'Andrew', likeCount: 20},
        {id: 4, body: 'Max', likeCount: 30},
        {id: 5, body: 'John', likeCount: 50},
        {id: 6, body: 'Jesus', likeCount: 80}
    ],
    newPostText: '',
    profile: null,
    status: '',
}

const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 7, body: state.newPostText, likeCount: 1}
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.body
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, body: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const setProfileStatus = (status) => ({type: SET_STATUS, status})
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setProfileStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        } else alert(response.data.messages)
    })
}



export default profileReduser
