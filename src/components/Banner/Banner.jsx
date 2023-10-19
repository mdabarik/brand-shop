import BannerImage from "../../assets/home-banner.jpg";

const Banner = () => {
    return (
        <div className="relative">
            <div className="h-[500px]">
                <img className="h-[500px] w-full object-cover" src={BannerImage} alt="Banner" />
            </div>
            <div className="h-[500px] w-full bg-[#FFFFFFB3] dark:bg-[#11111192] absolute top-0 left-0 flex flex-col items-center justify-center space-y-4">
                {/* Overlay */}
                <h1 className="text-xl w-[95%] text-center md:text-4xl font-bold">Latest Technology and Electronics</h1>
                <p className="text-center w-[90%] text-[12px] md:text-sm md:w-[60%]">Explore a Universe of Innovation with Top Brands: Apple, Samsung, Sony, Google, Intel, and More. Elevate Your Tech Experience Today. Buy your daily digitals goods to make your life enjoyable and easy!</p>
                <button className="bg-[orange] rounded-lg px-3 py-1 md:px-6 md:py-2 font-bold hover:bg-[#cf8f18]">Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;