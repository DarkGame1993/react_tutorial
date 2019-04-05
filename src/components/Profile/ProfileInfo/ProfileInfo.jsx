import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.slider}>
                <img src='https://cdn.allwallpaper.in/wallpapers/1920x1080/9969/mountains-clouds-landscapes-lakes-1920x1080-wallpaper.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava
                <img src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681'></img>
            </div>
      </div>
    )
    
}

export default ProfileInfo;