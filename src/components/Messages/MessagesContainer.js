import React from 'react'
import {connect} from "react-redux";
import Messages from "./Messages";
import {addMessageAC, onMessageChangeAC} from "../../redux/dialogsReduser";

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeAC(text))
        }
    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer