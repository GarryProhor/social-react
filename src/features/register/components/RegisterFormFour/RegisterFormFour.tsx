import React from 'react';

import './RegisterFormFour.css';
import {Checkbox} from "../../../../components/Checkbox/Checkbox";

export const RegisterFormFour: React.FC = () => {
    return (
        <div className='reg-step-four-container'>
            <div className='reg-step-four-content'>
                <h1>Add a phone number</h1>
                <p>Enter the phone number you would like to associate with your Social account. You won't get a
                    verification code sent here.</p>

                <div className='reg-step-four-check-group'>
                    <p>Let people who have your phone number find and connect with you on Social. <span
                        className='reg-step-four-link'>Learn more</span>.</p>
                    <Checkbox/>
                </div>
                <div className='reg-step-four-check-group'>
                    <p>Let Social use your phone number to personalize our services, including ads (if permitted by your
                        Ads preferences). If you don't enable this, Social will still use your phone number for purposes
                        including account security, spam, fraud, and abuse prevention.<span
                            className='reg-step-four-link'>See our Privacy Policy for more information.</span>.</p>
                    <Checkbox/>
                </div>
            </div>
        </div>
    );
};