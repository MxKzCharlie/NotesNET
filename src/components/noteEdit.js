import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function NoteEdit(){
    const location = useLocation();
    const noteData = location.state;
    const navigate = useNavigate();
    const [newData, setNewData] = useState({
        "id": noteData['id'],
        "title": noteData['title'],
        "content": noteData['content']
    });

    const handleChange = (e) => {
        setNewData({
            ...newData,
            [e.target.name]: e.target.value,
        });
        console.log(newData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://mxkzcharlie.pythonanywhere.com/api-notes/edit-note/', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
            });
  
        const data = await response.json();
        if (data.status === 200) {
            navigate('..', {relative:'path'});
        } else {
            alert('Error, please try again');
        }
        window.location.reload();
    };

    const handleClick = async (e) => {
        e.preventDefault();

        const response = await fetch('https://mxkzcharlie.pythonanywhere.com/api-notes/delete-note/',{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({'id': noteData['id']})
        });

        const data = await response.json();
        if (data.status === 200){
            navigate('..', {relative:'path'});
        }else{
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
                        <input type="text"  placeholder="Title" name="title" onChange={handleChange}
                        className="bg-emerald-50 rounded-2xl p-3 text-xl text-center w-96" defaultValue={noteData['title']} />
                    </div>
                    <div className="flex flex-row gap-4 p-4">
                        <button type="submit" className="bg-gradient-to-b from-green-600 to-emerald-50 rounded-xl p-2 
                        transition ease-in-out delay-300ms hover:scale-110">
                            Save
                        </button>
                        <button onClick={handleClick} className="bg-gradient-to-b from-red-600 to-emerald-50 rounded-xl p-2 
                        transition ease-in-out delay-300ms hover:scale-110">
                            Delete
                        </button>
                        <Link to='..' relative="path">
                            <button className="bg-gradient-to-b from-gray-600 to-emerald-50 rounded-xl py-2 px-4 
                            transition ease-in-out delay-300ms hover:scale-110 font-semibold text-xl">
                                X
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center">
                    <textarea style={{resize: 'none'}} placeholder="Write here..." name="content" onChange={handleChange}
                    className="w-3/4 h-72 object-none p-4 rounded-xl text-xl bg-emerald-50" defaultValue={noteData['content']} />
                </div>
            </form>
        </dialog>
    );    
}

export default NoteEdit;
