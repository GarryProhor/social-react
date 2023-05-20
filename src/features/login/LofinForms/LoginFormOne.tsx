import React from 'react';
import '../../../assets/css/global.css';
import './LoginForms.css';
import {ValidatedTextInput} from "../../../components/ValidatedInput/ValidedTextInput"
import {ModalButton} from "../../../components/ModalButton/ModalButton";

import google from '../../../assets/img/google.png';
import apple from '../../../assets/img/apple.png';

export const LoginFormOne:React.FC = () => {
    return (
        <div className='login-form-one-container'>
            <h1 className="login-form-one-header">
                Sign in to Social
            </h1>
            <ModalButton
                backgroundColor={'white'}
                hoverBackground={{
                    r:179,
                    g:204,
                    b:255,
                    a:.05
                }}
                hoverBorder={{
                    r:128,
                    g:170,
                    b:255,
                    a:.5
                }}
                fontColor={'#536471'}
                borderColor={'#536471'}
                fontSize={15}
                fontWeight={600}
            >
                <img src={google} alt="google" className="login-form-one-buttons-logo"/>
                Sign in with Google
            </ModalButton>
            <ModalButton
                backgroundColor={'white'}
                hoverBackground={{
                    r:87,
                    g:87,
                    b:87,
                    a:.1
                }}
                hoverBorder={{
                    r:87,
                    g:87,
                    b:87,
                    a:1
                }}
                fontColor={'black'}
                borderColor={'#536471'}
                fontSize={16}
                fontWeight={700}
            >
                <img src={apple} alt="apple" className="login-form-one-buttons-logo"/>
                Sign in with Apple
            </ModalButton>
            <div className="login-form-one-divider">
                <div className="login-form-one-line"></div>
                <p className="login-form-one-or">or</p>
                <div className="login-form-one-line"></div>
            </div>
            <ValidatedTextInput
                valid={true}
                name={'identifier'}
                label={'Phone, email, or username'}
                changeValue={()=>{}}
            />
            <ModalButton
                backgroundColor={'black'}
                hoverBackground={{
                    r:0,
                    g:0,
                    b:0,
                    a:.9
                }}
                fontColor={'white'}
                fontSize={16}
                fontWeight={700}
            >
                Next
            </ModalButton>
            <ModalButton
                backgroundColor={'white'}
                hoverBackground={{
                    r:83,
                    g:100,
                    b:113,
                    a:.2
                }}
                hoverBorder={{
                    r:211,
                    g:211,
                    b:211,
                    a:1.0
                }}
                fontColor={'black'}
                borderColor={'#d3d3d3'}
                fontSize={16}
                fontWeight={700}
            >
                Forgot password?
            </ModalButton>
            <p className="login-form-one-text color-gray">Don't have an account? <span className="link color-blue">Sign Up</span></p>
        </div>
    );
};

