import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from "react-router-dom";
// import News from "./components/News/News";
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";
//import Friend from "./components/Nav/MyFriends/Friend/Friend";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header />
            {/*<Nav sidebar={props.state.sidebar}/>*/}
            <Nav />
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={ () => <Dialogs store={props.store} /> }/>

                <Route path='/profile'
                       render={ () => <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}/> }/>
                {/*<Route path='/news' render={ () => <News />}/>*/}
                {/*<Route path='/music' render={ () => <Music />}/>*/}
                {/*<Route path='/settings' render={ () => <Settings />}/>*/}
            </div>
        </div>
    );
};

export default App;
