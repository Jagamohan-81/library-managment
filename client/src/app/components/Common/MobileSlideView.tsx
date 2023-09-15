import React, { useState, useEffect } from 'react'
import { decodeToken } from '@/app/helpers/tokenDecoder';
import Link from 'next/link';
import { Loader } from '@/app/Loader';
interface MobileSlideViewProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}
const MobileSlideView = ({ isMenuOpen, toggleMenu }: MobileSlideViewProps) => {
    type UserData = string | null
    const [userName, setUserName] = useState<UserData | null>();
    const [loading, setLoading] = useState(true)
    const [navHeight, setNavHeight] = useState<string>('100vh');
    const [headerHeight, setHeaderHeight] = useState<string | number>('56px');

    useEffect(() => {
        const headerHeight = document.querySelector('header')?.clientHeight || 0;
        setHeaderHeight(headerHeight)
        // const footerHeight = document.querySelector('footer')?.clientHeight || 0;
        const availableHeight = `calc(100vh - ${headerHeight}px )`;
        setNavHeight(availableHeight);
    }, []);
    useEffect(() => {
        // setUserName(user.userName)
        setLoading(true)

        const getToken = async () => {
            if (typeof window !== "undefined") {
                const userData = await decodeToken();
                const name = userData?.userName;
                if (name !== undefined) {
                    setUserName(name);
                    setLoading(false)
                }
            }
            setTimeout(() => setLoading(false), 1000)
        };

        getToken()

    }, []);
    return (
        <>
            <nav className={`nav-links-mobile ${isMenuOpen ? 'nav-links-mobile-open' : ''} md:hidden flex flex-col justify-start`} style={{ height: navHeight, top: headerHeight }}>
                <div className="flex flex-col items-center  mobile-slide-containe h-full">
                    <div className={`flex items-center justify-center mx-2`}>
                        {userName ? (
                            <span className="text-white rounded-lg text-sm p-2 text-center inline-flex items-center user-name my-2">{userName.split(" ")[0]}</span>
                        ) : loading ? <Loader /> : null}
                    </div>
                    <div className={`flex items-center justify-center flex-col`}>
                        {!loading && !userName ? (
                            <Link href="/user/auth" className=" text-white hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-600 focus-visible:bg-blue-600 rounded-md p-2 transition duration-300" onClick={toggleMenu}>
                                Sign Up
                            </Link>
                        ) : null}
                        <Link href="/" className=" text-white hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-600 focus-visible:bg-blue-600 rounded-md p-2 transition duration-300" onClick={toggleMenu}>Home</Link>
                        <Link href="/about" className=" text-white hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-600 focus-visible:bg-blue-600 rounded-md p-2 transition duration-300" onClick={toggleMenu}>About</Link>
                        <Link href="/contact" className=" text-white hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-600 focus-visible:bg-blue-600 rounded-md p-2 transition duration-300" onClick={toggleMenu}>Contact</Link>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default MobileSlideView