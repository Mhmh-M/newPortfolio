export default function Contact() {

    return (
        <section id="Contact" className=" relative overflow-hidden bg-[#160a2d]">
            {/* Stars */}
            <div className="animation-two top-[33%] left-[77%] w-[8px] h-[8px] bg-[#f67f03] stars"></div>
            <div className="animation-one top-[54%] left-[19%] w-[6px] h-[6px] bg-[#a141f2] stars" id="contact_star"></div>
            <div className=" top-[94%] left-[88%] w-[8px] h-[8px] bg-[#a141f2] stars"></div>
            {/* Container */}
            <div className="container min-h-[65vh] w-[70%] py-10 px-0">
                <div className="head text-center">
                    <h2 className="text-[2.5rem] font-bold">Contact</h2>
                    <p className=" tracking-[5px] text-[2.5rem] sm:text-[3rem] font-light mt-[-10px] leading-[40px] sm:leading-[50px]">Lets Say Hi!</p>
                </div>
                <div className="links flex flex-col justify-center items-center gap-5 md2:gap-10 min-h-[50vh] mt-[3rem] md2:mt-[1rem]">
                    <div className="flex justify-center items-center gap-5 md2:gap-10 flex-wrap">
                        <a className="scale-90 sm:scale-100 flex justify-center items-center gap-[10px] w-[280px] h-[60px]  lg:hover:scale-110" href="https://github.com/Mhmh-M">
                            <i className="fa-brands fa-github"></i>
                            <h3 className="font-bold text-[1.2rem]">MohamedAbdElghany</h3>
                        </a>
                        <a className="scale-90 sm:scale-100 flex justify-center items-center gap-[10px] w-[280px] h-[60px]  lg:hover:scale-110" href="https://www.facebook.com/profile.php?id=100006060525730">
                            <i className="fa-brands fa-facebook-f"></i>
                            <h3 className="font-bold text-[1.2rem]">Mohamed M Abd ElGhany</h3>
                        </a>
                        <a className="scale-90 sm:scale-100 flex justify-center items-center gap-[10px] w-[280px] h-[60px]  lg:hover:scale-110" href="https://www.linkedin.com/in/mohammed-abd-al-ghany-3783bb239/">
                            <i className="fa-brands fa-linkedin"></i>
                            <h3 className="font-bold text-[1.2rem]">Mohammed Abd Al-Ghany</h3>
                        </a>
                    </div>
                    <div className="flex justify-center items-center gap-5 md2:gap-10 flex-wrap">
                        <a className="scale-90 sm:scale-100 flex justify-center items-center gap-[10px] w-[280px] h-[60px]  lg:hover:scale-110" href="https://wa.me/01008202048">
                            <i className="fa-solid fa-phone"></i>
                            <h3 className="font-bold text-[1.2rem]">+0201008202048</h3>
                        </a>
                        <a className="scale-90 sm:scale-100 flex justify-center items-center gap-[10px] w-[280px] h-[60px]  lg:hover:scale-110" href="https://github.com/Mhmh-M">
                            <i className="fa-solid fa-envelope"></i>
                            <h3 className="font-bold text-[1.1rem]">z01100230021@gmail.com</h3>
                        </a>
                    </div>
                    <div className="flex justify-center items-center gap-5 md2:gap-10 flex-wrap">
                        <a className="scale-90 sm:scale-100 flex justify-center items-center gap-[10px] w-[280px] h-[60px]  lg:hover:scale-110" href="https://www.instagram.com/mhmed_abd_el_ghany/">
                            <i className="fa-brands fa-instagram"></i>
                            <h3 className="font-bold text-[1.2rem]">mhmed_abd_el_ghany</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}