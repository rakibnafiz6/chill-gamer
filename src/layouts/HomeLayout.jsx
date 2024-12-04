import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <nav className="w-11/12 mx-auto py-4">
            <Navbar></Navbar>
            </nav>
            <section className="w-11/12 mx-auto">
            <Banner></Banner>
            </section>
        </div>
    );
};

export default HomeLayout;