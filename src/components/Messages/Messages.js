import React from 'react'
import s from './Messages.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Messages = (props) => {
    const dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.messagesData.map(m => <Message text={m.text}
                                                                avatar='https://via.placeholder.com/150/771796'/>)
    const newMessageElement = React.createRef()
    const addMessage = () => {
        props.addMessage()
    }
    const onMessageChange = () => {
        const text = newMessageElement.current.value
        props.onMessageChange(text)
    }
    return (
        <div className={s.main}>
            <h1>Dialogs</h1>
            <div className={s.content}>
                <div className={s.dialogs}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    <div>
                        <textarea ref={newMessageElement}
                                  value={props.newMessageText}
                                  onChange={onMessageChange}/>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages
