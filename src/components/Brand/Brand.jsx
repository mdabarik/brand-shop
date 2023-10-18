import { useLoaderData, useParams } from "react-router-dom";
import BrandSlider from "./BrandSlider";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Brand = () => {

    const { brand } = useParams();
    const allProduct = useLoaderData();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log(allProduct, "useFe", brand);
        const filtered = allProduct.filter(product => product.brandName == brand);
        console.log(filtered);
        setProducts(filtered);
    }, [])


    return (
        <div>
            <BrandSlider></BrandSlider>
            <div>
                
                {
                    products.length == 0 ? <h1 className="text-3xl font-bold text-center py-5">No products available for - {brand}</h1> :
                        <>
                        <h2 className="text-3xl text-center py-5">All Products: {brand}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto border-2">
                            {
                                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                            }
                        </div></>
                }
            </div>
        </div>
    );
};

export default Brand;