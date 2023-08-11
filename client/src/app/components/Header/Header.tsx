"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.css";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch, useSelector } from 'react-redux';
import Loader from "@/app/Loader";
import { RootState } from "@/app/store/store";
const Header: React.FC = () => {
  type UserToken = string;
  type UserData = string | null
  const [userName, setUserName] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false)
  const user = useSelector((state: RootState) => state.userLogin);
  useEffect(() => {
    // setUserName(user.userName)
    setLoading(true)
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("user-token");
      if (token) {
        try {
          const parsedUserData = JSON.parse(token) as UserToken;
          const decoded: JwtPayload = jwt.decode(parsedUserData) as JwtPayload;
          if (decoded && decoded.userName) {
            setUserName(decoded.userName);
            setLoading(false)
          }
          // console.log("User token:", decoded);
        } catch (error) {
          setLoading(false)
          console.error("Error parsing user data:", error);
        }
      }
    }
  }, [user]);


  return (
    <header className="header-container flex flex-col sm:flex-row justify-between items-center px-4 py-2 me-5">
      <h3 className="logo text-2xl font-bold mb-2 sm:mb-0 sm:mr-4">
        Knowledge Hub
      </h3>
      <nav className="nav-links flex flex-col sm:flex-row justify-end mx-5">
        <div className="flex justify-center m-2">
          {userName && userName != null ? (
            <span className="text-white rounded-lg text-sm p-2 text-center inline-flex items-center user-name">{`Welcome ${userName}`}</span>
          ) :
            loading ? <Loader />
              : <Link href="/user/auth" >Sign Up</Link>
          }
        </div>
        <div className="flex justify-around items-center m-2"><Link href="/" >Home</Link>
          <Link href="/about" >About</Link>
          <Link href="/contact" >Contact</Link></div>
      </nav>

    </header >
  );
};

export default Header;
