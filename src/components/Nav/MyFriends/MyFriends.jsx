import React from 'react';
import s from './MyFriends.module.css'
import Friend from "./Friend/Friend";


const MyFriends = (props) => {

    let friendsElements =
        props.friends.map(f =>
            <Friend id={f.id}
                    friendName={f.friendName}/>);

    return (
        <div>
            <h3>Friends</h3>
            <div className={s.navFriends}>
                {friendsElements}
            </div>
        </div>
    )
};

export default MyFriends;