import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Slide from "./Slide";

const Team = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5901/teams")
            .then(res => res.json())
            .then(data => {
                setTeams(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className='container mx-auto flex flex-col items-center justify-center pb-10 w-[90%] md:w-[100%] space-y-3'>
            <h2 className='text-2xl font-bold text-center'>Our Team <span className="text-[orange] text-3xl">Members</span></h2>
            <p className='text-sm text-center'>Get to Know the Heart and Soul of Brand Shop</p>
            <div className="pb-8 w-[100vw] container">
                <Swiper
                    slidesPerView={2}
                    loop={true}
                    spaceBetween={16}
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
                        teams.map(team => {
                            return <SwiperSlide key={team.id}>
                                <Slide team={team}></Slide>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Team;