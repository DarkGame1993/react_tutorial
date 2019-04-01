import React from 'react';
import p from './Post.module.css';

const Post = () => {
    return (
        <div className={p.item}>
            <img src='https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>         
    )
    
}

export default Post;