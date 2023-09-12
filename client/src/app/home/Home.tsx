
import React from 'react'
import BookListing from './BookListing'
import Link from 'next/link'
import BookSlider from '../components/Common/BookSlider'
import './Home.css'
function HomePage() {
    const commonClassName = 'tab-item items-center justify-center  px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 text-center'


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 main-div">
                <Link href='/user/profile' className={`${commonClassName}`}>Profile</Link>
                <Link href='/user/my-courses' className={`${commonClassName}`}>Courses</Link>
                <Link href='#' className={`${commonClassName}`} > Assignments</Link >
                <Link href='#' className={`${commonClassName}`} > E - library</Link >
                <Link href='#' className={`${commonClassName}`} > Fun & Quizzes</Link >
            </div >


            <BookSlider />


        </>


    )
}
export default HomePage
