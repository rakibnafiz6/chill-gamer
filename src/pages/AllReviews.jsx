import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";


const AllReviews = () => {
    const loadedGamer = useLoaderData();
    const [gamers, setGamers] = useState(loadedGamer);
    return (
        <div>
            <nav className="w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </nav>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    gamers.map(gamer => <div key={gamer._id} className="card bg-base-100 shadow-xl">
                        <figure className="h-56 p-3">
                            <img
                                src={gamer.photo}
                                className="rounded-md"
                                alt="Game" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Name: {gamer.name}</h2>
                            <p>Publishing Year: {gamer.year}</p>
                            <p>Rating: {gamer.rating}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Explore Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AllReviews;