"use client"
import React, { useState, useEffect } from 'react';
import './Profile.css'
import { decodeToken } from "@/app/helpers/tokenDecoder";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { userDetails } from '@/app/APICalls';
function ProfileCard() {

    type UserData = {
        createdAt: string,
        email
        :
        string,
        name
        :
        string,
        profilePic
        :
        string | null,
        role
        :
        string,
    } | null

    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true)
    const isSignUpMode = useSelector((state: RootState) => state.auth.isSignUpMode);
    const user = useSelector((state: RootState) => state.userLogin);
    useEffect(() => {
        setLoading(true)
        const getToken = async () => {
            if (typeof window !== "undefined") {
                const userTokenData = await decodeToken();
                if (name !== undefined) {
                    getUser(userTokenData?.id)
                    // setUserData(userTokenData);
                }
            }
            setTimeout(() => setLoading(false), 1000)
        };
        getToken()

    }, [user]);

    const getUser = async (id: any) => {
        if (typeof window !== "undefined") {
            const userDataRes = await userDetails(id);
            if (userDataRes) {
                setUserData(userDataRes.data)
            }
        }
        setTimeout(() => setLoading(false), 1000)
    };



    return (
        <div className="profile-container mx-auto bg-white shadow-md rounded-md overflow-hidden md:w-500 md:h-300">
            <div className="flex justify-center items-center py-4 bg-gray-700">
                <img
                    className="rounded-full h-16 w-16 object-cover border-2 border-white"
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                />
            </div>
            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800">{userData?.name}</h1>
                <p className="text-gray-600">{userData?.email}</p>
                <p className="text-gray-600">Class: 10A</p>
                <p className="text-gray-600">Section: A</p>
                <p className="text-gray-600">Roll Number: 12345</p>
            </div>
            <div className="px-6 pb-4">
                <button className="text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300">
                    Reset Password
                </button>
            </div>
        </div>


    );
}

export default ProfileCard;
