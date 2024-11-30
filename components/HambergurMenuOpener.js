import React, { useEffect, useState } from 'react';
import HambergurMenu from './HambergurMenu';

const HambergurMenuOpener = (props) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        // چک کردن اندازه صفحه فقط در کلاینت
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsLargeScreen(window.innerWidth >= 1200);
            };

            handleResize(); // تنظیم مقدار اولیه
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    const clickHandler = () => {
        props.setOpen(prevOpen => !prevOpen);
    };

    // اگر صفحه بزرگ است، کامپوننت نباید نمایش داده شود
    if (isLargeScreen) {
        return null;
    }

    return (
        <>
            <div
                onClick={clickHandler}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    position: 'fixed',
                    top: '22px',
                    right: '30px',
                    width: '1.5rem',
                    height: '1.5rem',
                    cursor: 'pointer',
                    zIndex: 11000,
                }}
            >
                <div
                    style={{
                        width: '1.5rem',
                        height: '0.2rem',
                        backgroundColor: props.open ? '#fff' : '#3d6efd',
                        borderRadius: '5px',
                        transformOrigin: '1px',
                        transform: props.open ? 'rotate(45deg)' : 'rotate(0)',
                        transition: 'all 0.3s linear',
                    }}
                ></div>
                <div
                    style={{
                        width: '1.5rem',
                        height: '0.2rem',
                        backgroundColor: props.open ? '#fff' : '#3d6efd',
                        borderRadius: '5px',
                        transformOrigin: '1px',
                        transform: props.open ? 'translateX(-100%)' : 'translateX(0)',
                        opacity: props.open ? 0 : 1,
                        transition: 'all 0.3s linear',
                    }}
                ></div>
                <div
                    style={{
                        width: '1.5rem',
                        height: '0.2rem',
                        backgroundColor: props.open ? '#fff' : '#3d6efd',
                        borderRadius: '5px',
                        transformOrigin: '1px',
                        transform: props.open ? 'rotate(-45deg)' : 'rotate(0)',
                        transition: 'all 0.3s linear',
                    }}
                ></div>
            </div>

            <HambergurMenu
                open={props.open}
                setOpen={props.setOpen}
                darkmode={props.darkmode}
                setDarkmode={props.setDarkmode}
            />
        </>
    );
};

export default HambergurMenuOpener;
