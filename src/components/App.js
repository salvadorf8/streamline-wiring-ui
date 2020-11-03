import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBRow, MDBCol } from 'mdbreact';

import HomePage from '../pages/home-page/home-page.component';
import ContactForm from '../pages/contact-page/contact-form.component';
import ProjectInfo from './project-info/project-info.component.js';
import Login from '../pages/management-page/Login';
import DrawSchedule from '../pages/management-page/DrawSchedule';
import UnderConstruction from './under-construction/under-construction.component';

import { selectProperty } from '../redux/email/email.action';

class App extends React.Component {
    renderApartmentLinks = () => {
        const { apartments } = this.props;

        return apartments.map((apartment) => {
            if (apartment.isUnderConstruction) {
                return <Route key={apartment.id} path='/underconstruction' exact component={UnderConstruction} />;
            }

            return <Route key={apartment.id} path={`/project/:id`} exact component={ProjectInfo} />;
        });
    };

    render() {
        return (
            <BrowserRouter>
                <MDBRow>
                    <MDBCol>
                        <Switch>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/contact/new' component={ContactForm} />
                            <Route path='/login' component={Login} />
                            <Route path='/manager/drawschedule/:id' component={DrawSchedule} />
                            {this.renderApartmentLinks()}
                        </Switch>
                    </MDBCol>
                </MDBRow>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return { apartments: Object.values(state.streamlineData) };
};

export default connect(mapStateToProps, { selectProperty })(App);
