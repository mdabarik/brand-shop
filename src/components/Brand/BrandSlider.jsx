import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from "./Slide";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BrandSlider = () => {

    const [sliders, setSliders] = useState([]);
    const { brand } = useParams();

    useEffect(() => {
        fetch("https://brand-shop-server-kp2nch5a6-mdabarik.vercel.app/sliders")
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(slide => slide.brandName == brand);
                setSliders(filtered);
            })
            .catch(() => {
            })
    }, []);


    return (
        <div className='w-full h-[500px]'>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    sliders.map(slider => {
                        return <SwiperSlide key={slider._id}>
                            <Slide slider={slider}></Slide>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    );
};

export default BrandSlider;