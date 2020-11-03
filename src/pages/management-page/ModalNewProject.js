import '../contactFormPage/contactform.css';
import 'react-infinite-calendar/styles.css';

import React, { Component } from 'react';
import { Field } from 'redux-form';
// import { connect } from 'react-redux';
import { MDBRow, MDBCol, MDBBtn, MDBIcon, MDBModal } from 'mdbreact';
import InfiniteCalendar from 'react-infinite-calendar';
// import { format } from 'date-fns';

import EmailSubmitMessage from '../contactFormPage/EmailSubmitMessage';
// import { sendEmail } from '../../actions';
import Spinner from '../contactFormPage/Spinner';
import ReusableInput from '../contactFormPage/ReusableInput';
// import MinimizedFooter from '../homePage/MinimizedFooter';
// import NavBar from '../NavigationBar';

class NewProjectForm extends Component {
    state = {
        message: '',
        buildingTypes: ['Multi Family', 'Single Home', 'Commercial'],
        numberOfUnits: ['1 - 99', '100 - 199', '200 or More...'],
        numberOfFloors: ['1', '2', '3 or more...'],
        numberOfSitePhasing: ['1', '2', '3', '4 or more...'],
        numberOfIDFs: ['1', '2', '3', '4 or more...'],
        isLoading: false,
        modal: false,
        deadlineDate: '',
        options: [
            {
                text: 'Option 1',
                value: '1'
            },
            {
                text: 'Option 2',
                value: '2'
            },
            {
                text: 'Option 3',
                value: '3'
            }
        ]
    };

    render() {
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        return (
            <MDBRow>
                <MDBCol>
                    {/* <form name='contact' onSubmit={this.props.handleSubmit(this.onSubmit)}> */}
                    <form name='contact'>
                        <div>
                            <EmailSubmitMessage emailMessage={this.state.message} />
                            <Spinner isLoading={this.state.isLoading} />
                            <MDBRow>
                                <MDBCol md='6'>
                                    <Field name='name' label='Your name' icon='user' type='text' validatError='wrong' success='right' component={ReusableInput} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='4'>
                                    <Field name='email' label='Your email' icon='envelope' type='email' validatError='wrong' success='right' component={ReusableInput} />
                                </MDBCol>
                                <MDBCol md='4'>
                                    <Field name='phone' label='Your phone' icon='phone' type='text' validatError='wrong' success='right' component={ReusableInput} />
                                </MDBCol>
                                <MDBCol md='4'>
                                    <Field name='biddingDeadline' onFocus={this.toggle} currentValue={this.state.deadlineDate} component={this.renderInput} />
                                    <MDBModal isOpen={this.state.modal} toggle={this.toggle} size='sm'>
                                        <InfiniteCalendar width={400} height={600} selected={today} minDate={lastWeek} onSelect={this.handleSelectedDate} />
                                    </MDBModal>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='4'>
                                    <Field name='numberOfUnits' label='Number of Units' icon='question' type='text' validatError='wrong' success='right' component={ReusableInput} />
                                </MDBCol>

                                <MDBCol md='4'>
                                    <Field name='sitePhases' label='Site-Building phase' icon='question' type='text' validatError='wrong' success='right' component={ReusableInput} />
                                </MDBCol>
                                <MDBCol md='4'>
                                    <Field name='numberOfIDFs' label='Number of IDFs' icon='question' type='text' validatError='wrong' success='right' component={ReusableInput} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='12'>
                                    <Field name='message' label='Your message' icon='pencil-alt' type='textarea' rows='3' validatError='wrong' success='right' component={ReusableInput} />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol className='d-flex justify-content-between'>
                                    <MDBBtn
                                        size='sm'
                                        onClick={() => {
                                            this.props.history.push('/');
                                        }}>
                                        Cancel <MDBIcon far icon='times-circle' className='pr-2' />
                                    </MDBBtn>
                                    <MDBBtn size='sm' type='submit'>
                                        Send <MDBIcon icon='envelope' className='ml-2' />
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default NewProjectForm;
