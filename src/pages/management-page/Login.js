import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon, MDBCard, MDBProgress, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput } from 'mdbreact';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header.component';
// import NewProjectForm from './ModalNewProject';

class Login extends React.Component {
    state = {
        activeItemJustified: '1',
        modal: false,
        projectId: 'modera'
    };

    toggleJustified = (tab) => (e) => {
        if (this.state.activeItemJustified !== tab) {
            this.setState({
                activeItemJustified: tab
            });
        }
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
        return (
            <div className='white-text'>
                <Header />
                <MDBContainer className='white-text' fluid style={{ marginTop: '15px' }}>
                    <MDBNav tabs className='nav-justified'>
                        <MDBNavItem>2020 Insights</MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to='#' active={this.state.activeItemJustified === '1'} onClick={this.toggleJustified('1')} role='tab' className='white-text'>
                                <MDBIcon far icon='calendar-check' className='pr-3' /> Draw Schedule
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to='#' active={this.state.activeItemJustified === '2'} onClick={this.toggleJustified('2')} role='tab' className='white-text'>
                                <MDBIcon fas icon='warehouse' className='pr-3' /> Inventory
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to='#' active={this.state.activeItemJustified === '3'} onClick={this.toggleJustified('3')} role='tab' className='white-text'>
                                <MDBIcon fas icon='dollar-sign' className='pr-3' /> Revenue
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent className='card' activeItem={this.state.activeItemJustified} style={{ backgroundColor: '#212121' }}>
                        <MDBTabPane tabId='1' role='tabpanel'>
                            <MDBCol style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                                <Link to={`/manager/drawschedule/${this.state.projectId}`}>
                                    <MDBCard style={{ width: '100%', backgroundColor: '#212121' }}>
                                        <MDBCardBody>
                                            <MDBRow>
                                                <MDBCol md='2'>
                                                    <MDBCardTitle>Modera</MDBCardTitle>
                                                    <MDBProgress value={25} className='my-2' />
                                                </MDBCol>
                                                <MDBCol md='10'>
                                                    <MDBCardText>
                                                        <MDBRow>
                                                            <MDBCol lg='3'>
                                                                <MDBRow>
                                                                    <MDBCol>Contract Amt:</MDBCol>
                                                                    <MDBCol> $250,000</MDBCol>
                                                                </MDBRow>
                                                                <MDBRow>
                                                                    <MDBCol>Backlog Amt:</MDBCol>
                                                                    <MDBCol> $200,000</MDBCol>
                                                                </MDBRow>
                                                                <MDBRow>
                                                                    <MDBCol>Liabilities Amt:</MDBCol>
                                                                    <MDBCol> $50,000</MDBCol>
                                                                </MDBRow>
                                                            </MDBCol>
                                                            <MDBCol lg='3'>
                                                                <MDBRow>
                                                                    <MDBCol>Misc Expences:</MDBCol>
                                                                    <MDBCol>$5,000</MDBCol>
                                                                </MDBRow>
                                                                <MDBRow>
                                                                    <MDBCol>Revenue:</MDBCol>
                                                                    <MDBCol> $200,000</MDBCol>
                                                                </MDBRow>
                                                            </MDBCol>
                                                            <MDBCol lg='4'>
                                                                <MDBRow>
                                                                    <MDBCol>Draw Number:</MDBCol>
                                                                    <MDBCol>1</MDBCol>
                                                                </MDBRow>
                                                                <MDBRow>
                                                                    <MDBCol>Last Submitted:</MDBCol>
                                                                    <MDBCol>1 Jan 2020</MDBCol>
                                                                </MDBRow>
                                                                <MDBRow>
                                                                    <MDBCol>Created On:</MDBCol>
                                                                    <MDBCol>1 Jan 2020</MDBCol>
                                                                </MDBRow>
                                                                <MDBRow>
                                                                    <MDBCol>Updated On:</MDBCol>
                                                                    <MDBCol>1 Jan 2020</MDBCol>
                                                                </MDBRow>
                                                            </MDBCol>
                                                            <MDBCol lg='2'>
                                                                <MDBRow>
                                                                    <MDBBtn outline color='warning' size='sm'>
                                                                        Archive
                                                                    </MDBBtn>
                                                                    <MDBBtn outline color='danger' size='sm'>
                                                                        Delete
                                                                    </MDBBtn>
                                                                </MDBRow>
                                                            </MDBCol>
                                                        </MDBRow>
                                                        <MDBRow></MDBRow>
                                                    </MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                </Link>
                                <MDBRow>
                                    <MDBCol size='12'>
                                        <div className='d-flex justify-content-end'>
                                            <MDBBtn href='#' size='sm' onClick={this.toggle}>
                                                Add New Project
                                            </MDBBtn>
                                            <MDBBtn href='#' size='sm'>
                                                Return
                                            </MDBBtn>
                                            <MDBModal isOpen={this.state.modal} toggle={this.toggle} size='lg'>
                                                <form name='project'>
                                                    <MDBModalHeader toggle={this.toggle} style={{ backgroundColor: '#212121' }}>
                                                        New Project Form
                                                    </MDBModalHeader>
                                                    <MDBModalBody style={{ backgroundColor: '#212121' }}>
                                                        <MDBContainer>
                                                            <MDBRow>
                                                                <MDBCol>
                                                                    <MDBInput label='Project Name' />
                                                                    <MDBInput label='Start Date' />
                                                                    <MDBInput label='Contract Number' />
                                                                    <MDBInput label='Trade' />
                                                                    <MDBInput label='Total Contract Amount' />
                                                                    <MDBInput label='Builders' />
                                                                    <MDBInput label='Notes' />
                                                                </MDBCol>
                                                            </MDBRow>
                                                        </MDBContainer>
                                                    </MDBModalBody>
                                                    <MDBModalFooter style={{ backgroundColor: '#212121' }}>
                                                        <MDBBtn color='secondary' onClick={this.toggle} size='sm'>
                                                            Close
                                                        </MDBBtn>
                                                        <MDBBtn color='primary' size='sm'>
                                                            Save changes
                                                        </MDBBtn>
                                                    </MDBModalFooter>
                                                </form>
                                            </MDBModal>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBTabPane>
                        <MDBTabPane tabId='2' role='tabpanel'>
                            <p className='mt-2'>
                                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft
                                beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
                                sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
                            </p>
                        </MDBTabPane>
                        <MDBTabPane tabId='3' role='tabpanel'>
                            <p className='mt-2'>
                                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica.
                                DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown.
                                Pitchfork sustainable tofu synth chambray yr.
                            </p>
                        </MDBTabPane>
                    </MDBTabContent>
                </MDBContainer>
            </div>
        );
    }
}

export default Login;
