import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBBtn, MDBIcon } from 'mdbreact';

import './header.styles.css';

class Header extends Component {
    state = { isOpen: false };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <MDBNavbar id='mainNav' color='elegant-color-dark' dark expand='md' fixed={this.props.isFixed} scrolling transparent>
                <MDBNavbarBrand>
                    <MDBNavLink exact to='/'>
                        <h4 className='h4-responsive'>STREAMLINE WIRING</h4>
                    </MDBNavLink>
                </MDBNavbarBrand>

                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem className='align-self-center'>
                            <MDBNavLink exact to='/' onClick={this.toggleCollapse}>
                                Home
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem className='align-self-center'>
                            <MDBNavLink to='/contact/new' onClick={this.toggleCollapse}>
                                Contact Us
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBBtn size='sm' href='tel: 972-302-9892' className='h-auto'>
                            <MDBIcon icon='phone' className='pr-2' />
                            972 302 9892
                        </MDBBtn>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Header;
