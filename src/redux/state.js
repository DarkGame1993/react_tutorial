let state = {
    profilePage: {
        posts: [
            {id: 1, massage: 'Post 1', likeCount: 1},
            {id: 2, massage: 'Post 2', likeCount: 22},
            {id: 3, massage: 'About your summer', likeCount: 99}
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

export default state;