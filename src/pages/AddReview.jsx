import Swal from 'sweetalert2';
import Navbar from '../components/Navbar/Navbar';

const AddReview = () => {

    const handleAddReview = (e)=>{
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

        if(rating > 10){
            Swal.fire({
                title: 'Error!',
                text: 'Rating must be (1-10)',
                icon: 'error',
                confirmButtonText: 'OK'
              })
            return;
        }
        if(year < 2021 || year > 2024){
            Swal.fire({
                title: 'Error!',
                text: 'Publishing year should be (2021-2024)',
                icon: 'error',
                confirmButtonText: 'OK'
              })
            return;
        }

        fetch('http://localhost:5000/gamers', {
            method: 'POST',
            headers: {
            'content-type': 'application/json'
            },
            body: JSON.stringify(addInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Add New Gamer To DB',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        }    

        })

    }

    return (
        <div>
            <nav className="w-11/12 mx-auto py-4">
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
                        placeholder="user name"
                        className="input input-bordered input-accent w-full" />
                    <input
                        type="text"
                        name='email'
                        placeholder="user email"
                        className="input input-bordered input-accent w-full" />
                </div>
                <button className='btn w-full bg-accent'>Submit</button>
            </form>
        </div>
    );
};

export default AddReview;