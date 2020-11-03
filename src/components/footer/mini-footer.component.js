import './footer.styles.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { MDBFooter } from 'mdbreact';

const MinimizedFooter = () => {
    return ReactDOM.createPortal(
        <MDBFooter id='minimizedfooter' className='font-small'>
            <div className={`footer-copyright text-center py-3 mt-4`}>
                &copy; {new Date().getFullYear()} Copyright: <a href='http://www.streamlinewiring.com'>Streamlinewiring.com</a>
            </div>
        </MDBFooter>,
        document.querySelector('#minimizedfooter')
    );
};

export default MinimizedFooter;
