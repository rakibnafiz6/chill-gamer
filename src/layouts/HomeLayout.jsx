import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import HighsRating from "../components/HighsRating/HighsRating";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

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
            <section className="mt-24">
                <Footer></Footer>
            </section>
        </div>
    );
};

export default HomeLayout;