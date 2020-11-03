import emailAPI from './email.api';

export const sendEmail = (values) => async (dispatch) => {
    const response = await emailAPI.post('/sendform', values);

    dispatch({ type: 'SEND_EMAIL', payload: response });
};

export const selectProperty = (property) => {
    return { type: 'PROPERTY_SELECTED', payload: property };
};
