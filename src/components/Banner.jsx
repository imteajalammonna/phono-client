import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";


const Banner = ({ autoPlayInterval }) => {
    const slides = [
        { imgSrc: "https://i.ibb.co/5T5766N/phono-slider-1.webp",textP: "ZANIA BLACK EDITION",
         text: "FULL SCREEN DISPLAY!", textPosition: "left-[68%] ", color: 'text-white', button: 'white-btn' },
        { imgSrc: "https://i.ibb.co/ZRsm2c9/phono-slider-2.webp",textP: "4K RESOLUTION",
         text: "CURVY BEVEL DUAL AUDIO", textPosition: "right-[10%] left-[38%]", color: 'text-black', button: 'black-btn' },
        { imgSrc: "https://i.ibb.co/55Tq4DY/phono-slider-3.webp",textP: "DELTA ZERTIGA PROCESSOR",
         text: "EXCLUSIVE STEEL FRAME!", textPosition: "left-[79%]", color: 'text-white', button: 'white-btn' },
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
    }, [currentSlide , autoPlayInterval]);
 
    return (
        <div className="relative overflow-hidden w-full h-[26vh] md:h-[92vh] mx-auto">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                        <img src={slide.imgSrc} alt={`Slide ${index + 1}`} className="w-full h-[26vh] md:h-full " />
                        <div className={`absolute ${slide.textPosition}`} style={{ top: '50%', transform: 'translate(-50%, -50%)' }}>
                            <h4 className={`text-[8px] md:text-2xl md:font-bold md:space-x-10 ${slide.color}`}>{slide.textP}</h4>
                            <h1 className={`text-[18px] md:text-8xl mb-4 md:mb-10 font-bold ${slide.color} `} >{slide.text}</h1>
                            <button className={`p-2 py-1.5 md:p-3 text-[12px] md:text-lg md:px-14 ${slide.button}`}>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white md:p-4 p-1 rounded-full" onClick={prevSlide}><MdArrowBackIosNew></MdArrowBackIosNew></button>
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-1 md:p-4 rounded-full" onClick={nextSlide}><MdArrowForwardIos></MdArrowForwardIos></button>
        </div>
    );
};

Banner.propTypes = {
    autoPlayInterval: PropTypes.number,
}

export default Banner;
