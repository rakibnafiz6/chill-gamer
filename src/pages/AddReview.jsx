import Swal from 'sweetalert2';
import Navbar from '../components/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Footer from '../components/Footer/Footer';

const AddReview = () => {
    const { user } = useContext(AuthContext);

    const handleAddReview = (e) => {
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
        const addInfo = {
            photo, name, description, rating, year, genres, userName, email
        }


        if (rating > 5) {
            Swal.fire({
                title: 'Error!',
                text: 'Rating must be (1-5)',
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
        fetch('https://chill-gamer-sarver.vercel.app/gamers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add New Gamer To DB',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                }

            })

    }

    return (
        <div>
            <nav className="md:w-11/12 mx-auto mb-3 pt-3 sticky top-0 z-50 backdrop-blur-2xl">
                <Navbar></Navbar>
            </nav>
            <h2 className='text-center mb-4 text-2xl font-bold'>Add Review</h2>
            <form onSubmit={handleAddReview} className='w-11/12 mx-auto'>
                <div className='flex gap-3 mb-3'>
                    <input
                        type="url"
                        name='photo'
                        placeholder="game image"
                        className="input input-bordered input-accent w-full" />
                    <input
                        type="text"
                        name='name'
                        placeholder="game name"
                        className="input input-bordered input-accent w-full" />
                </div>
                <div className='flex gap-3 mb-3'>
                    <input
                        type="text"
                        name='description'
                        placeholder="review description"
                        className="input input-bordered input-accent w-full" />
                    <input
                        type="number"
                        name='rating'
                        placeholder="rating"
                        className="input input-bordered input-accent w-full" />
                </div>
                <div className='flex gap-3 mb-3'>
                    <input
                        type="text"
                        name='year'
                        placeholder="publishing year"
                        className="input input-bordered input-accent w-full" />

                    <select className='w-full input input-bordered input-accent'
                        name='genres'>
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
                <button className='btn w-full bg-accent'>Submit</button>
            </form>
            <section className="mt-24">
                <Footer></Footer>
            </section>
        </div>
    );
};

export default AddReview;