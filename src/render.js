import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                updateNewMessageText={updateNewMessageText}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
};