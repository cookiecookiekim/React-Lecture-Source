import { Outlet } from "react-router-dom";
import Main from '../pages/Main';

function Layout () {
    return(
        <>
            <Main/>
            <Outlet/>
        </>
    );
}

export default Layout;