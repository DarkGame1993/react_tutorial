import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {id: 1, massage:'Post 1', likeCount: 1},
        {id: 2, massage:'Post 2', likeCount: 22},
        {id: 3, massage:'About your summer', likeCount: 99}
    ];

    let postsElements = posts.map(p => <Post id={p.id} massage={p.massage} likeCount={p.likeCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

};

export default MyPosts;