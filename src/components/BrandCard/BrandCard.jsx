import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
    return (
        <div className='rounded-lg rounded-t-none drop-shadow-lg'>
            <img className='h-[220px] rounded-t-lg w-full object-cover' src={brand.imageUrl} alt="brand" />
            <div className="bg-[white] flex justify-around items-center text-black dark:bg-[black] dark:text-white rounded-lg rounded-t-none py-3">
                <h3 className="text-xl text-center">Brand: {brand.brandName}</h3>
                <Link to={`/brand/${brand.brandName}`} className="bg-[#92908d77] hover:bg-[#92908d48] rounded-lg py-2 px-4">View All</Link>
            </div>
        </div>
    );
};

export default BrandCard;