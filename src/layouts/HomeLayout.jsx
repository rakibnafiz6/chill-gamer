import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import HighsRating from "../components/HighsRating/HighsRating";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TypeWriter from "../components/TypeWriter/TypeWriter";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Testimonials from "../components/Testimonials/Testimonials";

const HomeLayout = () => {
    const ratingGame = useLoaderData();
    
    
    return (
        <div>
            <nav className="md:w-11/12 mx-auto mb-3 pt-3 sticky top-0 z-50 backdrop-blur-2xl">
            <Navbar></Navbar>
            </nav>
            <section className="mb-3 pl-14">
            <TypeWriter></TypeWriter>
            </section>
            <section className="w-11/12 mx-auto">
            <Banner></Banner>
            </section>
            <section className="w-11/12 mx-auto mt-8">
            <HighsRating ratingGame={ratingGame}></HighsRating>
            </section>
            <section className="w-11/12 mx-auto mt-8">
            <WhyChoose></WhyChoose>
            </section>
            <section className="w-11/12 mx-auto mt-8">
            <Testimonials></Testimonials>
            </section>
            <section className="mt-8">
                <Footer></Footer>
            </section>
        </div>
    );
};

export default HomeLayout;