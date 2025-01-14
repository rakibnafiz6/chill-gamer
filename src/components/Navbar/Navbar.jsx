import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Theme from "../Theme/Theme";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                // console.log('signOut successfully');
                navigate('/');
            })
            .catch(error => {
                // console.log(error.message);
            })
    }


    return (
        <div className="navbar bg-[#21aec4] rounded-md lg:pr-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to='/'><li><a>Home</a></li></NavLink>
                        <NavLink to='/about'><li><a>About Us</a></li></NavLink>
                        <NavLink to='/about'><li><a>Contact</a></li></NavLink>
                        {
                            user && <>
                                <NavLink to='/allReviews'><li><a>All Reviews</a></li></NavLink>
                                <NavLink to='/addReview'><li><a>Add Review</a></li></NavLink>
                                <NavLink to={`/myReviews/${user?.email}`}><li><a>My Reviews</a></li></NavLink>
                                <NavLink to={`/watchList/${user?.email}`}><li><a>Game WatchList</a></li></NavLink>
                            </>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Chill Gamer</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to='/'><li><a>Home</a></li></NavLink>
                    <NavLink to='/about'><li><a>About Us</a></li></NavLink>
                    <NavLink to='/about'><li><a>Contact</a></li></NavLink>
                    {
                        user && <>
                            <NavLink to='/allReviews'><li><a>All Reviews</a></li></NavLink>
                            <NavLink to='/addReview'><li><a>Add Review</a></li></NavLink>
                            <NavLink to={`/myReviews/${user?.email}`}><li><a>My Reviews</a></li></NavLink>
                            <NavLink to={`/watchList/${user?.email}`}><li><a>Game WatchList</a></li></NavLink>
                        </>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex items-center gap-2">
                        <a className="my-anchor-element">
                            <img src={user?.photoURL} className="w-10 h-10 rounded-full object-cover" alt="" />
                        </a>
                        <Tooltip anchorSelect=".my-anchor-element" place="top">
                            {user.displayName}
                        </Tooltip>
                        <button onClick={handleSignOut} className="btn bg-[#24d624]">Logout</button></div>
                        : <div>
                            <Link to="/login" className="btn bg-[#24d624] mr-2">Login</Link>
                            <Link to="/register" className="btn bg-[#24d624]">Register</Link>
                        </div>
                }
                <section className="ml-3">
                    <Theme></Theme>
                </section>
            </div>
        </div>
    );
};

export default Navbar;