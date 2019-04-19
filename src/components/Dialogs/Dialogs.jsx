import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d =>
            <DialogItem
                id={d.id}
                name={d.name}
            />);
    let messagesElements = props.messages.map(m =>
            <Message
                message={m.message}
                 id={m.id}
            />);

    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        ref={newMessageElement}
                        onChange={onMessageChange}
                        value={props.newMessageText}/>
                </div>
                <div>
                    <button
                        onClick={addMessage}>Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;