import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import emailReducer from './email/email.reducer';
import { streamlineData } from './streamline/streamline.data';
// import streamlineReducer from './streamline/streamline.reducer';

export default combineReducers({
    emailAPIResponse: emailReducer,
    form: formReducer,
    streamlineData: streamlineData
});
