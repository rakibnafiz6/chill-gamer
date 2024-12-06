import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="pl-5">
                        <h2 className="text-2xl font-bold">Chill Gamer</h2>
                        <p className="mt-2">Your Chill Spot for Honest Game Reviews!</p>
                    </div>


                    <div className="">
                        

                            <nav className="mt-2 space-y-2 flex flex-col">
                                <h6 className="footer-title">Services</h6>
                                <a className="link link-hover">Branding</a>
                                <a className="link link-hover">Design</a>
                                <a className="link link-hover">Marketing</a>
                                <a className="link link-hover">Advertisement</a>
                            </nav>
                        
                    </div>


                    <div className="">
                        <h3 className="footer-title">Contact Us</h3>
                        <p className="hover:underline">Email: support@chillgamer.com</p>
                        <p>Phone: +880  1877 803 510</p>
                        <div className="mt-4 flex space-x-4">
                            <FaFacebook />
                            <FaXTwitter />
                            <FaInstagramSquare />
                            <IoLogoYoutube />
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