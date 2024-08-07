import React from 'react';

const CardsProducts = ({ cards }) => {

    if (cards.length === 0) {
        //Agregar componente de respuesta
        return <div>Cargando productos...</div>;
    }

    return (
        //Agregar conteiner de boostrap para cards
        <>
            <div className="pt-[6rem] p-[3rem] max-[1000px]:pt-[5rem] grid grid-cols-4 max-[1000px]:grid-cols-1
             items-center justify-center max-[1000px]:flex-wrap">
                {cards.map((element, index) => (
                    <div className="flex-shrink-0 m-6 relative overflow-hidden bg-slate-500 rounded-lg max-w-xs 
                    shadow-lg" key={index}>
                        <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div className="relative pt-10 px-10 flex items-center justify-center">
                            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                            <img className="w-full h-[auto] object-cover" src={element.avatar} alt={element.name} />
                        </div>
                        <div className="relative text-white px-6 pb-6 mt-6">
                            <span className="block opacity-75 -mb-1">{element.description}</span>
                            <br />
                            <div className="flex justify-between">
                                <span className="block font-semibold text-xl">{element.name}</span>
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