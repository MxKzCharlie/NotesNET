import ControlBar from './controlBar';
import Header from './header';
import { Outlet } from 'react-router-dom';

function Layout() {
    return ( 
        <main className="w-screen h-screen grid grid-cols-custom grid-rows-custom">
            <Header />
            <ControlBar />
            <Outlet />
        </main>
    );
}

export default Layout;