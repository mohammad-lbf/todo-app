import React , {useState} from 'react';
// import '../styles/Header.css'
import HambergurMenuOpener from './HambergurMenuOpener';
const Header = ({darkmode , setDarkmode , open , setOpen}) => {
    return (
        <header className="main-header py-3 d-flex justify-content-between justify-content-xl-center align-items-center px-2 px-xl-0 rounded ms-xl-1">
            <HambergurMenuOpener darkmode={darkmode} setDarkmode={setDarkmode} open={open} setOpen={setOpen} />
            <div><p className="mb-0 header-title">برنامه پیشرفته ثبت کار</p></div>
        </header>
    );
};

export default Header;