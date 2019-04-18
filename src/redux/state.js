import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Post 1', likeCount: 1},
            {id: 2, message: 'Post 2', likeCount: 22},
            {id: 3, message: 'About your summer', likeCount: 99}
        ],
        newPostText: 'test post test state'
    },
    messagePage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'How is your project?'}
        ],
        newMessageText: 'dialog dialog text',
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

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);//push
    state.profilePage.newPostText = '';//reset
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export let addMessage = () => {
    let newMessage = {
        id:4,
        message: state.messagePage.newMessageText
    };
    state.messagePage.messages.push(newMessage);
    state.messagePage.newMessageText = '';//reset
    rerenderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
    state.messagePage.newMessageText = newText;
    rerenderEntireTree(state);
};

export default state;