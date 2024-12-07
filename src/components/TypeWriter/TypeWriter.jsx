import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriter = () => {
    return (
        <div>
             <h1 className="font-bold text-3xl">
            Welcome to{''}
            <span className="text-red-600 font-bold ml-2">
                <Typewriter 
                words={['Chill Gamer', 'Your Game Hub', 'The Review Platform']}
                loop={100}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                
                >
             </Typewriter>
            </span>
           </h1>
        </div>
    );
};

export default TypeWriter;