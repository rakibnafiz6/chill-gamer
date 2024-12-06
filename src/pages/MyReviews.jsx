import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MyReviews = () => {
    const reviews = useLoaderData();





    return (
        <div>
            <nav className="w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </nav>
            <h2 className="text-center text-2xl font-bold mb-5">My Reviews</h2>
            <div className="overflow-x-auto w-11/12 mx-auto lg:pl-16">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Genre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((review, idx)=><tr>
                            <th>{idx + 1}</th>
                            <td>{review.name}</td>
                            <td>{review.rating}</td>
                            <td>{review.genres}</td>
                            <td><div>
                                <button className="btn mb-2 lg:mr-2">Update</button>
                                <button className="btn">Delete</button>
                                </div></td>
                        </tr>)
                        }
                       
                    </tbody>
                </table>
               
            </div>

        </div>
    );
};

export default MyReviews;