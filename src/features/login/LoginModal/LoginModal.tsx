import React from 'react';
import {Modal} from "../../../components/Modal/Modal";
import './LoginModal.css';
import {LoginModalTop} from "../LoginModalTop/LoginModalTop";
import {LoginFormOne} from "../LofinForms/LoginFormOne";

import {RootState} from "../../../redux/Store";
import {useSelector} from "react-redux";

interface LoginModalProps {
    toggleModal: ()=>void;
}

export const LoginModal:React.FC<LoginModalProps> = ({toggleModal}) => {

    const state = useSelector((state:RootState) => state.user);

    return (
        <Modal
            topContent={<LoginModalTop closeModal={toggleModal} />}
            content={state.userName ? <>Login form 2</> : <LoginFormOne/>}
            bottomContent={<div>Login form 2 bottom</div>}
        />
    );
};