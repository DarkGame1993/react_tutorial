import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p =>
            <Post id={p.id}
                  message={p.message}
                  likeCount={p.likeCount}/>);

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    //console.log('dlkfsdkmfksdmf', postsElements);
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        onChange={onPostChange}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button
                        onClick={ addPost }>add post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )

};

export default MyPosts;