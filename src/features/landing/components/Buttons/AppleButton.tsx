import React from 'react';

import apple from '../../../../assets/img/google.png';
import '../../../../assets/css/global.css';
import './Buttons.css';

const AppleButton:React.FC = () => {
    return (
        <div className='landing-button color-gray apple'>
            <img src={apple} alt="apple button" className='landing-button-logo'/>
            <p className="apple-text">Sign up with Apple</p>
        </div>
    );
};

export default AppleButton;