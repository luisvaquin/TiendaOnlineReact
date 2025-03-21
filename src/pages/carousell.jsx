import React, { useState } from 'react';
import ModalImageLu from './modal';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import SwipeDownIcon from '@mui/icons-material/SwipeDown';
import SwipeUpIcon from '@mui/icons-material/SwipeUp';// Asegúrate de importar correctamente tu componente ModalImageLu

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "https://i.postimg.cc/Z5kj3pwn/IMG-20250321-WA0026.jpg",
        "https://i.postimg.cc/vTcX7zRg/IMG-20250321-WA0024.jpg",
        "https://i.postimg.cc/1RjvmL6p/IMG-20250321-WA0025.jpg",
        "https://i.postimg.cc/bvhCXknW/IMG-20250321-WA0023.jpg",
        "https://i.postimg.cc/R04Rp95z/IMG-20250321-WA0027.jpg",
        "https://i.postimg.cc/QdpmqCzb/IMG-20250321-WA0028.jpg",
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div id="controls-carousel" className="relative w-full">
            {/* Carousel wrapper */}
            <div className="relative h-[100vh] overflow-hidden rounded-lg md:h-96">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={image}
                            className="w-full h-full object-cover"
                            alt={`carousel-item-${index}`}
                        />
                    </div>
                ))}
            </div>

            {/* Botón de navegación izquierda */}
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            {/* Botón de navegación derecha */}
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>

            {/* Botón centrado */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <ModalImageLu />
            </div>
        </div>
    );
};

export default ImageCarousel;