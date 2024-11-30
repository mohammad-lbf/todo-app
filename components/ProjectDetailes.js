import React from 'react';
import Plus from '../shared/Plus';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
const ProjectDetailes = () => {
    return (
        <div className="home rounded text-end p-3">
            <div className="text-warning d-flex justify-content-end align-items-center mb-3">
            <h1 className="fs-4 m-2">: جزئیات پروژه</h1>
            <i className="bi bi-info-circle text-warning"></i>
            </div>
            <div>
                <p className="mb-3">
                    نام پروژه : برنامه پیشرفته ثبت کار
                    <br />
                    <br />
                    طراح و توسعه دهنده : محمد لبافی
                </p>
                <Link className="btn btn-primary mb-3" href="/aboutdeveloper">درباره توسعه دهنده</Link>
                <p>: تکنولوژی های مورد استفاده در این پروژه</p>
                <p className="lh-2 text-center text-lg-start">
                    HTML & CSS
                    <br/>
                    Java Script
                    <br />
                    bootstrap 5
                    <br />
                    Git & Git hub
                    <br />
                    React js
                    <br/>
                    react router dom (SPA site)
                    <br />
                    React hooks:
                    <br />
                    useEffect , useContext , useReducer , useState , custom hook (useLocalStorage)
                    <br />
                    React context
                    <br />
                    styled components
                    <br />
                    responsive design
                </p>
            </div>
            <Plus />
        </div>

    );
};

export default ProjectDetailes;