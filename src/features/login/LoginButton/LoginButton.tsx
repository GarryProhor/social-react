import React from 'react';
import {AppDispatch} from "../../../redux/Store";
import {useDispatch} from "react-redux";
import {loginUser} from "../../../redux/Slices/UserSlice";
import {ModalButton} from "../../../components/ModalButton/ModalButton";

import '../../../assets/css/global.css';
import './LoginButton.css';

interface LoginButtonProps{
    userName: string;
    password: string;
}

export const LoginButton:React.FC<LoginButtonProps> = ({userName, password}) => {

    const dispatch:AppDispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginUser({
            userName,
            password,
        }));
    }

    return (
        <div className='login-button'>
            <ModalButton
                height={50}
                active={password !== ''}
                disabled={password === ''}
                onClick={handleLogin}
                backgroundColor={password !== '' ? "black" : 'rgba(0,0,0,0.5)'}
                hoverBackground={{
                    r:0,
                    g:0,
                    b:0,
                    a:0.8
                }}
                fontColor={"white"}
                fontSize={17}
                fontWeight={700}>
                Log In
            </ModalButton>
            <div className="login-button-text color-gray">
                Don't have an account? <span className="link color-blue">Sign Up</span>
            </div>
        </div>
    );
};