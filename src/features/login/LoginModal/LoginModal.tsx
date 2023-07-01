import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Modal} from "../../../components/Modal/Modal";
import './LoginModal.css';
import {LoginModalTop} from "../LoginModalTop/LoginModalTop";
import {LoginFormOne} from "../LofinForms/LoginFormOne";
import {LoginButton} from "../LoginButton/LoginButton";
import {RootState} from "../../../redux/Store";
import {useSelector} from "react-redux";
import {LoginFormTwo} from "../LofinForms/LoginFormTwo";

interface LoginModalProps {
    toggleModal: ()=>void;
}

export const LoginModal:React.FC<LoginModalProps> = ({toggleModal}) => {

    const navigate = useNavigate();

    const state = useSelector((state:RootState) => state.user);

    const [password, setPassword] = useState<string>("");

    const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    useEffect(()=>{
        if(state.loggedIn){
            navigate('/home')

            return () =>{

            }
        }
    });

    return (
        <Modal
            topContent={<LoginModalTop closeModal={toggleModal} />}
            content={state.userName ? <LoginFormTwo setPassword={handlePassword}/> : <LoginFormOne/>}
            bottomContent={state.userName ? <LoginButton userName={state.userName} password={password}/> : <></>}
        />
    );
};