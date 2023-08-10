"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./Header.css";
import jwt, { JwtPayload } from "jsonwebtoken";
const Header: React.FC = () => {
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
  console.log("clicked")
  return (
    <header className="header-container flex flex-col sm:flex-row justify-between items-center px-4 py-2 me-5">
      <h3 className="logo text-2xl font-bold mb-2 sm:mb-0 sm:mr-4">
        Knowledge Hub
      </h3>
      <nav className="nav-links flex flex-row justify-end me-5">
        {
          !loading ?
            <>{userData ? (
              <span className="me-2">{`Welcome ${userData}`}</span>
            ) : (
              <Link href="/user-auth">Sign Up</Link>
            )}
            </>
            : null
        }


        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
