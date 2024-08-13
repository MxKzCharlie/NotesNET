function Modal(){
    return(
        <dialog className="nm-flat-emerald-300-sm w-1/2 rounded-3xl h-3/4 flex flex-col">
            <div className="flex flex-row flex-nowrap justify-between items-center p-8">
                <div className="overflow-hidden">
                    <input type="text" placeholder="Title" className="bg-emerald-50 rounded-2xl p-3 
                    text-xl text-center" />
                </div>
                <div className="flex flex-row gap-4 p-4">
                    <button className="bg-gradient-to-b from-green-600 to-emerald-50 rounded-xl p-2 
                    transition ease-in-out delay-300ms hover:scale-110">
                        Confirm
                    </button>
                    <button className="bg-gradient-to-b from-red-600 to-emerald-50 rounded-xl p-2 
                    transition ease-in-out delay-300ms hover:scale-110">
                        Cancel
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <textarea placeholder="Write here..." className="w-3/4 max-h-72 object-none p-4 rounded-xl 
                text-xl bg-emerald-50 min-h-72" />
            </div>
        </dialog>
    );    
}

function Card(){
    return(
        <div className="h-card w-card transition duration-300 ease-in-out hover:scale-110 cursor-pointer rounded-xl
        bg-gradient-to-t from-emerald-200 to-emerald-400 flex justify-center items-center p-8">
            <h1 className="text-xl font-light">Hola Mundo</h1>
        </div>
    );
}

function NotesView(){
    return(
        <div className="flex flex-row flex-wrap gap-8 overflow-x-hidden justify-center p-10">
            <Card />
            <Modal />
        </div>
    );
}

export default NotesView;

