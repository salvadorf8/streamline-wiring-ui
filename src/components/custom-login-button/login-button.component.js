import React from 'react';
import { MDBIcon } from 'mdbreact';
import styled from 'styled-components';

const InitialLabel = styled.div`
    font-size: 11px;
    text-align: center;
`;

const Label = styled.div`
    text-align: center;
`;

export default function LoginButton() {
    return (
        <div className='d-flex'>
            <div className='d-flex align-items-center pr-2'>
                <MDBIcon fab icon='google' />
            </div>
            <div>
                <InitialLabel>Management</InitialLabel>
                <Label>Google Login</Label>
            </div>
        </div>
    );
}
