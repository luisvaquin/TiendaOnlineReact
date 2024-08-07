import React, { useState, useEffect } from 'react';
import '../navbar/scrollEffect.js'
// Importa el archivo de JavaScript para manejar el scroll

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out navbar`}>
            <div className="container mx-auto flex items-center justify-between p-3 w-full">
                <div className="text-2xl font-bold text-white">
                    <a href="/">LuisRD</a>
                </div>
                <div className="block lg:hidden">
                    <button onClick={handleMenuToggle} className="text-2xl text-white focus:outline-none">
                        {isOpen ? '✖' : '☰'}
                    </button>
                </div>
                <div className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 lg:top-0 w-full lg:w-auto bg-transparent lg:bg-transparent transition-transform transform max-[1000px]:mt-[1.3rem] max-[1000px]:bg-slate-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
                    <a href="/" className="block px-4 py-2 text-lg text-gray-100 lg:text-white lg:hover:text-gray-400">Home</a>
                    <a href="/products" className="block px-4 py-2 text-lg  lg:text-white lg:hover:text-gray-400">About</a>
                    <a href="#" className="block px-4 py-2 text-lg text-gray-100 lg:text-white lg:hover:text-gray-400">Services</a>
                    <a href="#" className="block px-4 py-2 text-lg text-gray-100 lg:text-white lg:hover:text-gray-400">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
