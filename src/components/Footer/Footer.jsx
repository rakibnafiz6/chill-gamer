import { FaFacebook, FaGithubAlt, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-6 pl-6">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="pl-5">
                        <h2 className="text-2xl font-bold">Chill Gamer</h2>
                        <p className="mt-2">Your Chill Spot for Honest Game Reviews!</p>
                    </div>


                    <div className="">
                        

                            <nav className="mt-2 space-y-2 flex flex-col pl-7">
                                <h6 className="footer-title">Quick Links</h6>
                                <Link to='/' className="link link-hover">Home</Link>
                                <Link to='/about' className="link link-hover">About Us</Link>
                                <Link to='/allReviews' className="link link-hover">All Reviews</Link>
                                <Link to='/addReview' className="link link-hover">Add Reviews</Link>
                            </nav>
                        
                    </div>

                    
                    <div className="pl-7">
                        <h3 className="footer-title">Contact Us</h3>
                        <p className="hover:underline">Email: support@chillgamer.com</p>
                        <p>Phone: +880  1877 803 510</p>
                        <div className="mt-4 flex space-x-4 text-2xl">
                            <Link to='https://www.facebook.com/nafiz.al.rakib/'><FaFacebook /></Link>
                            <Link to='https://github.com/rakibnafiz6'><FaGithubAlt/></Link>
                            <FaXTwitter />
                            <FaInstagramSquare />
                            
                        </div>
                    </div>
                </div>


                <div className="text-center border-t border-gray-700 pt-4 mt-6">
                    <p>© 2024 Chill Gamer. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;