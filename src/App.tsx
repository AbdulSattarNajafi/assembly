import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Home from './pages/Home';
import Sales from './pages/Sales';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ErrorPage from './pages/ErrorPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index={true} element={<Home />} />
                    <Route path='sales' element={<Sales />} />
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                </Route>
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
