import React from 'react';

import '../../../../assets/css/global.css';
import './Buttons.css';

interface SignUpButtonProps{
    handleClick: ()=>void;
}
const SignUpButton:React.FC<SignUpButtonProps> = ({handleClick}) => {
    return (
        <div className='landing-button sign-up' onClick={handleClick}>
            <p className="sign-up-text">Sign up with email</p>
        </div>
    );
};

export default SignUpButton;