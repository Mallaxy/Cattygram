import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, text: 'Artem', likeCount: 10},
                {id: 2, text: 'Kira', likeCount: 15},
                {id: 3, text: 'Andrew', likeCount: 20},
                {id: 4, text: 'Max', likeCount: 30},
                {id: 5, text: 'John', likeCount: 50},
                {id: 6, text: 'Jesus', likeCount: 80}
            ],
            newPostText: 'Hello=3',
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    },
}

export default store