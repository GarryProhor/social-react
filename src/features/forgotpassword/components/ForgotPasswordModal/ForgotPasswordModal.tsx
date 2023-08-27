import React, {useState} from 'react';
import {Modal} from "../../../../components/Modal/Modal";
import {ForgotModalTop} from "../ForgotModalTop/ForgotModalTop";
import {ForgotFormOne} from "../ForgotForms/ForgotFormOne";
import {validatedEmail, validatePhone} from "../../../../services/Validators";
import {ForgotButtonOne} from "../ForgotButtonOne/ForgotButtonOne";
import axios from "axios";
import {ForgotFormTwo} from "../ForgotForms/ForgotFormTwo";
import {ForgotButtonTwo} from "../ForgotButtonTwo/ForgotButtonTwo";
import {determineForgotButton, determineForgotFormContent} from "../../utils/ForgotPasswordUtils";

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
    const [userInputCode, setUserInputCode] = useState<number>(0);

    const changeCredential = (credential:string) => {
        setCredential(credential);
    }

    const changeUserInputCode = (value:number) =>{
        setUserInputCode(value);
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
            content={determineForgotFormContent(
                step,
                setCredential,
                error,
                userInfo.email,
                userInfo.phone,
                !error,
                changeUserInputCode
            )}
            bottomContent={determineForgotButton(
                step,
                credential,
                searchUser,
                toggleModal,
                sendReset
            )}
        />
    );
};
