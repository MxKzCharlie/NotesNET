import ControlBar from './controlBar';
import Header from './header';
import { Outlet, useParams } from 'react-router-dom';

function Layout() {
    const {username} = useParams();

    return ( 
        <main className="w-screen h-screen grid grid-cols-custom grid-rows-custom">
            <Header usuario={username}/>
            <ControlBar />
            <Outlet />
        </main>
    );
}

export default Layout;