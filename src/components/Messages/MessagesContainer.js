import {connect} from "react-redux";
import Messages from "./Messages";
import {addMessage, onMessageChange} from "../../redux/dialogsReduser";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, onMessageChange}),
    AuthRedirect
)(Messages)
