import React, { useState, useEffect } from 'react';
import DemoComp from './DemoComp';

const Carousel = () => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // URLs de las imágenes
        const imageUrls = [
            'https://images.unsplash.com/photo-1503416997304-7f8bf166c121?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ];

        // Cargar imágenes
        const loadImage = (url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(url);
                img.onerror = () => reject(url);
            });
        };

        // Verificar que todas las imágenes se hayan cargado correctamente
        Promise.all(imageUrls.map((url) => loadImage(url)))
            .then((loadedImages) => {
                setImages(loadedImages);
            })
            .catch((err) => {
                console.error('Error loading images:', err);
            });
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            <DemoComp />
            <div id="carouselExampleCaptions" className="relative">
                {/* Indicadores */}
                <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`mx-[3px] box-content h-[4px] w-[50px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${index === currentSlide ? 'opacity-100' : ''
                                }`}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>

                {/* Imágenes del carrusel */}
                <div className="relative w-full h-[full] overflow-hidden">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out ${index === currentSlide ? '' : 'hidden'
                                }`}
                            style={{ backfaceVisibility: 'hidden' }}
                        >
                            <div
                                className="relative overflow-hidden bg-cover bg-no-repeat"
                                style={{ backgroundPosition: '50%' }}
                            >
                                <img src={image} className="block w-full" alt={`Slide ${index + 1}`} />
                                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>
                            </div>
                            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                                <h5 className="text-xl">Slide label {index + 1}</h5>
                                <p>Some representative placeholder content for the slide {index + 1}.</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles de navegación */}
                <button
                    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 focus:text-white focus:no-underline focus:opacity-90"
                    type="button"
                    onClick={goToPrevSlide}
                >
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button
                    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 focus:text-white focus:no-underline focus:opacity-90"
                    type="button"
                    onClick={goToNextSlide}
                >
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </span>
                    <span className="sr-only">Next</span>
                </button>
            </div></>

    );
};

export default Carousel;




//Carousel