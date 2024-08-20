function header({usuario}){
    return(
        <header className="flex flex-row justify-between items-center nm-flat-emerald-200 h-[4.5rem] px-6 col-span-2">
            <h1 className='text-emerald-800 font-black text-4xl'><i>NotesNET</i></h1>
            <div className="flex flex-row gap-4">
                <h2 className='text-lg font-bold'>{usuario}</h2>
            </div>
        </header>
    );
}

export default header;