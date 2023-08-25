import React from 'react'
import BookListing from './BookListing'
import Link from 'next/link'
import './Home.css'
function HomePage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 main-div">
            <Link href='/user/profile' className="tab-item items-centerjustify-center px-4 py-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">Profile</Link>
            <Link href='#' className="tab-item items-centerjustify-center  px-4 py-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">Lectures</Link>
            <Link href='#' className="tab-item items-centerjustify-center px-4 py-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">Assignments</Link>
            <Link href='#' className="tab-item items-centerjustify-center px-4 py-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">E-library</Link>
            <Link href='#' className="tab-item items-centerjustify-center px-4 py-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">Quizzes</Link>
        </div>


    )
}

export default HomePage