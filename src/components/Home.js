import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';
// import Image from 'react-image';
// import myphoto from '../images/ProfilePicturePhoto.webp';
import brushPen from '../images/brush-pen.png';
import penTool from '../images/pen-tool.png';
import webDesign from '../images/web-design.png';


export default function Home() {

    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Front-End Developer',],
            typeSpeed: 110,
            backSpeed: 80,
            loop: true
        };

        const typed = new Typed(typedRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);


    return (
        <section id="Home" className=" relative overflow-hidden pb-14 xl:pb-0 flex justify-center items-center">
            {/* Start */}
            <div className="top-[75%] left-[12%] w-[5px] h-[5px] bg-[#f67f03] stars"></div>
            <div className="star_animation top-[16%] left-[13%] md:top-[30%] md:left-[35%] w-[8px] h-[8px] bg-[#f67f03] stars"></div>
            <div className="top-[65%] left-[55%] w-[5px] h-[5px] bg-[#a141f2] stars"></div>
            <div className="star2_animation top-[29%] left-[90%] w-[7px] h-[7px] bg-[#a141f2] stars"></div>

            <div className='container flex flex-col lg:flex-row justify-center items-center h-screen mt-[35%] md2:mt-[25%] lg:mt-0 md:pt-[8vh] lg:w-[90%]  relative text-center lg:text-start'>
                <div className='flex-1 '>
                    <p className='text-[1.6rem] text-[#854cff] font-light'>Hi, I'm Mohamed Abd Alghany</p>
                    <h2 className='text-[4rem] font-semibold leading-[65px] h-[100px] scale-90 md:scale-100 select-none'><span className='text-[#854cff]'>I`m a </span><span ref={typedRef}></span></h2>
                    <p className='text-[1.05rem] font-light leading-[20px] mt-[6rem] mb-[1.2rem] w-[400px] mx-auto lg:mx-0'>High level experience in web design, development
                        knowladge, graphic design ,and problem solving</p>
                    <a className=' relative z-[1] text-[1.1rem] py-[5px] px-[25px] rounded-[5px] transition_3 inline-block hover:scale-110 bg-gradient-to-r from-[#4937f0] to-[#9244f0]' href='#CV'>Download CV</a>

                </div>
                <div className='flex  flex-1 justify-center'>
                    <div className='mainPhoto relative w-[380px] h-[380px] sm:w-[430px] sm:h-[430px] rounded-[50%]'>
                        {/* Icons */}
                        <img className='one w-[135px] top-[15px] left-[-16px] homeImages' src={brushPen} alt='' />
                        <img className='two w-[145px] bottom-[-20px] left-[30px] homeImages' src={penTool} alt='' />
                        <img className='three w-[145px] top-[135px] right-[-60px] homeImages' src={webDesign} alt='' /></div>
                </div>
            </div>
            {/* Wave Effect */}
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </section>
    )
}