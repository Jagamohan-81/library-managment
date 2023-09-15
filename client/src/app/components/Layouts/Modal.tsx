import React, { useState } from 'react';

interface ModalProps {
    title: string;
    content: React.ReactNode; // ReactNode can be any valid React component or JSX
    show: boolean,
    handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, show, handleClose }) => {


    const closeModal = () => {
        handleClose()
    }

    return (
        <>
            {show && (
                <div className="fixed inset-0 flex items-center justify-center z-50 mx-2">
                    <div className="modal-overlay fixed inset-0 bg-black opacity-50"></div>

                    <div className="modal-container bg-white w-96 mx-auto rounded-lg shadow-lg z-50">
                        <div className="modal-header border-b border-gray-200 p-4">
                            <h3 className="text-lg font-semibold">{title}</h3>
                            <button
                                onClick={closeModal}
                                className="modal-close absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-600"
                            >
                                &#215;
                            </button>
                        </div>

                        <div className="modal-body p-4">{content}</div>

                        <div className="modal-footer border-t border-gray-200 p-4 justify-end flex">
                            <button
                                onClick={closeModal}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
                            >
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
