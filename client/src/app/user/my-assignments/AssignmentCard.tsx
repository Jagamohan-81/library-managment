"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface AssignmentCardProps {
    assignmentName: string;
    deadline: string;
    description: string;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignmentName, deadline, description }) => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

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
            <div className="bg-white p-4 mb-4 shadow-md shadow-sky-900 hover:shadow-green-600 cursor-pointer rounded-md">
                <h3 className="text-xl font-semibold mb-2">{assignmentName}</h3>
                <p className=" mb-2"><span className='font-semibold'>Deadline : </span>{deadline}</p>
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
                            type="submit"
                            className="text-blue-700 md:px-4 px-2 py-2 rounded-md mr-2 transition duration-300 ease-in-out transform hover:bg-blue-600 hover:text-white active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AssignmentCard;
