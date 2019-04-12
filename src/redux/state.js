let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Post 1', likeCount: 1},
            {id: 2, message: 'Post 2', likeCount: 22},
            {id: 3, message: 'About your summer', likeCount: 99}
        ]
    },
    messagesPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'How is your project?'}
        ],
        dialogs: [
            {id: 1, name: 'Valera'},
            {id: 2, name: 'Vlad'},
            {id: 3, name: 'Bob'},
            {id: 4, name: 'Jack'},
            {id: 5, name: 'Dima'}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, friendName: 'Andrew'},
            {id: 2, friendName: 'Nata'},
            {id: 3, friendName: 'Tom'}
        ]
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);
}


export default state;