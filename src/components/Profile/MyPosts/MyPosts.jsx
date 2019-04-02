import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>add post</button>
                </div>
                <div className={p.post}>
                    <Post massage='Post 1' like ='1'/>
                    <Post massage='Post 2' like ='22'/>
                </div> 
            </div> 
    )
    
}

export default MyPosts;