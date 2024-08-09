import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/product';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsProducts from '../components/CardsProducts';
import SectionHead from '../components/SectionHead';
import NavbarAb from '../components/NavbarAb';
import CountrySelectForm from '../components/CountrySelectForm ';

function Products() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProductsList();
    }, [0]);

    const getProductsList = async () => {
        const data = await getProducts();
        setProduct(data); // Establece los datos en el estado
    };

    return (
        <>

            <br />
            <br />
            <div className='bg-slate-300 w-full h-[auto]'>
                <div className=''>
                    <CardsProducts cards={product} />
                </div>
                <SectionHead />
                <br />
            </div>
        </>
    );
}

export default Products;
