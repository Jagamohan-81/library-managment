"use client"
import React, { useEffect, useState } from 'react'
import RegisterForm from './RegisterForm'
import LogInForm from './LogInPage'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import jwt, { JwtPayload } from "jsonwebtoken";
import { useRouter } from 'next/navigation';
import { SpinnerLoader } from '@/app/Loader';
import { decodeToken } from "@/app/helpers/tokenDecoder";
import Link from 'next/link';
function Auth() {
    type UserData = string;
    const [userName, setUserName] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true)
    const isSignUpMode = useSelector((state: RootState) => state.auth.isSignUpMode);
    const user = useSelector((state: RootState) => state.userLogin);
    useEffect(() => {
        setLoading(true)
        const getToken = async () => {
            if (typeof window !== "undefined") {
                const userData = await decodeToken();
                const name = userData?.userName;
                if (name !== undefined) {
                    console.log("user----", userData)
                    setUserName(name);
                }
            }
            setTimeout(() => setLoading(false), 1000)
        };


        getToken()

    }, [user]);



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