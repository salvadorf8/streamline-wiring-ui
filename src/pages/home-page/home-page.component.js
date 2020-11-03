import './home-page.styles.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import MainView from '../../components/main-view/main-view.component';
import Footer from '../../components/footer/footer.component';

// TODO - finish converting this component styling to MDBreact
class HomePage extends Component {
    constructImageLinks = () => {
        return this.props.apartments.map((apartment) => {
            if (apartment.isUnderConstruction) {
                return (
                    <div className='col-lg-4 col-sm-6' key={apartment.id}>
                        <Link to='/underconstruction/'>
                            <div className='portfolio-box'>
                                <img className='img-fluid h-0 d-inline-block' src={require(`../../assets/img/portfolio/thumbnails/${apartment.mainImage}.png`)} alt='' />
                                <div className='portfolio-box-caption'>
                                    <div className='portfolio-box-caption-content'>
                                        <div className='project-category text-faded'>Click</div>
                                        <div className='project-name'>{apartment.aptName}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            }
            return (
                <div className='col-lg-4 col-sm-6' key={apartment.id}>
                    <Link to={`/project/${apartment.id}`}>
                        <div className='portfolio-box'>
                            <img className='img-fluid h-0 d-inline-block' src={require(`../../assets/img/portfolio/thumbnails/${apartment.mainImage}.jpg`)} alt='' />
                            <div className='portfolio-box-caption'>
                                <div className='portfolio-box-caption-content'>
                                    <div className='project-category text-faded'>Click for more info</div>
                                    <div className='project-name'>{apartment.aptName}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });
    };

    render() {
        return (
            <div id='homepage'>
                <MainView />
                <section>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading'>Services</h2>
                                <hr className='my-1' />
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-6 text-center'>
                                <div className='service-box mt-5 mx-auto'>
                                    <i className='text-primary mb-3 sr-icons' />
                                    <h3 className='mb-3'>Voice</h3>
                                    <p className='mb-0'>Traditional landline or VoIP, communication installation has been a needed standard where our professionals are here to install to code</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 text-center'>
                                <div className='service-box mt-5 mx-auto'>
                                    <i className='text-primary mb-3 sr-icons' />
                                    <h3 className='mb-3'>Video</h3>
                                    <p className='mb-0'>Looking to add Audio and Visual? We have built a huge amount of experience within all Amenity areas to deliver relaxation, entertainment, and work environments.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 text-center'>
                                <div className='service-box mt-5 mx-auto'>
                                    <i className='text-primary mb-3 sr-icons' />
                                    <h3 className='mb-3'>Data</h3>
                                    <p className='mb-0'>Structuring low-voltage wiring is the backbone of any network infrastructure. Our team will home run connectivity capability where desired.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-6 text-center'>
                                <div className='service-box mt-5 mx-auto'>
                                    <i className='text-primary mb-3 sr-icons' />
                                    <h3 className='mb-3'>Access Control</h3>
                                    <p className='mb-0'>Protecting those who are most vulnerable are both a security and safety of today. Our experienced guys are here to install hardware that will secure your doors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='p-0 minor-space mb-5' id='portfolio'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 text-center'>
                                <h2 className='section-heading'>Project Spotlights</h2>
                                <hr className='my-4' />
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid p-0'>
                        <div className='row no-gutters'>{this.constructImageLinks()}</div>
                    </div>
                </section>

                <div className='parallax' />
                <Footer history={this.props.history} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { apartments: Object.values(state.streamlineData) };
};

export default connect(mapStateToProps)(HomePage);
