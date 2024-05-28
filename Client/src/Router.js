import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Ask from './pages/Ask/Ask';
import Admin from './pages/Admin/Admin';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const Router = () => {

    const router = useLocation();

    const navigate = useNavigate();

    const adminRoutText = router.pathname.split('/').includes('admin');

    // useEffect(() => {
    //     if(router.pathname === '/'){
    //         navigate('/home');
    //     }
    // },[]);

    return (
        <>
            {!adminRoutText && <Header />}
            <Routes>
                <Route path={'/admin/*'} element={<Admin />} />
                <Route path={'/'} element={<Home />} />
                <Route path={'/ask'} element={<Ask />} />
                <Route path={'/about'} element={<About />} />
                <Route path={'/contact'} element={<Contact />} />
                
            </Routes>
            {!adminRoutText && <Footer />}
        </>
    );
};

export default Router;