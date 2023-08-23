"use client"
import React, { useEffect, useState } from 'react'
import RegisterForm from './RegisterForm'
import LogInForm from './LogInPage'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import jwt, { JwtPayload } from "jsonwebtoken";
import { useRouter } from 'next/navigation';
import { SpinnerLoader } from '@/app/Loader';
import Link from 'next/link';
function Auth() {
    type UserToken = string;
    const router = useRouter()
    type UserData = string;
    const [userName, setUserName] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true)
    const isSignUpMode = useSelector((state: RootState) => state.auth.isSignUpMode);

    useEffect(() => {
        setLoading(true)
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("user-token") || null
            if (token) {
                try {
                    const parsedUserData = JSON.parse(token) as UserToken;
                    const decoded: JwtPayload = jwt.decode(parsedUserData) as JwtPayload;
                    if (decoded && decoded.userName) {
                        setUserName(decoded.userName);
                        setLoading(false)
                    }
                    console.log("User token:", decoded);
                } catch (error) {
                    setLoading(false)
                    console.error("Error parsing user data:", error);
                }
            }
        }

    }, [isSignUpMode]);
    if (userName) {
        return (<>{
            <p>Your are already logged in as <strong>{userName}</strong>  ,If not please <Link href='/user/log-out'> logout </Link>to login again . <Link href={'/'}>Dashboard</Link></p>

        }
        </>)

    }
    return (
        <>{
            !loading ? <>{
                isSignUpMode ? <RegisterForm /> :
                    <LogInForm />
            }
            </> :
                <SpinnerLoader />
        }


        </>
    )
}

export default Auth