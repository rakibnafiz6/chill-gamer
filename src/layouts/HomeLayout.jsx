import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import HighsRating from "../components/HighsRating/HighsRating";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () => {
    const ratingGame = useLoaderData();
    // console.log(ratingGame);
    
    return (
        <div>
            <nav className="w-11/12 mx-auto py-4">
            <Navbar></Navbar>
            </nav>
            <section className="w-11/12 mx-auto">
            <Banner></Banner>
            </section>
            <section className="w-11/12 mx-auto mt-10">
            <HighsRating ratingGame={ratingGame}></HighsRating>
            </section>
        </div>
    );
};

export default HomeLayout;