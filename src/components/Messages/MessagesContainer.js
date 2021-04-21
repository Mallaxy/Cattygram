import {connect} from "react-redux";
import Messages from "./Messages";
import {addMessage, onMessageChange} from "../../redux/dialogsReduser";


let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData
    }
}

const MessagesContainer = connect(mapStateToProps, {addMessage, onMessageChange})(Messages)

export default MessagesContainer