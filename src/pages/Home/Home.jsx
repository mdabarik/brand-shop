import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import { useState } from "react";
import Brand from "../../components/BrandCard/BrandCard";
import Popular from "../../components/Popular/Popular";
import Team from "../../components/Team/Team";

const Home = () => {

    const loadedBrand = useLoaderData();
    const [brands, setBrands] = useState(loadedBrand);

    return (
        <div>
            <Banner></Banner>
            <div>
                <Popular></Popular>
            </div>
            <div className="container mx-auto w-[90%] flex flex-col items-center justify-center py-12 space-y-2">
                <h2 className="text-xl md:text-3xl font-bold text-center"> Landscape of  <span className="text-[orange]">Trusted Brands</span></h2>
                <p className="text-[12px] md:text-sm text-center w-[95%] md:w-[60%]">A Deep Dive into Strategic Branding: Unraveling the Interplay Between Brand Image and Name</p>
                <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 pt-4 gap-4">
                    {
                        brands?.map(brand => <Brand key={brand._id} brand={brand} ></Brand>)
                    }
                </div>
            </div>
            <div className="flex mx-auto items-center justify-center">
                <Team></Team>
            </div>
        </div>
    );
};

export default Home;