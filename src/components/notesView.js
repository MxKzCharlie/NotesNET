import Card from "./card";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function NotesView(){
    const [dataSt, setDataSt] = useState(null);
    const [loading, setLoading] = useState(true);
    const {username} = useParams();

    useEffect(() => {
        async function getData(){
            const response = await fetch('/api-notes/get-notes/', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({"username": username}),
            });
            
            const data = await response.json();
            if (data.status !== 200){
                alert('Hubo un error carnal')
            }
            setLoading(false);
            setDataSt(data.data);
        }
        getData();
    }, []);

    if(loading){
        return(
            <div className="flex flex-row flex-wrap gap-8 overflow-x-hidden justify-center items-center p-10">
                <h2 className="text-2xl text-gray-400 ">Loading...</h2>
            </div>
        );
    }else{
        const notes = [];
        dataSt.forEach(element => {
            notes.push(Object.entries(element))
        });
        return(
            <div className="flex flex-row flex-wrap gap-8 overflow-x-hidden justify-center p-10">
                {notes.map(note => <Card title={note[2][1]} content={note[1][1]} id={note[0][1]} />)}
            </div>
        ); 
    }
}

export default NotesView;

