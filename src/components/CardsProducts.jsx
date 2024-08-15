import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/product';

const CardsProducts = ({ cards }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts();
        setTimeout(() => {
            setLoading(false);
        }, 350);
    }, []);


    if (loading) {
        return (
            <>
                <div className='pt-[4rem] w-full h-auto'>
                    <div aria-label="Loading..." role="status" class="flex items-center space-x-2 bg-center">
                        <svg class="h-20 w-20 animate-spin stroke-gray-500" viewBox="0 0 256 256">
                            <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                            <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="24"></line>
                            <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                            </line>
                            <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="24"></line>
                            <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                            </line>
                            <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="24"></line>
                            <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
                            <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24">
                            </line>
                        </svg>
                        <span class="text-4xl font-medium text-gray-500">Loading...</span>
                    </div>
                </div>
            </>
        )
    }

    if (cards.length === 0) {
        {/*//Agregar componente de respuesta de peticion vacia*/ }
        return (
            <>
                <div className='bg-black text-white pt-[3rem]'>
                    No hay productos en la base de datos siu
                </div>
            </>
        );
    }


    return (
        //Agregar conteiner de boostrap para cards
        <>
            <br />
            <div className="pt-[auto] p-[2rem] max-[1000px]:pt-[auto] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
             xl:grid-cols-4 2xl:grid-cols-5 items-center">
                {/*Agregar tamaño horizontal de ajuste and cards para iphone*/}

                {cards.map((element, index) => (
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-slate-800 rounded-lg max-w-xs 
                    shadow-lg" key={index}>
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                            <img className="w-full h-[auto] object-cover" src={element.avatar} alt={element.name} />
                        </div>
                        <div className="relative text-white px-6 pb-[1.4rem] mt-6">
                            <br />
                            <div className="flex justify-between">
                                <span className="block font-semibold text-[1rem]">{element.name}</span>
                                <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none items-center">
                                    Q. {element.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CardsProducts;
