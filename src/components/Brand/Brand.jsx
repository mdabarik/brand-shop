
const Brand = ({ brand }) => {
    return (
        <div className='rounded-lg rounded-t-none'>
            <img className='h-[220px] rounded-t-lg w-full object-cover' src={brand.imageUrl} alt="brand" />
            <div className="bg-[black] flex justify-around items-center text-white dark:bg-[white] dark:text-black rounded-lg rounded-t-none py-3">
                <h3 className="text-xl text-center">Brand: {brand.brandName}</h3>
                <button className="bg-[#92908d77] hover:bg-[#92908d48] rounded-lg py-2 px-4">View All</button>
            </div>
        </div>
    );
};

export default Brand;