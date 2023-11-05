import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const BannerSwiper = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            //   EffectCoverflow ={{ slideShadows: Boolean }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img src="https://i.ibb.co/WsPv277/pexels-rafael-cosquiere-2041540.jpg" className='w-full h-[250px]  md:h-[900px]' alt="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 md:top-1/2">
                    <h1 className='absolute bottom-0  md:left-20 text-xl md:text-6xl font-bold font-poppins text-white w-2/3 md:w-1/3'>A haven of wisdom where minds flourish, and ideas <span className='text-yellow-300'>Bloom</span></h1>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/HdPVQPy/mt-1519-content-bg-1.jpg" className='w-full h-[250px] md:h-[900px]' alt="" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-2/3 md:top-1/2">
                    <h1 className='absolute bottom-0  md:left-20 text-xl md:text-6xl font-bold font-poppins text-white w-2/3 md:w-1/3'>Unlock worlds, connect communities, through the joy of   <span className='text-yellow-300'>Reading</span></h1>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/t3mk1TN/pexels-ivo-rainha-1290141.jpg" className='w-full h-[250px] md:h-[900px]' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 m top-2/3 md:top-1/2">
                    <h1 className='absolute bottom-0  md:left-20 text-xl md:text-6xl font-bold font-poppins text-cyan-600 w-2/3 md:w-1/3'>Knowledge gateway, embrace learning, and embark on a  <span className='text-red-500'>Journey</span></h1>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://i.ibb.co/MMhs2F2/pexels-yx-b-13007028.jpg" className='w-full h-[250px] md:h-[900px]' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 m top-2/3 md:top-1/2">
                    <h1 className='absolute bottom-0  md:left-20 text-xl md:text-6xl font-bold font-poppins text-cyan-600 w-2/3 md:w-1/3'>Unveil stories, cultivate curiosity, and broaden your . <span className='text-red-600'>Horizons</span></h1>

                </div>
            </SwiperSlide>

        </Swiper>
    );
};

export default BannerSwiper;