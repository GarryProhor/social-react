import React, {useEffect, useState} from 'react';
import './RegisterDateInput.css';
import {ValidatedDateSelected} from "../../../../components/ValidatedInput/ValidatedDateSelected";
import {getMonths, getDays, getYears} from "../../utils/DateUtinls";
import {AppDispatch, RootState} from "../../../../redux/Store";
import {useDispatch, useSelector} from "react-redux";
import {updateRegister} from "../../../../redux/Slices/RegisterSlice";
import {validateDob} from "../../../../services/Validators";
import {Dob} from "../../../../utils/GlobalInterfaces";

interface RegisterDateInputProps {
    date: Dob;
}

export const RegisterDateInput: React.FC<RegisterDateInputProps> = ({date}) => {
    const state = useSelector((state: RootState) => state.register);
    const dispatch: AppDispatch = useDispatch();

    const [valid, setValid] = useState(true);
    const updateState = (name: string, value: string | number | boolean): void => {
        dispatch(updateRegister({
            name,
            value
        }));
    }
    useEffect(() => {
        let {day, month, year} = state.dob;
        if (day && month && year) {
            setValid(validateDob({
                month,
                day,
                year
            }));
            dispatch(updateRegister({name: 'dobValid', value: valid}));
        }
    }, [state.dob.day, state.dob.month, state.dob.year, state.dobValid, valid]);

    return (
        <div className='register-date'>
            <div className='register-date-content'>
                <div className='register-date-month'>
                    <ValidatedDateSelected style={'validated-month'}
                                           valid={valid}
                                           name={'Month'}
                                           dropDown={getMonths}
                                           dispatcher={updateState}
                                           data={date.month}
                    />
                </div>
                <div className='register-date-day'>
                    <ValidatedDateSelected style={'validated-day'}
                                           valid={valid}
                                           name={'Day'}
                                           dropDown={getDays}
                                           dispatcher={updateState}
                                           data={date.day}
                    />
                </div>
                <div className='register-date-year'>
                    <ValidatedDateSelected style={'validated-year'}
                                           valid={valid}
                                           name={'Year'}
                                           dropDown={getYears}
                                           dispatcher={updateState}
                                           data={date.year}
                    />
                </div>
            </div>
            {valid ? <></> : <span className='register-date-error'>Please input a valid date. You must be older than 13 years.</span>}
        </div>
    );
};