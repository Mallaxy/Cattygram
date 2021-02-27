import React from 'react'
import classes from './Messages.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Messages = (props) => {
    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messagesData.map(m => <Message text={m.text}
                                                                      avatar='https://via.placeholder.com/150/771796'/>)
    return (
        <div>
            <h1>Dialogs</h1>
            <div className={classes.content}>
                <div className={classes.dialogs}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Messages