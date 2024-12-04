import Navbar from '../components/Navbar/Navbar';

const AddReview = () => {
    return (
        <div>
            <nav className="w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </nav>
            <h2>add review</h2>
            <form>
                <div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-accent w-full" />
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-accent w-full" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;