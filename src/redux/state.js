let store = {
    __state: {
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
    },
    getState () {
        return this._state = this;
    },
    __callSubscriber() {
        console.log('State')
    },
    addPost() {
        debugger;
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);//push
        this._state.profilePage.newPostText = '';//reset
        this.__callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.__callSubscriber(this._state);
    },
    subscribe(observer) {
        this.__callSubscriber = observer;
    }
};

//end
// export const addMessage = () => {
//     let newMessage = {
//         id:4,
//         message: state.messagePage.newMessageText
//     };
//     state.messagePage.messages.push(newMessage);
//     state.messagePage.newMessageText = '';//reset
//     rerenderEntireTree(state);
// };
//
// export const updateNewMessageText = (newText) => {
//     state.messagePage.newMessageText = newText;
//     rerenderEntireTree(state);
// };

export default store;
window.store = store;