import {useState} from 'react';
import Agregar from '../img/agregar.png';
import { Link } from 'react-router-dom';

function ControlBar(){

    const [dateState, setDateState] = useState("my-3 bg-emerald-100 px-4 rounded-xl transition duration-300 ease-in-out hover:scale-110 text-emerald-950");
    const [alphaState, setAlphaState] =  useState("my-3 px-4 rounded-xl transition duration-300 ease-in-out hover:scale-110 text-emerald-950");

    const handleClick1 = () => {
        setDateState("my-3 bg-emerald-100 px-4 rounded-xl transition duration-300 ease-in-out hover:scale-110 text-emerald-950");
        setAlphaState("my-3 px-4 rounded-xl transition duration-300 ease-in-out hover:scale-110 text-emerald-950");
    }

    const handleClick2 = () => {
        setDateState("my-3 px-4 rounded-xl transition duration-300 ease-in-out hover:scale-110 text-emerald-950");
        setAlphaState("my-3 bg-emerald-100 px-4 rounded-xl transition duration-300 ease-in-out hover:scale-110 text-emerald-950");  
    }

    return(
        <aside className="flex flex-col nm-flat-emerald-300 h-full w-52">
            <Link to={`create-note/`}>
                <div className="flex flex-row justify-center my-8 gap-2 rounded-lg 
                transition duration-300 ease-in-out hover:scale-110 active:scale-100 cursor-pointer">
                    <img src={Agregar} alt="agregar icon" className="w-10 h-10" />
                    <button className='text-lg'>Add Note</button>
                </div>
            </Link>
            <div className="flex flex-col items-center w-full mt-4">
                <h3 className="text-emerald-900 font-bold text-2xl">Sort for:</h3>
                <div className="flex flex-row items-center mx-5">
                    <button onClick={handleClick1} className={dateState}>
                        Date
                    </button>
                    {/* <p className='mx-2' ></p> */}
                </div>
                <div className="flex flex-row items-center  mx-5">
                    <button onClick={handleClick2} className={alphaState}>
                        Alphabetic
                    </button>
                    {/* <p className='mx-2' ></p> */}
                </div>
            </div> 
        </aside>
    );
}

export default ControlBar;