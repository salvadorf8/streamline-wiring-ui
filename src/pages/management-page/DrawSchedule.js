import React from 'react';
import { MDBCard, MDBCardHeader, MDBCardBody } from 'mdbreact';

class DrawSchedule extends React.Component {
    state = {
        columns: ['Person Name', 'Age', 'Company Name', 'Country', 'City'],
        data: [
            ['Aurelia Vega', 30, 'Deepends', 'Spain', 'Madrid'],
            ['Guerra Cortez', 45, 'Insectus', 'USA', 'San Francisco'],
            ['Guadalupe House', 26, 'Isotronic', 'Germany', 'Frankfurt am Main'],
            ['Elisa Gallagher', 31, 'Portica', 'United Kingdom', 'London']
        ]
    };

    render() {
        return (
            <MDBCard>
                <MDBCardHeader tag='h3' className='text-center font-weight-bold text-uppercase py-4'>
                    Dashboard Table Editable
                </MDBCardHeader>
                <MDBCardBody></MDBCardBody>
            </MDBCard>
        );
    }
}

export default DrawSchedule;
