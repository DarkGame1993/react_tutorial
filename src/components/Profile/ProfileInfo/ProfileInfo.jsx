import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.slider}>
                <img alt='' src='https://cdn.allwallpaper.in/wallpapers/1920x1080/9969/mountains-clouds-landscapes-lakes-1920x1080-wallpaper.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.photoProfile}>
                    <img alt='' src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681'/>
                </div>
                <div className={s.aboutProfile}>
                    <div><h2>Ben Gungster</h2></div>
                    <div>Date of Birth: 2 january</div>
                    <div>City: Minsk</div>
                    <div>Education: BSU '</div>
                    <div>Web Site: <a href="https://samuraijs.com">https://samuraijs.com</a></div>
                </div>
            </div>
      </div>
    )
    
}

export default ProfileInfo;