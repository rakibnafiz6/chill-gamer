import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const GameWatchList = () => {
    const watchList = useLoaderData();
    return (
        <div>
            <nav className="w-11/12 mx-auto py-4">
                <Navbar></Navbar>
            </nav>
            <h2 className="text-center font-bold text-2xl mb-5">Game Watch List</h2>
            <div className="overflow-x-auto w-11/12 mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Rating </th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                        watchList.map((watch, idx) => <tr key={idx}>
                            <th>{idx + 1}</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={watch.photo}
                                                alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{watch.name}</div>
                                       
                                    </div>
                                </div>
                            </td>
                            <td>
                               {watch.description} 
                                
                            </td>
                            <td>{watch.rating}</td>
                            <th>
                                {watch.genres}
                            </th>
                        </tr>)
                      }  
                       
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Genre</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <section className="mt-24">
                <Footer></Footer>
            </section>
        </div>
    );
};

export default GameWatchList;