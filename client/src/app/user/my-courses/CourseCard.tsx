"use client"
import React, { useState, ReactNode } from 'react';
import Modal from '../../components/Layouts/Modal';
import Image from 'next/image';
import { dateFormatter } from '@/app/helpers/dateformatter';
interface CourseCardProps {
    courseName: string;
    instructor: string;
    schedule: string;
    description: string;
    myCourse: boolean

}

const CourseCard: React.FC<CourseCardProps> = ({
    courseName,
    instructor,
    schedule,
    description,
    myCourse

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
            <div className="bg-white p-4 mb-4 shadow-md shadow-sky-900 hover:shadow-green-600 cursor-pointer rounded-md card-height flex flex-col justify-between">
                <div>
                    <div className='flex justify-between'>
                        <div className=''>
                            <h3 className="text-xl font-semibold mb-2">{courseName}</h3>
                            <p className="mb-2 flex">
                                <span className='font-semibold'>Instructor:</span>
                                <span className='flex items-center'>
                                    <span className='overflow-hidden max-w-[70px] sm:max-w-[70px] md:max-w-[100px] truncate'>
                                        {instructor ? instructor : <span className='text-red-400'>N/A</span>}
                                    </span>

                                </span>
                            </p>

                        </div>
                        <div className=''>
                            <Image alt="image" width={100} height={100} src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1380&t=st=1695206166~exp=1695206766~hmac=d07969bdae926544ff279107862c9dba27276300f41ec280268147f30e8bfbfe" />
                        </div>
                    </div>
                    <p className="mb-2 flex items-center">
                        <span className='font-semibold mr-2'>Schedule:</span>
                        <span className='flex-1'>{schedule}</span>
                    </p>
                </div>
                <div className='flex justify-around'>
                    <button
                        className="text-blue-700 md:px-4 px-1 py-2 rounded-md mr-2 transition duration-300 ease-in-out transform hover:bg-blue-600 hover:text-white active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                        onClick={handleDetailsClick}
                    >
                        View Details
                    </button>

                    {
                        !myCourse && <button
                            className="text-green-700  md:px-4  px-1 py-2 rounded-md mr-2 transition duration-300 ease-in-out transform hover:bg-green-600 hover:text-white active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                            onClick={handleMaterialsClick}
                        >
                            Request Access
                        </button>
                    }
                </div>



            </div>



            <Modal title={courseName} content={ModalContent} show={show} handleClose={handleClose} />
        </>
    );
};

export default CourseCard;
