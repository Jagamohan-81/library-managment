"use client"
import React, { useState } from "react";
import Link from "next/link";
import "./Header.css";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "@/app/store/store";
import { toggleAuthMode } from "@/app/store/reducers/authSlice";
const Header: React.FC = () => {
  const isSignUpMode = useSelector((state: RootState) => state.auth.isSignUpMode);
  // const [login, setLogIn] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleAuthMode());
  };
  return (
    <header className="header-container flex flex-col sm:flex-row justify-between items-center px-4 py-2">
      <h3 className="logo text-2xl font-bold mb-2 sm:mb-0 sm:mr-4">
        Knowledge Hub
      </h3>
      <nav className="nav-links flex flex-row justify-around">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/user-auth">{
          isSignUpMode ? "Log In" : "Sign Up"
        }</Link>
        {/* {login ? (
          <Link href="/login" onClick={() => { setLogIn(!login) }}>Log In</Link>
        ) : (
          <Link href="/register" onClick={() => { setLogIn(!login) }}>Sign Up</Link>
        )} */}
      </nav>
    </header>
  );
};

export default Header;
