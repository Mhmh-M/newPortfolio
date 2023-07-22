import { Navigation, Pagination, EffectCoverflow, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import alhassn from '../images/alhassn.png'

export default function Clients() {

    return (
        <section className="bg-[#211141] overflow-hidden relative h-[78vh]">
            {/* Stars */}
            <div className="top-[50%] left-[14%] w-[6px] h-[6px] bg-[#f67f03] stars"></div>
            <div className="top-[83%] left-[67%] w-[8px] h-[8px] bg-[#f67f03] stars"></div>
            <div className=" top-[2%] left-[24%] w-[8px] h-[8px] bg-[#a141f2] stars"></div>
            <div className=" top-[24%] left-[88%] w-[6px] h-[6px] bg-[#a141f2] stars"></div>
            <div className='text-center mt-[40px]'>
                <h2 className="text-[2.1rem] sm:text-[2.5rem] font-bold">Happy Clients</h2>
                <p className=" leading-5 text-[0.8rem] sm:text-[0.9rem] opacity-75 sm:opacity-90 ">Reviews and ratings from some<br />of our special customers</p>
            </div>
            <div className='h-[75%] flex justify-center items-center'>
                <Swiper
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    modules={[Navigation, Pagination, EffectCoverflow, A11y]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 20,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    className='swiper-container'
                >
                    <SwiperSlide><div id='SwiperSlide' className=' rounded-lg w-[320px] h-[200px] sm:w-[424px] sm:h-[265px] '>
                        <div className='up h-[70%] w-full flex justify-center items-center'>
                            <div className='w-[80%] h-[80%] bg-[#ffffff33] border border-solid border-white rounded-[10px] p-4 text-[0.9rem] font-semibold leading-5'>
                                الواد دا رجوله وميمة مية وبار بوالدية و بيدي عيدية<span>❤️😂😂</span><br />( Friend 1)
                            </div>
                        </div>
                        <div className='down h-[25%] w-full flex justify-center items-center gap-5'>
                            <img className='w-[50px] rounded-full' src={alhassn} alt='' />
                            <h3 className='font-bold'>Alhassn Mohamed</h3>
                        </div></div>
                    </SwiperSlide>
                    <SwiperSlide><div id='SwiperSlide' className=' rounded-lg w-[320px] h-[200px] sm:w-[424px] sm:h-[265px] '>
                        <div className='up h-[70%] w-full flex justify-center items-center'>
                            <div className='w-[80%] h-[80%] bg-[#ffffff33] border border-solid border-white rounded-[10px] p-4 text-[0.9rem] font-semibold leading-5'>
                                الواد دا رجوله وميمة مية وبار بوالدية و بيدي عيدية<span>❤️😂😂</span><br />( Friend 2)
                            </div>
                        </div>
                        <div className='down h-[25%] w-full flex justify-center items-center gap-5'>
                            <img className='w-[50px] rounded-full' src={alhassn} alt='' />
                            <h3 className='font-bold'>Alhassn Mohamed</h3>
                        </div></div>
                    </SwiperSlide>
                    <SwiperSlide><div id='SwiperSlide' className=' rounded-lg w-[320px] h-[200px] sm:w-[424px] sm:h-[265px] '>
                        <div className='up h-[70%] w-full flex justify-center items-center'>
                            <div className='w-[80%] h-[80%] bg-[#ffffff33] border border-solid border-white rounded-[10px] p-4 text-[0.9rem] font-semibold leading-5'>
                                الواد دا رجوله وميمة مية وبار بوالدية و بيدي عيدية<span>❤️😂😂</span><br />( Friend 3)
                            </div>
                        </div>
                        <div className='down h-[25%] w-full flex justify-center items-center gap-5'>
                            <img className='w-[50px] rounded-full' src={alhassn} alt='' />
                            <h3 className='font-bold'>Alhassn Mohamed</h3>
                        </div></div>
                    </SwiperSlide>

                    <div className='slider-controler mt-16'>
                        <div className='swiper-button-prev slider-arrow !hidden'>
                            <ion-icon name='arrow-back-outline'></ion-icon>
                        </div>
                        <div className='swiper-button-next slider-arrow !hidden'>
                            <ion-icon name='arrow-forward-outline '></ion-icon>
                        </div>
                        <div className='swiper-pagination '></div>
                    </div>
                </Swiper>
            </div>
        </section>
    )
}