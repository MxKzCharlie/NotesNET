import Agregar from '../img/agregar.png';
import { Link } from 'react-router-dom';

function ControlBar(){
    return(
        <aside className="flex flex-col nm-flat-emerald-300 h-full w-52">
            <Link to={`create-note/`}>
                <div className="flex flex-row justify-center my-8 gap-2 rounded-lg 
                transition duration-300 ease-in-out hover:scale-110 active:scale-100 cursor-pointer">
                    <img src={Agregar} alt="agregar icon" className="w-10 h-10" />
                    <button className='text-lg'>Add Note</button>
                </div>
            </Link>
        </aside>
    );
}

export default ControlBar;