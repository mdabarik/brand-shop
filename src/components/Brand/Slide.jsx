
const Slide = ({ slider }) => {
    
    const { imageUrl, subtitle, title } = slider;
    console.log(imageUrl);

    return (
        <div className="h-[500px] w-[100vw] relative">
            <img className="w-full h-full object-cover" src={imageUrl} alt="image" />
            <div className="h-[500px] w-[100vw] bg-[#00000090] absolute top-0 left-0 flex  flex-col items-center justify-center space-y-5">
                <h1 className="text-center text-white text-6xl font-bold">{title}</h1>
                <p className="text-lg text-center text-white">{subtitle}</p>
                <button className="btn btn-secondary text-center" >Buy Now</button>
            </div>
        </div>
    )
};

export default Slide;