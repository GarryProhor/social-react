import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {RootState, AppDispatch} from "../../../../redux/Store";
import {ValidatedTextInput} from "../../../../components/ValidatedInput/ValidedTextInput";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import {updateRegister} from "../../../../redux/Slices/RegisterSlice";
import {setFromRegister, loginUser} from "../../../../redux/Slices/UserSlice";

import './RegisterForm.css';
import '../../../../assets/css/global.css';

export const RegisterFormSix:React.FC = () => {

    const state = useSelector((state:RootState) => state);
    const dispatch:AppDispatch = useDispatch();

    const [active, setActive] = useState<boolean>(false);
    const [, setPassword] = useState<string>("");

    const navigate = useNavigate();
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
        dispatch(updateRegister({
            name: 'password',
            value: e.target.value
        }))
    }
    const toggleView = () =>{
        setActive(!active);
    }

    useEffect(()=>{
        if(state.user.loggedIn){
            navigate('/home');
            return (() => {

            });
        }
        if(state.user.fromRegister){
            //we are ready to dispatch the login
            dispatch(loginUser({
                userName: state.register.userName,
                password: state.register.password,
            }));
            return;
        }
        if(state.register.login){
            //store some user info into local storage, that way we can load the user into
            // the user slice when we hit the feed page
            // navigate('/home');
        //     set the dispatch to set user.fromRegister
            dispatch(setFromRegister(true));
        }
    }, [state.register.login, state.user.loggedIn, state.user.fromRegister]);

    return (
        <div className='register-container'>
            <div className='register-content'>
                <h1 className='register-header-2'>You'll need a password</h1>
                <p className='register-text color-gray'>Make sure it's 8 characters or more.</p>
                <div className='register-six-password'>
                    <ValidatedTextInput valid={true}
                                        name={'password'}
                                        label={'Password'}
                                        changeValue={handleChange}
                                        attributes = {{
                                            minLength: 8,
                                            type: active ? 'text' : 'password'
                                        }}/>
                    <div className='register-six-icon' onClick={toggleView}>
                        {active ? <VisibilityOffOutlinedIcon sx={{
                            fontSize: '24px'
                        }}/> :
                            <VisibilityOutlinedIcon sx={{
                                fontSize: '24px'
                            }}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};
