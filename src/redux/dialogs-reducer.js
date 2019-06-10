const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';//reset
            state.messages.push({id: 5, message: body});//push
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;