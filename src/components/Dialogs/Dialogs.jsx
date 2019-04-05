import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogs = [
        {id: 1, name:'Valera'},
        {id: 2, name:'Vlad'},
        {id: 3, name:'Bob'},
        {id: 4, name:'Jack'},
        {id: 5, name:'Dima'}
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi'},
        {id: 3, message:'How is your project?'}
    ];

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;