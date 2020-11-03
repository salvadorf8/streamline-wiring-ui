export default (state = {}, action) => {
    switch (action.type) {
        case 'SEND_EMAIL':
            return action.payload.data;
        default:
            return state;
    }
};
