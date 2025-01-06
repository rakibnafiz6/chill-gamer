import { Link } from "react-router-dom";

const HighsRating = ({ ratingGame }) => {


    return (
        <div className="w-full">
            <h2 className="text-3xl font-bold text-center mb-8">High Ratings Game</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                {ratingGame.map(rating =><div key={rating._id} className="card card-compact bg-base-100 w-60 h-72 shadow-xl rounded-none">
                        <figure className="h-36">
                            <img
                            className="w-full h-full"
                                src={rating.photo}
                                alt="games" />
                        </figure>
                        <div className=" h-[99px] pl-2">
                            <h2 className="card-title">{rating.name}</h2>
                            <p>{`${rating.description.slice(0, 50)}`}...</p>
                            <div className="card-actions">
                            <Link to={`/details/${rating._id}`}><button className="btn bg-[#21aec4] mt-2">See More</button></Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HighsRating;