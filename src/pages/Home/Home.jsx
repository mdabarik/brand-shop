import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import { useState } from "react";
import Brand from "../../components/Brand/Brand";
import Popular from "../../components/Popular/Popular";

const Home = () => {

    const loadedBrand = useLoaderData();
    const [brands, setBrands] = useState(loadedBrand);

    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto flex flex-col items-center justify-center py-12 space-y-2">
                <h2 className="text-3xl"> Landscape of Trusted Brands</h2>
                <p className="text-sm text-center w-[90%]">A Deep Dive into Strategic Branding: Unraveling the Interplay Between Brand Image and Name</p>
                <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 pt-4 gap-4">
                    {
                        brands?.map(brand => <Brand key={brand._id} brand={brand} ></Brand>)
                    }
                </div>
            </div>
            <div>
                <Popular></Popular>
            </div>
        </div>
    );
};

export default Home;