"use client"
import React from 'react'
import RegisterForm from './RegisterForm'
import LogInForm from './LogInForm'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
function Auth() {
    const isSignUpMode = useSelector((state: RootState) => state.auth.isSignUpMode);
    return (
        <>
            {
                isSignUpMode ? <RegisterForm /> :
                    <LogInForm />
            }

        </>
    )
}

export default Auth