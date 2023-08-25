import React from 'react';
import './Profile.css'
function ProfileCard() {
    return (
        <div className="profile-container mx-auto bg-white shadow-md rounded-md overflow-hidden md:w-500 md:h-300">
            <div className="flex justify-center items-center py-4 bg-gray-700">
                <img
                    className="rounded-full h-16 w-16 object-cover border-2 border-white"
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                />
            </div>
            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800">John Doe</h1>
                <p className="text-gray-600">john.doe@example.com</p>
                <p className="text-gray-600">Class: 10A</p>
                <p className="text-gray-600">Section: A</p>
                <p className="text-gray-600">Roll Number: 12345</p>
            </div>
            <div className="px-6 pb-4">
                <button className="text-white bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300">
                    Reset Password
                </button>
            </div>
        </div>


    );
}

export default ProfileCard;
