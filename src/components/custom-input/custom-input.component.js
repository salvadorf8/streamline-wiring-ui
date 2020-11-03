import React from 'react';
import { MDBInput } from 'mdbreact';

const ReusableInput = ({ input, id, label, icon, type, validateError, success, rows }) => (
    <div>
        <MDBInput id={id} label={label} icon={icon} group type={type} rows={rows} validate error={validateError} success={success} {...input} />
        {/* onFocus={props.onFocus}  */}
    </div>
);

export default ReusableInput;
