import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import HighsRating from "../components/HighsRating/HighsRating";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TypeWriter from "../components/TypeWriter/TypeWriter";
import WhyChoose from "../components/WhyChoose/WhyChoose";

const HomeLayout = () => {
    const ratingGame = useLoaderData();
    
    
    return (
        <div>
            <nav className="w-11/12 mx-auto mb-3 mt-10">
            <Navbar></Navbar>
            </nav>
            <section className="mb-10 pl-14">
            <TypeWriter></TypeWriter>
            </section>
            <section className="w-11/12 mx-auto">
            <Banner></Banner>
            </section>
            <section className="w-11/12 mx-auto mt-10">
            <HighsRating ratingGame={ratingGame}></HighsRating>
            </section>
            <section className="w-11/12 mx-auto mt-10">
            <WhyChoose></WhyChoose>
            </section>
            <section className="mt-24 pl-2 lg:pl-0">
                <Footer></Footer>
            </section>
        </div>
    );
};

export default HomeLayout;