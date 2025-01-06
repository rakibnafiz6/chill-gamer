import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { AuthContext } from '../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../components/Footer/Footer';

const UpdateReviews = () => {
     const { user } = useContext(AuthContext);
     const review = useLoaderData();
     const {_id, photo, name, rating, year, description, genres } = review;
     
     const handleUpdateReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genres = form.genres.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const updateInfo = {
            photo, name, description, rating, year, genres,
        }
        

        if (rating > 10) {
            Swal.fire({
                title: 'Error!',
                text: 'Rating must be (1-10)',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return;
        }
        if (year < 2020 || year > 2024) {
            Swal.fire({
                title: 'Error!',
                text: 'Publishing year should be (2020-2024)',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return;
        }
        // game
        fetch(`https://chill-gamer-sarver.vercel.app/updateReview/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Game Review',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }

            })

     }

    return (
        <div>
            <nav className="md:w-11/12 mx-auto mb-3 pt-3 sticky top-0 z-50 backdrop-blur-2xl">
            <Navbar></Navbar>
            </nav>
            <h2 className='text-center font-bold text-2xl mb-5'>Update Reviews</h2>
            <form onSubmit={handleUpdateReview} className='w-11/12 mx-auto'>
                <div className='flex gap-3 mb-3'>
                    <input
                        type="url"
                        name='photo'
                        defaultValue={photo}
                        placeholder="game image"
                        className="input input-bordered input-accent w-full" />
                    <input
                        type="text"
                        name='name'
                        defaultValue={name}
                        placeholder="game name"
                        className="input input-bordered input-accent w-full" />
                </div>
                <div className='flex gap-3 mb-3'>
                    <input
                        type="text"
                        name='description'
                        defaultValue={description}
                        placeholder="review description"
                        className="input input-bordered input-accent w-full" />
                    <input
                        type="number"
                        name='rating'
                        defaultValue={rating}
                        placeholder="rating"
                        className="input input-bordered input-accent w-full" />
                </div>
                <div className='flex gap-3 mb-3'>
                    <input
                        type="text"
                        name='year'
                        defaultValue={year}
                        placeholder="publishing year"
                        className="input input-bordered input-accent w-full" />

                    <select className='w-full input input-bordered input-accent'
                        name='genres' defaultValue={genres}>
                        <option value="Action">Action</option>
                        <option value="RPG">RPG</option>
                        <option value="Adventure">Adventure</option>
                    </select>
                </div>
                <div className='flex gap-3 mb-3'>
                        <input
                        type="text"
                        name='userName'
                        defaultValue={user.displayName}
                        placeholder="user name"
                        className="input input-bordered input-accent w-full"
                        disabled />
                    <input
                        type="email"
                        name='email'
                        defaultValue={user.email}
                        placeholder="user email"
                        className="input input-bordered input-accent w-full"
                        disabled />
                </div>
                <button className='btn w-full bg-accent'>Update</button>
            </form>
            <section className="mt-24">
                <Footer></Footer>
            </section>
        </div>
    );
};

export default UpdateReviews;