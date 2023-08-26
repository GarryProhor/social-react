import React, {useState} from 'react';
import {Modal} from "../../../../components/Modal/Modal";
import {ForgotModalTop} from "../ForgotModalTop/ForgotModalTop";
import {ForgotFormOne} from "../ForgotForms/ForgotFormOne";
import {validatedEmail, validatePhone} from "../../../../services/Validators";
import {ForgotButtonOne} from "../ForgotButtonOne/ForgotButtonOne";
import axios from "axios";
import {ForgotFormTwo} from "../ForgotForms/ForgotFormTwo";
import {ForgotButtonTwo} from "../ForgotButtonTwo/ForgotButtonTwo";

interface UserInfo {
    email: string;
    phone: string;
    userName: string;
}

export const ForgotPasswordModal:React.FC<{toggleModal:()=>void}> = ({toggleModal}) => {

    const [credential, setCredential] = useState<string>('');

    const [error, setError] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1);
    const [userInfo, setUserInfo] = useState<UserInfo>({
        email: '',
        phone: '',
        userName: ''
    })
    const [resetCode, setResetCode] = useState<number>(0);
    const changeCredential = (credential:string) => {
        setCredential(credential);
    }

    const searchUser = async () =>{
        let findUserDTO = {
            email: '',
            phone: '',
            userName: ''
        };

        if(validatedEmail(credential)){
            findUserDTO = {
                ...findUserDTO,
                email: credential,
            }
        }else if(validatePhone(credential)){
            findUserDTO = {
                ...findUserDTO,
                phone: credential,
            }
        }else {
            findUserDTO = {
                ...findUserDTO,
                userName: credential,
            }
        }

        try {
            setError(false);
            let res = await axios.post('http://localhost:8080/auth/identifiers', findUserDTO)
            let data = await res.data;
            setUserInfo({
                email: data.email,
                phone: data.phone,
                userName: data.userName
            })
            setStep(2);
        }catch (e) {
            setError(true);
        }
    }

    const sendReset = async () => {
        const  code = Math.floor(100000 + Math.random() * 900000);
        setResetCode(code);

        try {
            let req = await axios.post('http://localhost:8080/auth/password/code', {
                email: userInfo.email,
                code
            });
            let res = await req.data;
            setStep(3);
        }catch (e) {
            console.log(e);
        }
    }

    return (
        <Modal
            topContent={<ForgotModalTop closeModal={toggleModal}/>}
            content={step === 1 ? <ForgotFormOne setCredential={changeCredential} error={error}/> : <ForgotFormTwo email={userInfo.email} phone={userInfo.phone}/>}
            bottomContent={step === 1 ? <ForgotButtonOne value={credential} handleClick={searchUser}/> : <ForgotButtonTwo onCancel={toggleModal} sendCode={sendReset}/>}
        />
    );
};
