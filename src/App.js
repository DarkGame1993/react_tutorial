import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import Friend from "./components/Nav/MyFriends/Friend/Friend";

const App = (props) => {
    //console.log(Dialogs)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () =>
                        <Profile
                            updateNewPostText={props.updateNewPostText}
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}/>}/>
                    <Route exact path='/dialogs' render={ () =>
                        <Dialogs
                            updateNewMessageText={props.updateNewMessageText}
                            // messages={props.state.messagesPage.messages}
                            messagePage={props.state.messagePage}
                            addMessage={props.addMessage}/>}/>
                    <Route path='/news' render={ () => <News />}/>
                    <Route path='/music' render={ () => <Music />}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
