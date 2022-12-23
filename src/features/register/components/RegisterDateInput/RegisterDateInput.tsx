import React from 'react';
import './RegisterDateInput.css';
import {ValidatedDateSelected} from "../../../../components/ValidatedInput/ValidatedDateSelected";
import {getMonths, getDays, getYears} from "../../utils/DateUtinls";
import {AppDispatch} from "../../../../redux/Store";
import {useDispatch} from "react-redux";
import {updateRegister} from "../../../../redux/Slices/RegisterSlice";

export const RegisterDateInput:React.FC = () => {
    const dispatch:AppDispatch = useDispatch();
    const updateState = (name:string, value:string|number|boolean):void =>{
        dispatch(updateRegister({
            name,
            value
        }));
    }
    return (
        <div className='register-date'>
            <ValidatedDateSelected style={'validated-month'}
                                   valid={true}
                                   name={'Month'}
                                   dropDown={getMonths}
                                   dispatcher={updateState}
            />
            <ValidatedDateSelected style={'validated-day'}
                                   valid={true}
                                   name={'Day'}
                                   dropDown={getDays}
                                   dispatcher={updateState}
            />
            <ValidatedDateSelected style={'validated-year'}
                                   valid={true}
                                   name={'Year'}
                                   dropDown={getYears}
                                   dispatcher={updateState}
            />
        </div>
    );
};