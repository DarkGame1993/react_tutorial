import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Post 1', likeCount: 1},
                {id: 2, message: 'Post 2', likeCount: 22},
                {id: 3, message: 'About your summer', likeCount: 99}
            ],
            newPostText: 'test post test state'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Vlad'},
                {id: 3, name: 'Bob'},
                {id: 4, name: 'Jack'},
                {id: 5, name: 'Dima'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'How is your project?'}
            ],
            newMessageBody: ""
        },
        sidebar: {
            friends: [
                {id: 1, friendName: 'Andrew'},
                {id: 2, friendName: 'Nata'},
                {id: 3, friendName: 'Tom'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State')
    },

    getState () {
        // debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;
// store - OOP