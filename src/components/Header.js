import { useState } from "react";
import logo from '../images/logo.png';


export default function Header() {
  const lisNames = ["Home", "About", "Services", "Portflio"];

  const [activeItem, setActiveItem] = useState(0);
  const [acvtivemobilevItem, setAcvtivemobilevItem] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  return (
    <header className=" bg-bg-light_bg border-b-2 border-b-[#160a2d] 1 z-50 fixed transition-[0.4s] w-[100%] shadow-myShadow">
      <div className="container backdrop-blur-lg h-[7vh] flex items-center justify-between w-[90%] md2:w-[70%] pt-10 pb-7 px-0">
        <img className="logo w-[55px] md:w-[65px] mt-[-10px] md:mt-0 rounded-sm" src={logo} alt="" />
        <ul className="navLinks hidden md:flex gap-7">

          {lisNames.map((el, index) => {
            return (
              <a
                href={`#${el}`}
                key={index}
                className={`${activeItem === index ? 'active' : ''} head_links text-[1.3rem] font-semibold opacity-30 scale-90 hover:scale-110 hover:opacity-100 cursor-pointer transition-all ease-in-out duration-[0.2s] hidden md:block`}
                onClick={() => setActiveItem(index)}
              >
                {el}
              </a>
            );
          })}
        </ul>
        {/* Contact Btn */}
        <a
          href="#Contact"
          className="navContent hidden md:inline-block transition-all ease-in-out duration-[0.4s] text-[1.2rem] font-semibold text-center py-1 px-6 rounded-md border-[3px] border-[#4937f0] border-solid relative cursor-pointer z-10
          hover:border-transparent hover:scale-110"
        >
          Contact
        </a>
        {/* Toggle Menu btn*/}
        <div onClick={toggleMenu} className={`${isOpen ? 'menuOpen' : ''} toggle_menu cursor-pointer flex flex-col justify-center items-center gap-[6px] md:hidden transition_3`}>
          {isOpen ? '' : null}
          <span className={`${isOpen ? 'w-[32px] rotate-45' : ''} navSpans`}></span>
          <span className={`${isOpen ? 'opacity-0' : ''} navSpans`}></span>
          <span className={`${isOpen ? 'w-[32px] -rotate-45' : ''} navSpans`}></span>
        </div>
      </div>
      {/* nav mobile */}
      <section className={`${isOpen ? 'opacity-100 !block' : ''} hidden transition_3 opacity-0 z-[51] fixed w-full h-full backdrop-blur-lg md:hidden`}>
        <ul className="h-[66%]  flex flex-col justify-center items-center md:hidden gap-5">
          {lisNames.map((el, index) => {
            return (
              <a
                key={`${index}`}
                className={`${acvtivemobilevItem === index ? 'avtivemobilev' : ''} text-[1.6rem] font-semibold opacity-70 scale-90 cursor-pointer transition-all ease-in-out duration-[0.2s] hover:scale-110 hover:opacity-100 hover:tracking-[5px]`}
                onClick={() =>
                  setAcvtivemobilevItem(index)

                }
                href={`#${el}`}
              >
                {el}
              </a>
            );
          })}
        </ul>
        <div className="h-1/4 flex justify-center items-center flex-col gap-5 md:hidden">
          <div className="h-[15%] flex items-center justify-center gap-5">
            <i className="fa-brands fa-square-facebook text-[2.2rem] cursor-pointer opacity-70 hover:opacity-100 hover:scale-125 transition_3"></i>
            <i className="fa-brands fa-whatsapp text-[2.2rem] cursor-pointer opacity-70 hover:opacity-100 hover:scale-125 transition_3"></i>
            <i className="fa-brands fa-linkedin text-[2.2rem] cursor-pointer opacity-70 hover:opacity-100 hover:scale-125 transition_3"></i>
          </div>
          <div className="h-[15%] flex items-center justify-center gap-5">
            <i className="fa-brands fa-github text-[2.2rem] cursor-pointer opacity-70 hover:opacity-100 hover:scale-125 transition_3"></i>
          </div>
        </div>
      </section>


    </header>
  );
}
