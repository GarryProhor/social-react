import React from 'react';
import {ValidatedDisplay} from "../../../../components/ValidatedInput/ValidatedDisplay";
import {stringifyDate} from "../../utils/DateUtinls";
import './RegisterFormThree.css';
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/Store";

export const RegisterFormThree:React.FC = () => {
    const state = useSelector((state:RootState) => state.register);
    return (
        <div className='reg-step-three-container'>
            <div className='reg-step-three-content'>
                <ValidatedDisplay label={"Name"} value={`${state.firstName} ${state.lastName}`}/>
                <ValidatedDisplay label={'Email'} value={state.email}/>
                <ValidatedDisplay label={'Birth day'} value={stringifyDate(state.dob)}/>
            </div>
        </div>
    );
};