import React, {useState} from 'react';
import {Modal} from "../../../../components/Modal/Modal";
import './RegisterModal.css';
import {RegistrationStepCounter} from "../RegisterStepCounter/RegistrationStepCounter";
import {determineModalContent} from "../../utils/RegisterModalUtils";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../../redux/Store";
import {decrementStep} from "../../../../redux/Slices/RegisterSlice";
export const RegisterModal:React.FC = () => {

    const state = useSelector((state:RootState) => state.register);
    const dispatch:AppDispatch = useDispatch();

    const stepButtonClicked = () => {
        dispatch(decrementStep());
    }
    return (
            <Modal>
               <div className="register-container">
                   <RegistrationStepCounter step={state.step} changeStep={stepButtonClicked}/>
                   <div className="register-modal-content">
                       {determineModalContent(state.step)}
                   </div>
               </div>
            </Modal>
    );
};

