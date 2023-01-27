import React, {useState} from 'react';
import {ValidatedTextInput} from "../../../../components/ValidatedInput/ValidedTextInput";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import {StyledNextButton} from "../RegisterNextButton/RegisterNextButton";
import './RegisterFormSix.css';
export const RegisterFormSix:React.FC = () => {
    const [active, setActive] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }
    const toggleView = () =>{
        setActive(!active);
    }
    return (
        <div className='reg-step-six-container'>
            <div className='reg-step-six-content'>
                <h1>You'll need a password</h1>
                <p>Make sure it's 8 characters or more.</p>
                <div className='reg-step-six-password'>
                    <ValidatedTextInput valid={true}
                                        name={'password'}
                                        label={'Password'}
                                        changeValue={handleChange}
                                        attributes = {{
                                            minLength: 8,
                                            type: active ? 'text' : 'password'
                                        }}/>
                    <div className='reg-step-six-icon' onClick={toggleView}>
                        {active ? <VisibilityOffOutlinedIcon sx={{
                            fontSize: '24px'
                        }}/> :
                            <VisibilityOutlinedIcon sx={{
                                fontSize: '24px'
                            }}/>}
                    </div>
                </div>
            </div>
            <StyledNextButton active={password.length >= 8}
                              disabled={!(password.length >= 8)}
                              onClick={()=>{}} color='black'>
                Next
            </StyledNextButton>
        </div>
    );
};
