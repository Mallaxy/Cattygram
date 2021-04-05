const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Kira'},
        {id: 3, name: 'Andrew'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'John'},
        {id: 6, name: 'Jesus'},
    ],
    messagesData: [
        {id: 1, text: 'Artem'},
        {id: 2, text: 'Kira'},
        {id: 3, text: 'Andrew'},
        {id: 4, text: 'Max'},
        {id: 5, text: 'John'},
        {id: 6, text: 'Jesus'}
    ],
    newMessageText: 'Hello=3',
}

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 8, text: state.newMessageText}
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: '',
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            };
        default:
            return state
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE})
export const onMessageChangeAC = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})

export default dialogsReduser