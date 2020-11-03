import React from 'react';

const EmailSubmitMessage = (props) => {
    if (props.emailMessage === 'Message has been sent') {
        return (
            <div className='alert bg-success' role='alert'>
                <h4 className='alert-heading'>{props.emailMessage}</h4>
            </div>
        );
    } else {
        return (
            <div className='alert bg-error' role='alert'>
                <h4 className='alert-heading'>{props.emailMessage}</h4>
            </div>
        );
    }
};

EmailSubmitMessage.defaultProps = {
    emailMessage: null
};

export default EmailSubmitMessage;
