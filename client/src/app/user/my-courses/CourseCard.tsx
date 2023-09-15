"use client"
import React, { useState, ReactNode } from 'react';
import Modal from '../../components/Layouts/Modal';
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

    const ModalContent = (<> <p style={{ color: "red" }}> {description}</p> </>)
    return (
        <>
            <div className="bg-white p-4 mb-4 shadow-md shadow-sky-900 hover:shadow-green-600 cursor-pointer rounded-md">
                <h3 className="text-xl font-semibold mb-2">{courseName}</h3>
                <p className=" mb-2"><span className='font-semibold'>Instructor : </span>{instructor}</p>
                <p className=" mb-2"><span className='font-semibold'>Schedule : </span>{schedule}</p>
                {/* <p className="text-gray-700 mb-4">{description}</p> */}
                <div className='flex justify-around'>
                    <button
                        className="text-blue-700 md:px-4 px-2 py-2 rounded-md mr-2 transition duration-300 ease-in-out transform hover:bg-blue-600 hover:text-white active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={handleDetailsClick}
                    >
                        View Details
                    </button>

                    <button
                        className="text-green-700  md:px-4  px-2 py-2 rounded-md mr-2 transition duration-300 ease-in-out transform hover:bg-green-600 hover:text-white active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                        onClick={handleMaterialsClick}
                    >
                        Request Access
                    </button>


                </div>
            </div>
            <Modal title={courseName} content={ModalContent} show={show} handleClose={handleClose} />
        </>
    );
};

export default CourseCard;
