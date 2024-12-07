import { Link } from "react-router-dom";

const HighsRating = ({ ratingGame }) => {
    

    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-6">High ratings Card</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {ratingGame.map(rating => <div key={rating._id} className="card bg-neutral text-neutral-content lg:w-96">
                <div className="card-body">
                    <h2 className="card-title">Name: {rating.name}</h2>
                    <p>Publishing year: {rating.year}</p>
                    <p>Rating: {rating.rating}</p>
                    <p>Genres: {rating.genres}</p>
                    <div className="card-actions">
                        <Link to={`/details/${rating._id}`}><button className="btn">Explore Details</button></Link>
                    </div>
                </div>
            </div>)}
           </div>
        </div>
    );
};

export default HighsRating;