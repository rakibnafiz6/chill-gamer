import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Swal from "sweetalert2";


const AllReviews = () => {
    const loadedGamer = useLoaderData();
    const [gamers, setGamers] = useState(loadedGamer);
    const [sort, setSort] = useState('');
    const [genre, setGenre] = useState('');

    const handleSort = sortType =>{
        setSort(sortType);

        if(sortType === 'Ratings'){
            const sortRating = [...gamers].sort((a, b)=> a.rating - b.rating );
            setGamers(sortRating);
            Swal.fire({
                title: 'Success!',
                text: 'Sort Rating ascending order',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }
        else{
            const sortYear = [...gamers].sort((a, b)=> b.year - a.year);
            setGamers(sortYear);
            Swal.fire({
                title: 'Success!',
                text: 'Sort Year descending order',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }
    }

    const handleGenre = genre =>{
        setGenre(genre);

         if(genre === 'Action'){
            const filterAction = [...gamers].filter(gamer => gamer.genres === genre);
          setGamers(filterAction);
          
        }
         else if(genre === 'RPG'){
            const filterRpg = [...gamers].filter(gamer => gamer.genres === genre);
            setGamers(filterRpg);
            
        }

        else{
            const filterAdventure = [...gamers].filter(gamer => gamer.genres === genre);
            setGamers(filterAdventure);
            
        }
        
    } 


    return (
        <div>
            <nav className="w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </nav>
           <div className="flex gap-4 justify-center">
             {/* rating and year */}
             <div className="dropdown flex justify-center mb-10">
                <div tabIndex={0} role="button" className="btn btn-accent m-1">
                    {
                        sort ? `Sort by: ${sort}` : 'Sort by'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={()=> handleSort('Year')}><a>Year</a></li>
                </ul>
            </div>
            {/* genres */}
            <div className="dropdown flex justify-center mb-10">
                <div tabIndex={0} role="button" className="btn btn-accent m-1">
                    {
                        genre ? `Genres by: ${genre}` : 'Genres'
                    }
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=> handleGenre('Action')}><a>Action</a></li>
                    <li onClick={()=> handleGenre('RPG')}><a>RPG</a></li>
                    <li onClick={()=> handleGenre('Adventure')}><a>Adventure</a></li>
                </ul>
            </div>


           </div>
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
                            <p>Genre: {gamer.genres}</p>
                            <p>Rating: {gamer.rating}</p>
                            <div className="card-actions">
                                <Link to={`/details/${gamer._id}`}><button className="btn btn-accent">Explore Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <section className="mt-24">
                <Footer></Footer>
            </section>
        </div>
    );
};

export default AllReviews;