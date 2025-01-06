import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div>
             <Carousel autoPlay>
                <div>
                    <img className="" src="https://i.ibb.co.com/NZSCdzB/wp13111906.jpg" />
                </div>
                <div>
                    <img className="" src="https://i.ibb.co.com/fNvZ2kL/images.jpg" />
                    
                </div>
                <div>
                    <img className="" src="https://i.ibb.co.com/f2DRqgm/bhP3bQi.jpg" />
                </div>
            </Carousel>
        </div>

    );
};

export default Banner;