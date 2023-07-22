/* eslint-disable jsx-a11y/alt-text */
import tailwind_css from '../images/tailwind-css.svg';


export default function About() {


    return (
        <section id="About" className="bg-[#160a2d] relative overflow-hidden">
            {/* Start */}
            <div className="top-[59%] left-[12%] w-[5px] h-[5px] bg-[#f67f03] stars"></div>
            <div className="star_animation top-[16%] left-[13%] md:top-[30%] md:left-[35%] w-[8px] h-[8px] bg-[#f67f03] stars"></div>
            <div className="top-[65%] left-[55%] w-[5px] h-[5px] bg-[#a141f2] stars"></div>
            <div className="star2_animation top-[29%] left-[90%] w-[7px] h-[7px] bg-[#a141f2] stars"></div>
            {/* Container */}
            <div className="container w-[85%] md:w-[75%] lg:w-[60%] min-h-[60vh]">
                <div className="top flex justify-between items-center flex-col lg:flex-row">
                    <div data-aos="fade-right" className="left flex flex-[1] items-start flex-col gap-[10px]">
                        <h2 className="text-[2.2rem] mt-[-1.4rem] font-bold">About me</h2>
                        <div className="aboutPhoto w-[180px] h-[180px] border-[3px] border-solid border-white rounded-[50%] overflow-hidden"></div>
                    </div>
                    <div data-aos="fade-left" className="right flex flex-[2] flex-col justify-center gap-10 text-2xl mt-[50px] lg:mt-3">
                        <div className="row flex justify-center items-center flex-wrap gap-5">
                            <div className="skill w-[180px] h-[55px] flex justify-center items-center hover:scale-110">
                                <i className="fa-brands fa-html5 mr-3"></i>
                                <h3 className="font-bold text-[1.3rem]">HTML</h3>
                            </div>
                            <div className="skill w-[180px] h-[55px] flex justify-center items-center hover:scale-110">
                                <i className="fa-brands fa-css3-alt mr-3"></i>
                                <h3 className="font-bold text-[1.3rem]">CSS</h3>
                            </div>
                            <div className="skill w-[180px] h-[55px] flex justify-center items-center hover:scale-110">
                                <i className="fa-brands fa-square-js mr-3"></i>
                                <h3 className="font-bold text-[1.3rem]">Javascript</h3>
                            </div>

                        </div>
                        <div className="row flex justify-center items-center flex-wrap gap-5">

                            <div className="skill w-[180px] h-[55px] flex justify-center items-center hover:scale-110">
                                <object data={tailwind_css} className='mr-3 w-[35px]'></object>
                                <h3 className="font-bold text-[1.3rem]">Tailwind</h3>
                            </div>
                            <div className="skill w-[180px] h-[55px] flex justify-center items-center hover:scale-110">
                                <i className="fa-brands fa-bootstrap mr-3"></i>
                                <h3 className="font-bold text-[1.3rem]">Bootstrap</h3>
                            </div>
                        </div>
                        <div className="row flex justify-center items-center flex-wrap gap-5">
                            <div className="skill w-[180px] h-[55px] flex justify-center items-center hover:scale-110">
                                <i className="fa-brands fa-react mr-3"></i>
                                <h3 className="font-bold text-[1.3rem]">React</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="bottom sm:mt-20 flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-end">
                    <div className="box rounded-[30px] w-[300px] h-[180px] mt-48 sm:mt-0 md2:w-[260px]  md2:h-[200px] sm:w-[210px] sm:h-[160px] border-[5px] border-dashed border-[#4b2399] flex justify-center items-center flex-col text-center relative cursor-pointer overflow-hidden transition_4 z-[1] hover:border-[transparent] ">
                        <h2 className="text-[2.6rem] md2:text-[2.9rem] mb-[-15px] transition_4 font-bold">02</h2>
                        <h3 className="text-[1.6rem] md2:text-[2rem] font-bold leading-[35px] transition_4 ">Years<br />experience</h3>
                    </div>
                    <div className="box rounded-[30px] w-[300px] h-[180px] mt-3 md2:w-[260px] md2:h-[200px] sm:w-[210px] sm:h-[160px] border-[5px] border-dashed border-[#4b2399] flex justify-center items-center flex-col text-center relative cursor-pointer overflow-hidden transition_4 z-[1] hover:border-[transparent] ">
                        <h2 className="text-[2.6rem] md2:text-[2.9rem] mb-[-15px] transition_4 font-bold">00</h2>
                        <h3 className="text-[1.6rem] md2:text-[2rem] font-bold leading-[35px] transition_4">Clients</h3>
                    </div>
                    <div className="box rounded-[30px] w-[300px] h-[180px] mt-3 md2:w-[260px] md2:h-[200px] sm:w-[210px] sm:h-[160px] border-[5px] border-dashed border-[#4b2399] flex justify-center items-center flex-col text-center relative cursor-pointer overflow-hidden transition_4 z-[1] hover:border-[transparent] ">
                        <h2 className="text-[2.6rem] md2:text-[2.9rem] mb-[-15px] transition_4 font-bold">15+</h2>
                        <h3 className="text-[1.6rem] md2:text-[2rem] font-bold leading-[35px] transition_4">Projects</h3>
                    </div>
                </div>
            </div>
            <div className="testcss"></div>
        </section>
    )
}