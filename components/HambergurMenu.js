import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import HambergurMenuContainer from '../shared/HambergurMenuContainer';

const HambergurMenu = (props) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // فقط در کلاینت اجرا می‌شود
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile(); // بررسی اولیه
        window.addEventListener('resize', checkMobile); // اضافه کردن لیسنر برای تغییر سایز
        return () => window.removeEventListener('resize', checkMobile); // پاک کردن لیسنر هنگام خروج از کامپوننت
    }, []);

    const divStyle = {
        backgroundColor: props.darkmode ? "#324376" : "#324376",
        color: "#fff",
        border: props.darkmode ? "1px solid rgb(48, 48, 48)" : "none",
        width: "300px",
        height: "100vh",
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 105,
        transition: "all 0.3s linear",
        display: isMobile ? "block" : "none", // بررسی موبایل
        transform: props.open ? "translateX(0)" : "translateX(100%)",
    };

    return (
        <div style={divStyle} className="d-flex d-xl-none flex-column pt-5">
            <HambergurMenuContainer darkmode={props.darkmode} setDarkmode={props.setDarkmode} setOpen={props.setOpen} />
        </div>
    );
};

export default HambergurMenu;
