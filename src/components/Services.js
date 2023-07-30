import purple from "../images/purpleBall.png";
import webLap from '../images/webLap.png';
import orangeBall from '../images/orangeBall.png';
import elzero from '../images/elzero web.png';

export default function Services() {

    return (
        <section id="Services" className=" relative bg-[#211141] overflow-hidden">
            {/* Stars */}
            <div className="top-[3%] left-[40%] w-[8px] h-[8px] bg-[#f67f03] stars"></div>
            <div className="top-[65%] left-[90%] w-[8px] h-[8px] bg-[#f67f03] stars"></div>
            <div className="animation_one top-[43%] left-[8%] w-[8px] h-[8px] bg-[#a141f2] stars"></div>
            <div className="animation_two top-[87%] left-[7%] w-[8px] h-[8px] bg-[#a141f2] stars"></div>
            {/* Container */}
            <div className="container min-h-[100vh] !w-full pt-[60px] pb-[300px] lg:pt-[50px] px-0 lg:pb-[150px]">
                <h2 className="text-[2.8rem] font-bold text-center">Services</h2>
                <div className="servs flex flex-col justify-center items-center gap-[300px] lg:gap-[110px] mt-[6rem] w-full">
                    <div className="w-full flex justify-center items-center">
                        <div className="w-[80vw] lg:w-[70vw] xl:w-[40vw] h-[40vh] relative">
                            {/* ball */}
                            <img loading='lazy' data-aos="fade-left" className="ball_One absolute w-[190px] top-[-20%] right-[-15%]" src={purple} alt="" />
                            {/* weblap */}
                            <div data-aos="fade-up" className="backdrop_4 w-full h-full border border-[#ffffff40] border-solid bg-[#ffffff1a] rounded-[30px] z-40 flex justify-center items-center shadow-shadowthree">
                                <img loading='lazy' className="w-[300px] sm:w-[330px]" src={elzero} alt="" />
                            </div>
                            {/* label */}
                            <div data-aos="fade-right" className="label_one absolute w-full lg:w-[320px] h-[150px] lg:h-[180px]  rounded-[20px] shadow-shadowfour text-center flex flex-col justify-center items-center pb-[16px]
                            bottom-[-52%] left-0 lg:bottom-[-10%] lg:left-[-10%] xl:bottom-[-17%] xl:left-[-25%]">
                                <h2 className="text-[1.7rem] sm:text-[2rem] font-bold">Static Front-End</h2>
                                <p className="text-[0.9rem] font-normal leading-4 opacity-80">I can program the front end of your site with the highest efficiency using the latest technologies</p>
                                <div className="flex justify-center gap-5 sm:gap-[30px] mt-[10px] sm:mt-[30px]">
                                    <a href="#Contact" className="srtvBtn">Contact</a>
                                    <a href="#Portflio" className="srtvBtn">See projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <div className="w-[80vw] lg:w-[70vw] xl:w-[40vw] h-[40vh] relative">
                            {/* ball */}
                            <img loading='lazy' data-aos="fade-right" className="ball_two absolute w-[190px] bottom-[-18%] left-[-15%]" src={orangeBall} alt="" />
                            {/* weblap */}
                            <div data-aos="fade-up" className="backdrop_4 w-full h-full border border-[#ffffff40] border-solid bg-[#ffffff1a] rounded-[30px] z-40 flex justify-center items-center shadow-shadowthree">
                                <img loading='lazy' className="w-[300px] sm:w-[330px]" src={webLap} alt="" />
                            </div>
                            {/* label */}
                            <div data-aos="fade-left" className="label_two absolute w-full lg:w-[320px] h-[150px] lg:h-[180px]  rounded-[20px] shadow-shadowfour text-center flex flex-col justify-center items-center pb-[16px]
                            bottom-[-52%] left-0  lg:top-[5%] lg:left-[80%] xl:top-[5%] xl:left-[80%]">
                                <h2 className="text-[1.7rem] sm:text-[2rem] font-bold">Edit code</h2>
                                <p className="text-[0.9rem] font-normal leading-4 opacity-80">I can edit your front-end code and upgrade him</p>
                                <div className="flex justify-center gap-5 sm:gap-[30px] mt-[10px] sm:mt-[30px]">
                                    <a href="#Contact" className="srtvBtn">Contact</a>
                                    <a href="#Portflio" className="srtvBtn">See projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}