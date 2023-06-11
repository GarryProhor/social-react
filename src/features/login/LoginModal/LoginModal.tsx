import React from 'react';
import {Modal} from "../../../components/Modal/Modal";
import './LoginModal.css';
import {LoginModalTop} from "../LoginModalTop/LoginModalTop";
import {LoginFormOne} from "../LofinForms/LoginFormOne";

interface LoginModalProps {
    toggleModal: ()=>void;
}

export const LoginModal:React.FC<LoginModalProps> = ({toggleModal}) => {
    return (
        <Modal
            topContent={<LoginModalTop closeModal={toggleModal} />}
            content={<LoginFormOne/>}
            bottomContent={<div>Login bottom</div>}
        />
    );
};