"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { dateFormatter } from '@/app/helpers/dateformatter';
import Modal from '@/app/components/Layouts/Modal';
interface AssignmentCardProps {
    assignmentName: string;
    deadline: string;
    description: string;
    instructor: string
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignmentName, deadline, description, instructor }) => {
    const [file, setFile] = useState<File | null>(null);
    const [show, setShow] = useState(false)
    const handleDetailsClick = () => {
        setShow(true)
        console.log(`View Details clicked for ${assignmentName}`);
    };
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };
    const handleClose = () => setShow(false);
    const ModalContent = (<> <p style={{ color: "red" }}> {description}</p> </>)


    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (file) {
            // Handle the form submission with the file data
            console.log('Submitted with file:', file);
        } else {
            console.error('No file selected');
        }
    };

    return (
        <>
            <div className={`bg-white p-4 mb-4 shadow-md shadow-sky-900  cursor-pointer rounded-md ${new Date(dateFormatter(deadline)) < new Date() ? 'hover:shadow-red-600' : 'hover:shadow-green-600'}`}>
                <h3 className="text-xl font-semibold mb-2">{assignmentName}</h3>
                <p className={`mb-2 ${new Date(dateFormatter(deadline)) < new Date() ? 'text-red-500' : 'text-green-500'}`}><span className='font-semibold'>Deadline : </span>{dateFormatter(deadline)}</p>
                <form onSubmit={handleFormSubmit}>
                    <div className="mb-4">
                        <label htmlFor="file" className="block text-gray-700 font-bold mb-2">
                            Upload Assignment
                        </label>
                        <input
                            type="file"
                            id="file"
                            onChange={handleFileChange}
                            className="border border-gray-500 rounded p-2 w-full"
                        />
                    </div>
                    <div className="flex justify-around">
                        <button
                            className="text-blue-700 md:px-4 px-2 py-2 rounded-md mr-2 transition duration-300 ease-in-out transform hover:bg-blue-600 hover:text-white active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                            onClick={handleDetailsClick}
                        >
                            View Details
                        </button>
                        <button
                            type="submit"
                            className="text-green-700  md:px-4  px-2 py-2 rounded-md mr-2 transition duration-300 ease-in-out transform hover:bg-green-600 hover:text-white active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
                        >
                            Submit
                        </button>
                    </div>
                </form >
                <Modal title={assignmentName} content={ModalContent} show={show} handleClose={handleClose} />

            </div >
        </>
    );
};

export default AssignmentCard;
