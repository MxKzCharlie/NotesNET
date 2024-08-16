import { Link } from "react-router-dom";

function Note(){
    return(
        <form className="nm-flat-emerald-300-sm w-3/4 rounded-3xl h-full flex flex-col">
            <div className="flex flex-row flex-nowrap justify-between items-center p-8">
                <div className="overflow-hidden">
                    <input type="text" placeholder="Title" className="bg-emerald-50 rounded-2xl p-3 
                    text-xl text-center w-96" />
                </div>
                <div className="flex flex-row gap-4 p-4">
                    <button className="bg-gradient-to-b from-green-600 to-emerald-50 rounded-xl p-2 
                    transition ease-in-out delay-300ms hover:scale-110">
                        Confirm
                    </button>
                    <Link to={`/`} >
                        <button className="bg-gradient-to-b from-red-600 to-emerald-50 rounded-xl p-2 
                        transition ease-in-out delay-300ms hover:scale-110">
                            Cancel
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center">
                <textarea style={{resize: 'none'}} placeholder="Write here..." className="w-3/4 h-72 object-none p-4 rounded-xl 
                text-xl bg-emerald-50 " />
            </div>
        </form>
    );    
}

export default Note;