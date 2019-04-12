import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import MyFriends from "./MyFriends/MyFriends";

const Nav = (props) => {
    // debugger;
    return (
        <div className={s.nav}>
            <nav>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to='/profile'
                             activeClassName={s.activeLink}>
                        Profile
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to='/dialogs'
                        activeClassName={s.activeLink}>
                        Messages
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to='/news'
                        activeClassName={s.activeLink}>
                        News
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to='/music'
                        activeClassName={s.activeLink}>
                        Music
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to='/settings'
                        activeClassName={s.activeLink}>
                        Settings
                    </NavLink>
                </div>
            </nav>
            <div>
                <MyFriends friends={props.state.friends}/>
            </div>
        </div>
    )
};

export default Nav;