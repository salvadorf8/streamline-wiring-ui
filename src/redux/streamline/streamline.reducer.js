// Currently not being used

import STREAMLINE_DATA from './streamline.data';

const INITIAL_STATE = {
    streamlineData: STREAMLINE_DATA
};

const streamlineReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default streamlineReducer;
