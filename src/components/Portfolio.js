/* eslint-disable jsx-a11y/anchor-is-valid */
import '../index.css';
import lottie from 'lottie-web';
import linkImg from '../images/link.png';

import Cards from "./Cards";
import Buttons from "./Buttons";



function Portfolio({ menuItems, setItem, item, filterItem }) {





    return (
        <section id="Portflio" className="bg-[#160a2d] relative overflow-hidden">
            {/* Stars */}
            <div className="top-[50%] left-[14%] w-[6px] h-[6px] bg-[#f67f03] stars"></div>
            <div className="top-[83%] left-[67%] w-[8px] h-[8px] bg-[#f67f03] stars"></div>
            <div className=" top-[2%] left-[24%] w-[8px] h-[8px] bg-[#a141f2] stars"></div>
            <div className=" top-[24%] left-[88%] w-[6px] h-[6px] bg-[#a141f2] stars"></div>
            {/* Container */}
            <div className="container min-h-[100vh] flex flex-col justify-start items-center w-[95%] md2:w-[70%] py-[40px] px-[0]">
                <div className="header flex justify-center lg:justify-between items-center lg:items-end flex-col lg:flex-row w-full">
                    <div className="left">
                        <h2 className="text-[2.9rem] lg:text-[2.5rem] font-bold">Portfolio</h2>
                        <p className="mt-[-0.5rem] lg:mt-[0] leading-5 text-[0.9rem] opacity-90">Here you can see some of my completed projects<br />using different technologies ... enjoy</p>
                    </div>
                    <Buttons menuItems={menuItems} setItem={setItem} filterItem={filterItem} />
                </div>
                <div className="work mt-[50px] mx-0 mb-[40px] flex flex-col items-center">
                    <div>

                        <Cards item={item} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;