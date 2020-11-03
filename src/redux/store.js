import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [reduxThunk];
const composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhanders(applyMiddleware(...middlewares)));
