import React , {useState} from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
// import '../styles/Work.css';

const Work = ({id , title , describtion , done , date , time , state , dispatch}) => {
    const [doneWork , setDoneWork] = useState(false)
    const removeBtnHandler = ()=>{
        dispatch({type:"REMOVEWORK" , payload:{id:id}})
    }
    const doneWorkHandler = (event)=>{
        dispatch({type:"WORKDONE" , payload:{id:id}});
    }
    return (
        <div className="col-12 col-lg-6">
            <div className={` work mb-3 text-end `}>
            <div className={`${done && "text-decoration-line-through text-secondary"}`}>
            <p dir="rtl">عنوان کار: {title}</p>
            <p dir="rtl" >شرح کار: {describtion}</p>
            <div className="d-flex flex-row-reverse justify-content-between">
            <p>:تاریخ و زمان ثبت</p>    
            <div className="d-flex">
            <p className="me-3">{date}</p>
            <p>{time}</p>
            </div>
            </div>
            </div>    
            {done && <p style={{textDecoration:"none"}} className="text-warning">!انجام شد</p>}
            <div className="d-flex justify-content-center align-items-center mt-1">
                <button onClick={removeBtnHandler} className="btn btn-danger"><i className="bi bi-trash"></i></button>
                <button onClick={doneWorkHandler} className="btn btn-primary mx-2"><i className="bi bi-check2"></i></button>
                <Link href={`/edit/${id}`} className="btn btn-primary"><i className="bi bi-pen"></i></Link>
            </div>
            </div>
        </div>
    );
};

export default Work;