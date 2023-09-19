"use client"
import React, { useState } from 'react';
import BookCard from '@/app/user/e-library/BookCard';

interface Book {
    title: string;
    author: string;
    genre: string;
}

const BookListing: React.FC = () => {
    const initialBookData: Book[] = [
        {
            title: "Rich Dad Poor Dad",
            genre: "Personal Finance",
            author: "Robert T. Kiyosaki"
        },
        {
            title: "The Alchemist",
            genre: "Fiction",
            author: "Paulo Coelho"
        },
        {
            title: "To Kill a Mockingbird",
            genre: "Fiction",
            author: "Harper Lee"
        },
        {
            title: "The Great Gatsby",
            genre: "Fiction",
            author: "F. Scott Fitzgerald"
        },
        {
            title: "1984",
            genre: "Dystopian",
            author: "George Orwell"
        },
        {
            title: "Brave New World",
            genre: "Dystopian",
            author: "Aldous Huxley"
        },
        {
            title: "A Brief History of Humankind",
            genre: "History",
            author: "Yuval Noah Harari"
        }
    ];
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [bookData, setBookData] = useState<Book[]>(initialBookData);
    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        handleSort(e.target.value);
    }

    const handleSort = (option: string) => {
        let sortedData = [...bookData]; // Make a copy of the original data

        switch (option) {
            case 'title-asc':
                sortedData.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'title-desc':
                sortedData.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'genre-asc':
                sortedData.sort((a, b) => a.genre.localeCompare(b.genre));
                break;
            case 'genre-desc':
                sortedData.sort((a, b) => b.genre.localeCompare(a.genre));
                break;
            case 'author-asc':
                sortedData.sort((a, b) => a.author.localeCompare(b.author));
                break;
            case 'author-desc':
                sortedData.sort((a, b) => b.author.localeCompare(a.author));
                break;
            default:
                break;
        }
        return setBookData(sortedData)
    }




    return (
        <>
            {/* <div className="flex items-center mb-4">
                <label htmlFor="sort" className="mr-2 font-bold">Sort By:</label>
                <select
                    id="sort"
                    className="p-2 border border-gray-500 rounded"
                    value={selectedOption}
                    onChange={handleOptionChange}
                >
                    <option value="">Select Option</option>
                    <option value="title-asc">Title (A-Z)</option>
                    <option value="title-desc">Title (Z-A)</option>
                    <option value="genre-asc">Genre (A-Z)</option>
                    <option value="genre-desc">Genre (Z-A)</option>
                    <option value="author-asc">Author (A-Z)</option>
                    <option value="author-desc">Author (Z-A)</option>
                </select>
                <label htmlFor="sort" className="mr-2 font-bold">Search :</label>
                <input type='text' placeholder='search book here..' />


            </div> */}
            {/* <div className="flex flex-col md:flex-row items-center sm:justify-start mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                    <label htmlFor="sort" className="mr-2 font-bold">Sort By:</label>
                    <select
                        id="sort"
                        className="p-2 border border-gray-500 rounded"
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option value="">Select Option</option>
                        <option value="title-asc">Title (A-Z)</option>
                        <option value="title-desc">Title (Z-A)</option>
                        <option value="genre-asc">Genre (A-Z)</option>
                        <option value="genre-desc">Genre (Z-A)</option>
                        <option value="author-asc">Author (A-Z)</option>
                        <option value="author-desc">Author (Z-A)</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <input
                        type='text'
                        id="search"
                        placeholder='Search book here..'
                        className="p-2 border border-gray-500 rounded mr-2 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none active:bg-blue-700">
                        Search
                    </button>
                </div>
            </div> */}

            <div className="flex flex-col md:flex-row items-center sm:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0 w-full ps-2">
                    <label htmlFor="sort" className="mr-2 font-bold">Sort By:</label>
                    <select
                        id="sort"
                        className="p-2 border border-gray-500 rounded focus:outline-none focus:ring focus:border-blue-300"
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option value="">Select Option</option>
                        <option value="title-asc">Title (A-Z)</option>
                        <option value="title-desc">Title (Z-A)</option>
                        <option value="genre-asc">Genre (A-Z)</option>
                        <option value="genre-desc">Genre (Z-A)</option>
                        <option value="author-asc">Author (A-Z)</option>
                        <option value="author-desc">Author (Z-A)</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <input
                        type='text'
                        id="search"
                        placeholder='Search book here..'
                        className="p-2 border border-gray-500 rounded mr-2 focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none active:bg-blue-700">
                        Search
                    </button>
                </div>
            </div>

            <div className='flex flex-wrap justify-start'>
                {
                    bookData.map((book, index) => (
                        <div key={index} className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2'>
                            <BookCard
                                title={book.title}
                                genre={book.genre}
                                author={book.author}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default BookListing;
