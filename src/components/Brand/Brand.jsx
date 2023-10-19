import { useLoaderData, useParams } from "react-router-dom";
import BrandSlider from "./BrandSlider";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Brand = () => {
    const { brand } = useParams();
    const allProduct = useLoaderData();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const filtered = allProduct.filter(product => product.brandName == brand);
        setProducts(filtered);
    }, [])


    return (
        <div>
            <BrandSlider></BrandSlider>
            <div className="my-8">

                {
                    products.length == 0 ? <h1 className="text-3xl font-bold text-center py-5">No products available for - {brand}</h1> :
                        <>
                            <h2 className="text-3xl text-center py-5 font-bold">All Products: <span className="text-[orange]">{brand}</span></h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
                                {
                                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                                }
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Brand;