import { Outlet } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
};

export default Layout;
