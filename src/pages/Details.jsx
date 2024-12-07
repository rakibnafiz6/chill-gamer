
import { useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Swal from 'sweetalert2';

const Details = () => {
    const gamers = useLoaderData();
    console.log(gamers);
    const { name, photo, description, rating, genres, userName, email } = gamers;

    const handleAddWatchList = ()=>{
        const gamerInfo = {
            name, photo, description, 
            rating, genres, 
            userName, email
        }
    
        fetch('http://localhost:5000/watchList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(gamerInfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Add To WatchList Successfully',
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
            <h2 className='text-2xl font-bold text-center mb-5'>Details Page</h2>
            <div className='lg:w-4/12 md:w-6/12 mx-auto'>
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
                        <button onClick={handleAddWatchList} className="btn btn-primary">Add to WatchList</button>
                    </div>
                </div>
            </div>
            </div>
            <section className="mt-24">
                <Footer></Footer>
            </section>
        </div>
    );
};

export default Details;