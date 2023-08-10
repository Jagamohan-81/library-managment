"use client"
import React, { useEffect, useState } from 'react'
import RegisterForm from './RegisterForm'
import LogInForm from './LogInForm'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import jwt, { JwtPayload } from "jsonwebtoken";
function Auth() {
    type UserToken = string;
    interface UserData {
        userName: string;
    }
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("user-token");
            if (token) {
                try {
                    const parsedUserData = JSON.parse(token) as UserToken;
                    const decoded: JwtPayload = jwt.decode(parsedUserData) as JwtPayload;
                    if (decoded && decoded.userName) {
                        setUserData(decoded.userName);
                        setLoading(false)
                    }
                    console.log("User token:", decoded);
                } catch (error) {
                    setLoading(false)
                    console.error("Error parsing user data:", error);
                }
            }
        }
    }, []);
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