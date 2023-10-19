import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Popular = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5901/products")
        .then(res => res.json())
        .then(data => {
            const mostPopular = data.slice(0, 3);
            setProducts(mostPopular);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold text-center'>Most Popular Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Popular;