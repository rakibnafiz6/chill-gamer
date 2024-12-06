import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const GameWatchList = () => {
    return (
        <div>
             <nav className="w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </nav>
            <h2>Game Watch List</h2>
            <section className="mt-24">
                <Footer></Footer>
            </section>
        </div>
    );
};

export default GameWatchList;