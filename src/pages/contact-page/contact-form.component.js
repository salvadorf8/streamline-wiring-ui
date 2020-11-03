import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput, MDBModal } from 'mdbreact';
import InfiniteCalendar from 'react-infinite-calendar';
import { format } from 'date-fns';
import 'react-infinite-calendar/styles.css';

import EmailResultMessage from '../../components/email-result-message/email-result-message.component';
import Spinner from '../../components/spinner/spinner.component';
import ReusableInput from '../../components/custom-input/custom-input.component';
import MinimizedFooter from '../../components/footer/mini-footer.component';
import Header from '../../components/header/header.component';
import { sendEmail } from '../../redux/email/email.action';
import { formData } from './contact-form.data';

import './contact-form.styles.css';

class ContactForm extends Component {
    state = formData;

    onSubmit = async (formValues) => {
        this.setState({ isLoading: true });

        try {
            await this.props.sendEmail(formValues);
        } catch (error) {
            this.setState({ message: 'Network Error, try again later', isLoading: false });
            return;
        }

        this.setState({ message: this.props.responseMessage, isLoading: false });
    };

    toggleModal = () => {
        this.setState({ modal: !this.state.modal });
    };

    handleSelectedDate = (newDate) => {
        this.setState({ deadlineDate: format(newDate, 'ddd, MMM DD YYYY'), modal: !this.state.modal });
    };

    renderInput = ({ input, currentValue }) => {
        return (
            <div>
                <MDBInput label='Bidding deadline' icon='calendar' type='text' onChange={input.onChange(currentValue)} {...input} value={currentValue} />
            </div>
        );
    };

    render() {
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

        if (this.state.isLoading) {
            return (
                <div>
                    <Header />
                    <Spinner />
                    <MinimizedFooter />
                </div>
            );
        }

        return (
            <div id='contactForm'>
                <Header />
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <form name='contact' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <div>
                                    <EmailResultMessage emailMessage={this.state.message} />
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
                                            <Field name='biddingDeadline' onFocus={this.toggleModal} currentValue={this.state.deadlineDate} component={this.renderInput} />
                                            <MDBModal isOpen={this.state.modal} toggle={this.toggleModal} size='sm'>
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
                </MDBContainer>
                <MinimizedFooter />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { responseMessage: state.emailAPIResponse.msg };
}

export default reduxForm({
    form: 'contact'
})(connect(mapStateToProps, { sendEmail })(ContactForm));
