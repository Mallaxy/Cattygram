import React from 'react'
import classes from './Messages.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogsReduser";

const Messages = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.dialogsPage.messagesData.map(m => <Message text={m.text}
                                                                            avatar='https://via.placeholder.com/150/771796'/>)
    let newMessageElement = React.createRef()
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.dispatch(onMessageChangeActionCreator(text))
    }
    return (
        <div className={classes.main}>
            <h1>Dialogs</h1>
            <div className={classes.content}>
                <div className={classes.dialogs}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                    <div>
                        <textarea ref={newMessageElement}
                                  value={props.dialogsPage.newMessageText}
                                  onChange={onMessageChange}/>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages