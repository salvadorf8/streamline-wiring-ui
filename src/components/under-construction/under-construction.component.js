import './under-construction.styles.css';

import React from 'react';
import { MDBCol, MDBRow, MDBView, MDBMask, MDBContainer } from 'mdbreact';
import Header from '../header/header.component';
import MinimizedFooter from '../footer/mini-footer.component';

class UnderConstruction extends React.Component {
    state = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    componentDidMount = () => {
        var future = new Date(2020, 1, 11, 12);
        var today = new Date();

        var delta = Math.abs((future - today) / 1000);
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        var seconds = delta;

        console.log(seconds);
        console.log(minutes);
        console.log(hours);
        console.log(days);

        this.setState({ days: days, hours: hours, minutes: minutes, seconds: Math.round(seconds) });

        this.myInterval = setInterval(() => {
            const { days, hours, minutes, seconds } = this.state;

            if (seconds === 0) {
                if (minutes === 0) {
                    if (hours === 0) {
                        if (days === 0) {
                            clearInterval(this.myInterval);
                        } else {
                            this.setState(({ days }) => ({ days: days - 1 }));
                            this.setState({ hours: 23 });
                            this.setState({ minutes: 59 });
                            this.setState({ seconds: 59 });
                        }
                    } else {
                        this.setState(({ hours }) => ({ hours: hours - 1 }));
                        this.setState({ minutes: 59 });
                        this.setState({ seconds: 59 });
                    }
                } else {
                    this.setState(({ minutes }) => ({ minutes: minutes - 1 }));
                    this.setState({ seconds: 59 });
                }
            } else {
                this.setState(({ seconds }) => ({ seconds: seconds - 1 }));
            }
        }, 1000);
    };

    render() {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <div id='underconstruction'>
                <Header isFixed='top' />
                <MDBView>
                    <MDBMask className='d-flex justify-content-center align-items-center' overlay='stylish-strong'>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol>
                                    <div className='text-center mx-auto white-text'>
                                        <h1 className='display-4 mb-4'>
                                            <strong>Coming Soon!</strong>
                                        </h1>

                                        <h4 className='mb-4'>
                                            <strong>Working hard to finish the development of this page. </strong>
                                        </h4>
                                        <MDBRow className='mb-5'>
                                            <MDBCol className='border border-light my-5 py-2 mx-4 z-depth-5'>{days < 2 ? `${days} day` : `${days} days`}</MDBCol>
                                            <MDBCol className='border border-light my-5 py-2 mx-4 z-depth-5'>{hours < 10 ? `0${hours} hours` : `${hours} hour`}</MDBCol>
                                            <MDBCol className='border border-light my-5 py-2 mx-4 z-depth-5'>{minutes < 10 ? `0${minutes} minutes` : `${minutes} minute`}</MDBCol>
                                            <MDBCol className='border border-light my-5 py-2 mx-4 z-depth-5'>{seconds < 10 ? `0${seconds} seconds` : `${seconds} seconds`}</MDBCol>
                                        </MDBRow>

                                        <h4 className='mb-4 d-none d-md-block'>
                                            <strong></strong>
                                        </h4>
                                        {/* <MDBBtn className='z-depth-5 myColor' size='sm'>
                                            Return to home
                                        </MDBBtn> */}
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>
                <MinimizedFooter />
            </div>
        );
    }
}

export default UnderConstruction;
