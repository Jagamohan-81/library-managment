"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.css";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from "@/app/Loader";
import { RootState } from "@/app/store/store";
import { decodeToken } from "@/app/helpers/tokenDecoder";
import MobileSlideView from "../Common/MobileSlideView";
const Header: React.FC = () => {
  type UserData = string | null
  type Bolean = boolean
  const [userName, setUserName] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true)
  const user = useSelector((state: RootState) => state.userLogin);
  const [isMenuOpen, setMenuOpen] = useState<Bolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    setLoading(true)

    const getToken = async () => {
      if (typeof window !== "undefined") {
        const userData = await decodeToken();
        const name = userData?.userName;
        if (name !== undefined) {
          setUserName(name);
        }
      }
      setTimeout(() => setLoading(false), 1000)
    };


    getToken()

  }, [user]);


  return (
    <header className="header-container flex flex-col md:flex-row justify-between items-center px-4 md:py-4 py-2 me-5">
      <div className="flex justify-between w-full">
        {/* <h3 className="logo text-2xl font-bold sm:mr-4">
        </h3> */}
        <Link href='/' className="logo text-2xl font-bold sm:mr-4">
          Knowledge Hub

        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="mobile-menu-button">
            {
              isMenuOpen ? <svg className="h-6 w-6 items-center" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            }


          </button>
        </div>
      </div>

      {/* Mobile slide menu */}

      <MobileSlideView isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <nav className={`nav-links hidden md:flex md:flex-row md:justify-end justify-between mx-5 `}>
        <div className={`md:flex items-center justify-center hidden`}>
          {userName && userName !== null ? (
            <span className="text-white rounded-lg text-sm p-2 text-center inline-flex items-center user-name">{userName}</span>
          ) : loading ? <Loader /> : null}
        </div>

        <div className={`md:flex justify-around items-center m-2 hidden`}>
          {!loading && !userName ? (
            <Link href="/user/auth" className="me-1">
              Sign Up
            </Link>
          ) : null}
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>

  );
};

export default Header;

{/* <nav className="nav-links flex flex-row md:justify-end justify-between mx-5">
        <div className="flex justify-center m-2">
          {userName && userName != null ? (
            <span className="text-white rounded-lg text-sm p-2 text-center inline-flex items-center user-name">{userName}</span>
          ) :
            loading ? <Loader />
              : <Link href="/user/auth" >Sign Up</Link>
          }
        </div>
        <div className="flex justify-around items-center m-2">
          <Link href="/" >Home</Link>
          <Link href="/about" >About</Link>
          <Link href="/contact" >Contact</Link>
        </div>
      </nav> */}