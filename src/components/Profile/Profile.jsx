import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}/>
        </div>
    )
};

export default Profile;