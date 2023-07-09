import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/Store";
import {resetUsername} from "../redux/Slices/UserSlice";
import RegisterModal from "../features/register";
import {RightSideBar, LandingFooter} from '../features/landing'

import './Landing.css';
import '../assets/css/global.css'

import whiteLogo from '../assets/img/logo-white.png';
import LoginModal from "../features/login";



export const Landing:React.FC = () => {

    const dispatch:AppDispatch = useDispatch();

    const [register, setRegister] = useState<boolean>(false);
    const [login, setLogin] = useState<boolean>(false);

    const toggleRegister = () => {
        setRegister(!register);
    }

    const toggleLogin = () => {
        setLogin(!login);
        dispatch(resetUsername());
    }

    return (
        <div className='home-container bg-color'>
            {register ? <RegisterModal toggleModal={toggleRegister}/> : <></>}
            {login ? <LoginModal toggleModal={toggleLogin} toggleRegister={toggleRegister}/> : <></>}
            <div className="landing-layout">
                <div className="landing-top-left bg-blue">
                    <img src={whiteLogo} alt="white-logo" className="landing-top-left-logo"/>
                </div>
                <div className="landing-top-right">
                    <RightSideBar toggleLogin={toggleLogin} toggleRegister={toggleRegister}/>
                </div>
                <div className="landing-bottom">
                    <LandingFooter />
                </div>
            </div>

        </div>
    );
};
