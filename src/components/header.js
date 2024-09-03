import { useNavigate } from "react-router-dom";

function Header({usuario}){
    const navigate = useNavigate();

    const handleClick = async () => {
        fetch('https://mxkzcharlie.pythonanywhere.com/logout/')
            .then(response => response.json())
            .then(data => {
                if(data.status === 200)
                    navigate('/');
            })
    };

    return(
        <header className="flex flex-row justify-between items-center nm-flat-emerald-200 h-[4.5rem] px-6 col-span-2">
            <h1 className='text-emerald-800 font-black text-4xl'><i>NotesNET</i></h1>
            <div className="flex flex-column gap-2 justify-center">
                <h2 className='text-lg font-bold'>{usuario}</h2>
                <button onClick={handleClick} className="text-black hover:text-red-700 font-medium">Log Out</button>
            </div>
        </header>
    );
}

export default Header;
