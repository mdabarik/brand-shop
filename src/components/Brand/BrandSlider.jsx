import { useLoaderData } from "react-router-dom";

const BrandSlider = () => {

    const allProduct = useLoaderData();
    console.log(allProduct);

    return (
        <div className='w-full h-[400px] bg-[blue]'>
            Brand Banner
        </div>
    );
};

export default BrandSlider;