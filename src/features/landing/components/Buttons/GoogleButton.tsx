import React from 'react';

import google from '../../../../assets/img/google.png';
import '../../../../assets/css/global.css';
import './Buttons.css';

const GoogleButton:React.FC = () => {
    return (
        <div className='landing-button color-gray google'>
            <img src={google} alt="google button" className='landing-button-logo'/>
            <p className="google-text">Sign up with Google</p>
        </div>
    );
};

export default GoogleButton;