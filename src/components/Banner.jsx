import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";


const Banner = ({ autoPlayInterval }) => {
    const slides = [
        { imgSrc: "https://i.ibb.co/5T5766N/phono-slider-1.webp", text: "EXCLUSIVE STEEL FRAME", textPosition: "left-[75%] ", color: 'text-white', button: 'white-btn' },
        { imgSrc: "https://i.ibb.co/ZRsm2c9/phono-slider-2.webp", text: "Discover Exciting Offers", textPosition: "right-[10%] left-[38%]", color: 'text-black', button: 'black-btn' },
        { imgSrc: "https://i.ibb.co/55Tq4DY/phono-slider-3.webp", text: "Join Us Today!", textPosition: "left-[80%]", color: 'text-white', button: 'white-btn' },
    ]
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    }; useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, autoPlayInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlide, autoPlayInterval]);

    return (
        <div className="relative overflow-hidden w-full md:h-[92vh] mx-auto">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                        <img src={slide.imgSrc} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                        <div className={`absolute ${slide.textPosition}`} style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
                            <div className={`text-xl md:text-8xl mb-10  font-bold ${slide.color} `} >{slide.text}</div>
                            <button className={`p-3 md:px-8 ${slide.button}`}>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-4 rounded-full" onClick={prevSlide}><MdArrowBackIosNew></MdArrowBackIosNew></button>
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-4 rounded-full" onClick={nextSlide}><MdArrowForwardIos></MdArrowForwardIos></button>
        </div>
    );
};

Banner.propTypes = {
    autoPlayInterval: PropTypes.number,
}

export default Banner;
