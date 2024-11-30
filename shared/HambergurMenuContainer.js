import React , {useContext} from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { filterWorksContext } from '../context/FilterWorksContextProvider';
// import '../styles/HambergurMenuContainer.css';
import {worksContext} from '../context/WorksContextProvider';

const HambergurMenuContainer = ({darkmode , setDarkmode , setOpen}) => {
    const {worksState , dispatch} = useContext(worksContext);
    const LinkClick=()=>{
        setOpen(false);
    }
    const {doneWorksFilter , unDoneWorksFilter , todayWorksFilter} = useContext(filterWorksContext);
    return (
        <div>
            <aside className="ham-menu d-flex d-xl-none flex-column align-items-center py-4">
            <Link href="/home">
                <button className="ham-menu-option" onClick={LinkClick}>
                <div className="d-flex justify-content-between flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-house text-success"></i>
                <p className="mb-0" >خانه</p>
                </div>
                <p className="mb-0 ham-todo-num" style={{}}>{worksState.worksCounter}</p>
            </div>
                </button>
            </Link>
            
            <Link href="/today">
            <button className="ham-menu-option" onClick={LinkClick}>
            <div className="d-flex justify-content-between flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-calendar-day text-info"></i>
                <p className="mb-0">کار های امروز</p>
                </div>
                <p className="mb-0 ham-todo-num">{todayWorksFilter.length}</p>
            </div>
            </button>
            </Link>
            <Link href="/done">
            <button className="ham-menu-option" onClick={LinkClick}>
            <div className="d-flex justify-content-between flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-check-circle text-primary"></i>
                <p className="mb-0">کار های انجام شده</p>
                </div>
                <p className="mb-0 ham-todo-num">{doneWorksFilter.length}</p>
            </div>
            </button>
            </Link>
            <Link href="/undone">
            <button className="ham-menu-option" onClick={LinkClick}>
            <div className="d-flex justify-content-between flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-x-circle text-danger"></i>
                <p className="mb-0">کار های انجام نشده</p>
                </div>
                <p className="mb-0 ham-todo-num">{unDoneWorksFilter.length}</p>
            </div> 
            </button>
            </Link>
            <Link href="/projectdetailes">
            <button className="ham-menu-option" onClick={LinkClick}>
            <div className="d-flex justify-content-between flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i class="bi bi-info-circle text-warning"></i>
                <p className="mb-0">جزئیات پروژه</p>
                </div>
            </div> 
            </button>
            </Link>
            <a href="https://hamyarjahan.netlify.app/">
            <button className="ham-menu-option" onClick={LinkClick}>
            <div className="d-flex justify-content-between flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                {/* <i class="bi bi-info-circle text-warning"></i> */}
                <p className="mb-0">بازگشت به سامانه همیار</p>
                </div>
            </div> 
            </button>
            </a>
            <div className="d-flex darkmode-option">
               <div className="form-check form-switch ">
                 <input className="form-check-input" checked={darkmode ? true : false} onChange={()=>setDarkmode(!darkmode)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
               </div>
               <p className="mb-0">حالت تیره</p>
            </div>  
        </aside>
        </div>
    );
};

export default HambergurMenuContainer;