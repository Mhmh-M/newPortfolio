import { useState } from "react";
import items from "./Date";

const Buttons = ({ filterItem, setItem, menuItems }) => {

    // const lisNames = ["Bootstarb", "Tailwind", "React", "Without a framework"];


    const [activeItem, setActiveItem] = useState(-1);


    return (
        <ul className="right flex gap-0 flex-wrap items-center justify-center scale-90 md2:scale-100 mt-[2rem] lg:mt-0">
            <li className={`${activeItem === -1 ? 'active' : ''} link py-[5px] px-[20px] text-[1.1rem] font-medium relative z-10 overflow-hidden transition_3 cursor-pointer `}
                onClick={() => {
                    setActiveItem(-1)
                    setItem(items)
                }}>
                All
            </li>
            {menuItems.map((Val, id) => {
                return (
                    <li
                        key={id}
                        className={`${activeItem === id ? 'active' : ''} link py-[5px] px-[20px] text-[1.1rem] font-medium relative z-10 overflow-hidden transition_3 cursor-pointer `}
                        onClick={() => {
                            setActiveItem(id)
                            filterItem(Val)
                        }}
                        href={`${Val}`}
                    >
                        {Val}
                    </li>
                );
            })}
        </ul>
        //     {menuItems.map((Val, id) => {
        //         return (
        //             <button
        //                 className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
        //                 onClick={() => filterItem(Val)}
        //                 key={id}
        //             >
        //                 {Val}
        //             </button>
        //         );
        //     })}
        //     <button
        //         className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
        //         onClick={() => setItem(Data)}
        //     >
        //         All
        //     </button>
    );
};

export default Buttons;