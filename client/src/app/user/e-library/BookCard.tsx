"use client"
import React, { useState } from 'react';
import Modal from '@/app/components/Layouts/Modal';
interface BookCardProps {
    title: string;
    author: string;
    genre: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, genre }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDetailsClick = () => {
        setShowModal(true);
    };
    const handleMaterialsClick = () => {
        console.log(`Access Materials clicked for ${title}`);
    };

    const handleClose = () => {
        setShowModal(false);
    };
    const ModalContent = (<> <p style={{ color: "red" }}> {author}</p> </>)

    return (
        <>
            <div className="bg-white p-4 mb-4 shadow-md shadow-sky-900 hover:shadow-red-600 cursor-pointer rounded-md">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className=" mb-2"><span className='font-semibold'>Author : </span>{author}</p>
                <p className=" mb-2"><span className='font-semibold'>Genre : </span>{genre}</p>
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
            {showModal && (
                // Assuming you have a Modal component
                <Modal title={title} content={ModalContent} show={showModal} handleClose={handleClose} />
            )}
        </>
    );
};

export default BookCard;
