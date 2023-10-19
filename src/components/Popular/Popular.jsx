import { useEffect, useState } from 'react';
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
        .catch(() => {
        })
    }, []);

    return (
        <div className='container mx-auto space-y-2 my-8 w-[90%]'>
            <h2 className='text-xl md:text-3xl font-bold text-center'>Most Popular <span className='text-[orange]'>Products</span></h2>
            <p className='text-[12px] w-[90%] md:text-sm text-center'>Discover the Top Picks: Trends, Favorites, and Must-Haves</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-3'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Popular;