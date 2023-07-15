import React, {useState} from 'react';
import {Modal} from "../../../../components/Modal/Modal";
import {ForgotModalTop} from "../ForgotModalTop/ForgotModalTop";
import {ForgotFormOne} from "../ForgotForms/ForgotFormOne";
import {validatedEmail, validatePhone} from "../../../../services/Validators";
import axios from "axios";

export const ForgotPasswordModal:React.FC<{toggleModal:()=>void}> = ({toggleModal}) => {

    const [credential, setCredential] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [step, setStep] = useState<number>(1);

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
            let res = await axios.post('http://localhost:8080/auth/find', findUserDTO)
            let data = await res.data;
            console.log(data)
            setStep(2);
        }catch (e) {
            setError(true);
        }
    }

    return (
        <Modal
            topContent={<ForgotModalTop closeModal={toggleModal}/>}
            content={<ForgotFormOne setCredential={changeCredential} error={error}/>}
            bottomContent={step === 1 ? <button onClick={searchUser}>Search for user</button> : <></>}
        />
    );
};
