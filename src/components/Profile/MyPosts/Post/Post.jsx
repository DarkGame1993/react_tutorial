import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.item}>
            <img src='https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg'/>
            {props.massage}
            <div>
                <span>like {props.like}</span>
            </div>
        </div>         
    )
    
}

export default Post;