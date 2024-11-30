import React from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
// import '../styles/Footer.css'
const Footer = () => {
    return (
        <footer className="main-footer mb-2 mt-0 py-3 d-flex flex-row-reverse justify-content-between align-items-center px-3 rounded">
            <div className="text-end">
                <p className="mb-4">برنامه پیشرفته ثبت کار</p>
                <p className="text-secondary">:طراح و توسعه دهنده</p>
                <p className="text-secondary">محمد لبافی</p>
                <Link href="/aboutdeveloper">درباره توسعه دهنده</Link>
            </div>
            <div className="d-flex flex-column align-items-end text-muted">
                <Link className="text-secondary" href="/home">خانه</Link>
                <Link className="text-secondary" href="/today">کار های امروز</Link>
                <Link className="text-secondary" href="/done">کار های انجام شده</Link>
                <Link className="text-secondary" href="/undone">کارهای انجام نشده</Link>
                <a className="text-secondary" href="https://hamyarjahan.netlify.app/">بازگشت به سامانه همیار</a>
            </div>
            <div>

            </div>
        </footer>
    );
};

export default Footer;