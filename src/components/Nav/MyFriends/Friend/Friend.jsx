import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.friendsItem}>
            <div className={s.friendsPhoto}>
                <img alt='Friends' src='https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg'/>
            </div>
            <div className={s.friendsName}>
                {props.friendName}
            </div>
        </div>
    )
};

export default Friend;
