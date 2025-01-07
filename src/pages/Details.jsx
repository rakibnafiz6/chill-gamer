
import { useLoaderData } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Swal from 'sweetalert2';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { MdCategory, MdMarkEmailUnread } from 'react-icons/md';
import { SiNamecheap } from 'react-icons/si';
import { IoCalendar } from 'react-icons/io5';


const Details = () => {
    const gamers = useLoaderData();
    // console.log(gamers);
    const { name, photo, description, rating, genres, year, userName, email } = gamers;

    const handleAddWatchList = () => {
        const gamerInfo = {
            name, photo, description,
            rating, genres,
            userName, email
        }

        fetch('https://chill-gamer-sarver.vercel.app/watchList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(gamerInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
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
            <nav className="md:w-11/12 mx-auto mb-3 pt-3 sticky top-0 z-50 backdrop-blur-2xl">
                <Navbar></Navbar>
            </nav>
            <h2 className='text-2xl font-bold text-center mb-5'>Details Page</h2>
            {/* <div className='lg:w-4/12 md:w-6/12 mx-auto'>
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
            </div> */}
            <div className="hero bg-gradient-to-tr from-[#63c463] to-[#21aec4] min-h-screen w-11/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <img
                        src={photo}
                        className="rounded-lg shadow-2xl w-[500px] h-[450px]" />
                    <div className='h-[450px] space-y-3 overflow-y-auto'>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={rating}
                                readOnly
                            />
                        </p>
                        <p className='flex items-center gap-1'><MdCategory />{genres}</p>
                        <p className='flex items-center gap-1'><IoCalendar />{year}</p>
                        <p className='flex items-center gap-1'><SiNamecheap />{userName}</p>
                        <p className='flex items-center gap-1'><MdMarkEmailUnread className='mt-1'/>{email}</p>
                        <p className="">
                            {/* {description} */}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eius placeat. Debitis quas quae quasi saepe unde praesentium aliquid similique, perspiciatis veniam ut est placeat natus voluptatem laudantium nihil quisquam sunt iusto optio tempore quaerat adipisci nam voluptas asperiores. Nemo at eum blanditiis deserunt  
                        </p>
                        <div className="card-actions">
                            <button onClick={handleAddWatchList} className="btn bg-[#21aec4]">Add to WatchList</button>
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