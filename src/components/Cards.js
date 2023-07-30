/* eslint-disable jsx-a11y/anchor-is-valid */
import linkImg from '../images/link.png';
import { Link } from 'react-router-dom';



export default function Cards({ item }) {


    return (
        <div className="testone flex flex-wrap justify-center items-center gap-[15px] transition_4">
            {item.map((el, index) => {
                return (
                    <div id={item[index].id}
                        className="box w-[350px] h-[250px] overflow-hidden cursor-pointer relative flex transition_4"
                        data-aos={`${item[index].aos}`}
                        key={index}>
                        <Link target='black' to={`${item[index].link}`} className="w-full h-full absolute top-0 left-0 bg-transparent shadow-shadow5 z-50"></Link>
                        <img loading='lazy' className='w-full h-full transition_3 absolute top-0 left-0' src={item[index].img} alt='' />
                        <div className=" cate absolute top-[-30px] flex justify-center z-50 w-full font-semibold text-[0.9rem] transition_3">{item[index].category}</div>
                        <lord-icon
                            src="https://cdn.lordicon.com/alnsmmtf.json"
                            trigger="loop"
                            delay="900"></lord-icon>
                        <div >
                            <img className="linkImg w-[40px] absolute bottom-2 left-[-50%] translate-x-[-50%]" src={linkImg} alt="" />
                        </div>
                    </div>
                );
            })}

        </div>
    )
}