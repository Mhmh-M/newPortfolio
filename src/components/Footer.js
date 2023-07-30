import logo from '../images/logo.png';



export default function Footer() {

    return (
        // <footer className="bg-[#211141] overflow-hidden relative min-h-[35vh] flex flex-col justify-center items-center">
        <footer className="bg-[#160a2d] overflow-hidden relative min-h-[35vh] flex flex-col justify-center items-center">
            <div className="container w-[90%] lg:w-[80%] h-[90%] py-[15px] pl-0 pr-0 lg:pr-[35px] flex justify-between items-center flex-wrap flex-col md:flex-row mb-20 md2:mb-0">
                <div className="">
                    <h1 className="text-[1.7rem] sm:text-[1.9rem] md:text-[2.3rem] text-center md:text-start">DON'T BE SHY !</h1>
                    <p className="text-[0.8rem] text-center md:text-start mt-[-2px] md:mt-0 md:text-[1rem] leading-4 lg:leading-5 font-light opacity-70">
                        Feel free to get in touch with me.<br />
                        I am always open to discussing<br />
                        new projects, creative ideas or<br />
                        opportunities to be part of your visions.</p>
                </div>
                <img loading='lazy' src={`${logo}`} alt='' className="text-center mt-[35px] mx-[30px] mb-[20px]  sm:mt-[45px] sm:mx-[30px] sm:mb-[30px] md:my-0 md:mx-[30px] w-[140px] sm:w-[140px] lg:w-[180px]" />
                <div className="">
                    <h1 className="text-[1.7rem] sm:text-[1.9rem] md:text-[2.3rem] text-center md:text-end">Who am i ?</h1>
                    <p className="text-[0.8rem] text-center md:text-end mt-[-2px] md:mt-0 md:text-[1rem] leading-4 lg:leading-5 font-light opacity-70">
                        I'm a web developer, and I'm very passionate
                        <br />
                        and dedicated to my work, I<br />
                        have acquired the skills and knowledge<br />
                        necessary to make your project a success.</p>
                </div>
            </div>
            <div className="w-full h-[10%] opacity-70 border-t border-solid border-white absolute bottom-0 flex justify-center items-center">2023. MohamedAbdElgany. Portflio</div>
        </footer>
    )
}