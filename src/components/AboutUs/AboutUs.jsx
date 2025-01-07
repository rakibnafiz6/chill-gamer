import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const AboutUs = () => {
    return (
        <>
        <nav className="md:w-11/12 mx-auto mb-3 pt-3 sticky top-0 z-50 backdrop-blur-2xl">
        <Navbar></Navbar>
        </nav>
        <div className=" text-gray-800 dark:text-gray-100 w-11/12 mx-auto">
            {/* Hero Section */}
            <section className="bg-[#21aec4] text-white py-16 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">About Chill Gamer</h1>
                    <p className="text-lg leading-relaxed">
                        Your ultimate destination for honest game reviews, community-driven insights, and a passion for gaming. Chill Gamer is where players come together to discover, share, and discuss the games they love.
                    </p>
                </div>
            </section>

            {/* Our Mission */}
            <section className="max-w-6xl mx-auto py-12 px-4">
                <h2 className="text-3xl font-semibold text-center mb-6">Our Mission</h2>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 text-center">
                    At Chill Gamer, our mission is to create a trusted platform where gamers can explore unbiased reviews, connect with a like-minded community, and make informed decisions about the games they play. We aim to celebrate the art and creativity of gaming by empowering gamers worldwide.
                </p>
            </section>

            {/* Core Values */}
            <section className="bg-gray-200 dark:bg-gray-800 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-6">Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-[#b090c1] dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Honesty</h3>
                            <p>Providing unbiased and honest reviews to build trust within the gaming community.</p>
                        </div>
                        <div className="bg-[#63c463] dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Passion</h3>
                            <p>Celebrating the art of gaming and sharing the love for games with the world.</p>
                        </div>
                        <div className="bg-[#21aec4] dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Community</h3>
                            <p>Creating a space for gamers to connect, share, and grow together.</p>
                        </div>
                        <div className="bg-[#b090c1] dark:bg-gray-700 p-6 rounded-lg shadow-md text-center">
                            <h3 className="text-xl font-bold mb-2">Innovation</h3>
                            <p>Continuously improving and adapting to the evolving world of gaming.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="max-w-6xl mx-auto py-12 px-4">
                <h2 className="text-3xl font-semibold text-center mb-6">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center">
                        <img
                            src="https://i.ibb.co.com/kHrz8fL/download.jpg"
                            alt="Team Member"
                            className="w-32 h-32 mx-auto rounded-full object-cover"
                        />
                        <h3 className="text-xl font-bold mt-4">Alex Johnson</h3>
                        <p className="text-gray-600 dark:text-gray-300">Founder & CEO</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="https://i.ibb.co.com/Lry5Z9g/download.jpg"
                            alt="Team Member"
                            className="w-32 h-32 mx-auto rounded-full object-cover"
                        />
                        <h3 className="text-xl font-bold mt-4">Jamie Lee</h3>
                        <p className="text-gray-600 dark:text-gray-300">Content Strategist</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="https://i.ibb.co.com/1dy4vZh/download.jpg"
                            alt="Team Member"
                            className="w-32 h-32 mx-auto rounded-full object-cover"
                        />
                        <h3 className="text-xl font-bold mt-4">Chris Martinez</h3>
                        <p className="text-gray-600 dark:text-gray-300">Community Manager</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-[#21aec4] text-white py-12">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Be part of the Chill Gamer community and help us shape the future of gaming. Explore our reviews, share your thoughts, and stay updated with the latest in gaming.
                    </p>
                    
                </div>
            </section>
        </div>
        <section className="w-11/12 mx-auto mt-8">
                <Footer></Footer>
        </section>
        </>
    );
};

export default AboutUs;