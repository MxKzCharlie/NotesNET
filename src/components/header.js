function header(){
    return(
        <header className="flex flex-row justify-between items-center nm-flat-emerald-200 h-[4.5rem] px-6 col-span-2">
                <h1 className='text-emerald-800 font-black text-4xl'><i>NotesNET</i></h1>
                <div className="flex flex-row gap-4">
                    <h2 className='text-lg'>Usuario</h2>
                    <img src="#" alt="icono-usuario" />
                </div>
            </header>
    );
}

export default header;