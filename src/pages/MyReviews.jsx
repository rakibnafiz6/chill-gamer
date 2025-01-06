import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Swal from "sweetalert2";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

const MyReviews = () => {
    const reviews = useLoaderData();
    const [users, setUsers] = useState(reviews);
    


    const handleDelete = (id) => {
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://chill-gamer-sarver.vercel.app/gamers/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                            
                            const remaining = users.filter(user => user._id !== id);
                            setUsers(remaining);

                           
                        }
                        
                    })
            }
        });

    }



    return (
        <div>
             <nav className="md:w-11/12 mx-auto mb-3 pt-3 sticky top-0 z-50 backdrop-blur-2xl">
            <Navbar></Navbar>
            </nav>
            <h2 className="text-center text-2xl font-bold mb-5">My Reviews</h2>
            <div className="overflow-x-hidden  md:w-11/12 mx-auto lg:pl-16">
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
                            users.map((review, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{review.name}</td>
                                <td>{review.rating}</td>
                                <td>{review.genres}</td>
                                <td><div>
                                    <Link to={`/update/${review._id}`}><button className="btn mb-2 md:mr-2 btn-accent">Update</button></Link>
                                    <button
                                        onClick={() => handleDelete(review._id)}
                                        className="btn btn-error">Delete</button>
                                </div></td>
                            </tr>)
                        }

                    </tbody>
                </table>

            </div>
            <section className="mt-24">
                <Footer></Footer>
            </section>

        </div>
    );
};

export default MyReviews;