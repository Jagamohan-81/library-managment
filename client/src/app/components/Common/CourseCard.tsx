"use client"
import React, { useState } from 'react';
import Modal from '../Layouts/Modal';
interface CourseCardProps {
    courseName: string;
    instructor: string;
    schedule: string;
    description: string;

}

const CourseCard: React.FC<CourseCardProps> = ({
    courseName,
    instructor,
    schedule,
    description,

}) => {

    const [show, setShow] = useState(false)
    const handleDetailsClick = () => {
        setShow(true)
        console.log(`View Details clicked for ${courseName}`);
    };

    const handleMaterialsClick = () => {
        console.log(`Access Materials clicked for ${courseName}`);
    };
    const handleClose = () => setShow(false);


    return (
        <>
            <div className="bg-white p-4 mb-4 shadow-md rounded-md">
                <h3 className="text-xl font-semibold mb-2">{courseName}</h3>
                <p className="text-gray-700 mb-2">Instructor: {instructor}</p>
                <p className="text-gray-700 mb-2">Schedule: {schedule}</p>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className='flex justify-around'>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 transition duration-300 ease-in-out transform hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-700"
                        onClick={handleDetailsClick}
                    >
                        View Details
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 transition duration-300 ease-in-out transform hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-700"
                        onClick={handleMaterialsClick}
                    >
                        Access Materials
                    </button>
                </div>


            </div>
            <Modal title="title" content="content" show={show} handleClose={handleClose} />
        </>
    );
};

export default CourseCard;
