import React , {useContext} from 'react';
import Link from 'next/link';
import { worksContext } from '../context/WorksContextProvider';
import { filterWorksContext } from '../context/FilterWorksContextProvider';
// import '../styles/DesktopAside.css';

const DesktopAside = ({setDarkmode , darkmode}) => {
    const {worksState , dispatch} = useContext(worksContext);
    const {doneWorksFilter , unDoneWorksFilter , todayWorksFilter} = useContext(filterWorksContext);
    return (
        <aside className="aside d-none d-xl-flex flex-column align-items-center py-4">
            <Link href="/home">
            <div className="d-flex desktop-aside-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-house text-success"></i>
                <p className="mb-0">خانه</p>
                </div>
                <p className="mb-0 todo-num">{worksState.worksCounter}</p>
            </div>
            </Link>
            <Link href="/today">
            <div className="d-flex desktop-aside-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-calendar-day text-info"></i>
                <p className="mb-0">کار های امروز</p>
                </div>
                <p className="mb-0 todo-num">{todayWorksFilter.length}</p>
            </div>
            </Link>
            <Link href="/done">
            <div className="d-flex desktop-aside-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-check-circle text-primary"></i>
                <p className="mb-0">کار های انجام شده</p>
                </div>
                <p className="mb-0 todo-num">{doneWorksFilter.length}</p>
            </div>
            </Link>
            <Link href="/undone">
            <div className="d-flex desktop-aside-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i className="bi bi-x-circle text-danger"></i>
                <p className="mb-0">کار های انجام نشده</p>
                </div>
                <p className="mb-0 todo-num">{unDoneWorksFilter.length}</p>
            </div> 
            </Link>
            <Link href="/projectdetailes">
            <div className="d-flex desktop-aside-option flex-row-reverse">
                <div className="d-flex flex-row-reverse">
                <i class="bi bi-info-circle text-warning"></i>
                <p className="mb-0">جزئیات پروژه</p>
                </div>
            </div> 
            </Link>
            <a href="https://hamyarjahan.netlify.app/">
            <div className="d-flex desktop-aside-option flex-row-reverse border">
                <div className="d-flex flex-row-reverse">
                {/* <i class="bi bi-info-circle text-warning"></i> */}
                <p className="mb-0">بازگشت به سامانه همیار</p>
                </div>
            </div> 
            </a>
            <div className="d-flex darkmode-option">
               <div className="form-check form-switch ">
                 <input className="form-check-input" checked={darkmode ? true : false} onChange={()=>setDarkmode(!darkmode)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
               </div>
               <p className="mb-0">حالت تیره</p>
            </div>  
            <div className="text-center mt-5 border p-3 rounded copy-right">
                <p className="mb-1">:طراح و توسعه دهنده</p>
                
                <p className="mb-1">محمد لبافی</p>
                <Link className="btn btn-primary mb-0" href="/aboutdeveloper">درباره توسعه دهنده</Link>
            </div>  
        </aside>
    );
};

export default DesktopAside;