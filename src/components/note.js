import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Note({title, content}){
    const {username} = useParams()

    const [noteDt, setNoteDt] = useState({
        'title':'',
        'content': '',
        'user': username
    });
    
    const handleChange = (e) => {
        setNoteDt({
            ...noteDt,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.value)
    };

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api-notes/note-register/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(noteDt),
        });

        const data = await response.json();
        if (data.status === 201) {
            navigate('..', {relative:'path'})
        } else {
          alert('Error, please try again');
        }
        window.location.reload();
      };

    return(
        <dialog open className="flex h-screen w-screen justify-center items-center fixed 
        bg-black bg-opacity-50">
            <form onSubmit={handleSubmit} className="nm-flat-emerald-300-sm w-1/2 rounded-3xl h-3/4 flex flex-col">
                <div className="flex flex-row flex-nowrap justify-between items-center p-8">
                    <div className="overflow-hidden">
                        <input type="text"  placeholder="Title" onChange={handleChange} name="title"
                        className="bg-emerald-50 rounded-2xl p-3 text-xl text-center w-96" value={noteDt.title} />
                    </div>
                    <div className="flex flex-row gap-4 p-4">
                        <button type="submit" className="bg-gradient-to-b from-green-600 to-emerald-50 rounded-xl p-2 
                        transition ease-in-out delay-300ms hover:scale-110">
                            Confirm
                        </button>
                        <Link to='..' relative="path">
                            <button className="bg-gradient-to-b from-red-600 to-emerald-50 rounded-xl p-2 
                            transition ease-in-out delay-300ms hover:scale-110">
                                Cancel
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center">
                    <textarea style={{resize: 'none'}} placeholder="Write here..." onChange={handleChange} name="content"
                    className="w-3/4 h-72 object-none p-4 rounded-xl text-xl bg-emerald-50" value={noteDt.content} />
                </div>
            </form>
        </dialog>
    );    
}

export default Note;