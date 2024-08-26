import { useNavigate } from "react-router-dom";

function Card({title, content, id}){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('edit-note/', {state: {"title": title, "content": content, "id": id}})
    };

    return(
        <button onClick={handleClick} className="h-card w-card transition duration-300 ease-in-out hover:scale-110 cursor-pointer rounded-xl
        bg-gradient-to-t from-emerald-200 to-emerald-400 flex justify-center items-center p-8 list-none">
            <h1 className="text-xl font-light">{title}</h1>
        </button>              
    );
}

export default Card;