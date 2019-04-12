import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt='' src='https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg'/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>         
    )
    
}

export default Post;