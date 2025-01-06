import React, { useState } from 'react';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [statusMessage, setStatusMessage] = useState('');


    const handleSubscribe = (e)=>{
        e.preventDefault();
        if(!email || !email.includes('@')){
            setStatusMessage('Please enter a valid email address.');
            return;
        }
        setTimeout(()=>{
            setStatusMessage("Thank you for subscribing to Chill Gamer!");
            setEmail('');
        }, 1000)
    }



    return (
        <div className="bg-gradient-to-r from-[#21aec4] to-[#b090c1] py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Chill Gamer</h2>
          <p className="mb-6">
            Subscribe to our newsletter and get the latest reviews, game highlights, and exclusive offers straight to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              className="w-full sm:w-auto px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#24d624] bg-opacity-50 hover:bg-[#24d624] rounded-md font-semibold transition"
            >
              Subscribe
            </button>
          </form>
          {statusMessage && (
            <p className="mt-4 text-sm text-[#24d624]">{statusMessage}</p>
          )}
        </div>
      </div>
    );
};

export default NewsLetter;