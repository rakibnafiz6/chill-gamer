import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Details = () => {
    const gamers = useLoaderData();
    const { name, photo, description, rating, genres, userName, email } = gamers;
    return (
        <div>
            <nav className="w-11/12 mx-auto py-4">
            <Navbar></Navbar>
            </nav>
            <h2 className='text-2xl font-bold text-center mb-5'>Details Page</h2>
            <div className='w-4/12 mx-auto'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={photo}
                        alt="game"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {name}</h2>
                    <p className='text-gray-500'>Rating: {rating}</p>
                    <p className='text-gray-500'>Genre: {genres}</p>
                    <p className='text-gray-500'>UserName: {userName}</p>
                    <p className='text-gray-500'>Email: {email}</p>
                    <p className='text-gray-500'>{description}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add to WatchList</button>
                    </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Details;