import ControlBar from './components/controlBar';
import Header from './components/header';
import NotesView from './components/notesView';

function App() {
  return (
    <div className="w-screen h-screen grid grid-cols-custom grid-rows-custom">
      <Header />
      <ControlBar />
      <NotesView />
    </div>  
  );
}

export default App;
