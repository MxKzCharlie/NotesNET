import Note from "./note";

function NotesView(){
    return(
        <div className="flex flex-row flex-wrap gap-8 overflow-x-hidden justify-center p-10">
            <Note />
        </div>
    );
}

export default NotesView;

