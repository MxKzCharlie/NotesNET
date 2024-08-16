function Card(){
    return(
        <div className="h-card w-card transition duration-300 ease-in-out hover:scale-110 cursor-pointer rounded-xl
        bg-gradient-to-t from-emerald-200 to-emerald-400 flex justify-center items-center p-8">
            <h1 className="text-xl font-light">Hola Mundo</h1>
        </div>
    );
}

export default Card;