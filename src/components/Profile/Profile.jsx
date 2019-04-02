import React from 'react';
import p from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className=''>
            <div>
                <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div>
                ava
                <img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681'></img>
            </div>
            <MyPosts />
      </div>
    )
    
}

export default Profile;