import React , {useEffect , useState , useContext} from 'react';
import { filterWorksContext } from '../context/FilterWorksContextProvider';
import { worksContext } from '../context/WorksContextProvider';
import Plus from '../shared/Plus';
import Work from '../shared/Work';
// import '../styles/Home.css'
const UnDoneWorks = () => {
    const {unDoneWorksFilter} = useContext(filterWorksContext);
    const {worksState , dispatch} = useContext(worksContext);

    return (
        <div className="home rounded">
        {unDoneWorksFilter.length ? 
        <div>
        <div className="container px-lg-5 my-4">
            <div className="fs-3 text-center mb-5">کار های انجام نشده</div>
            <div className="row justify-content-between flex-row-reverse">
            {unDoneWorksFilter.map(work =>
             <Work key={work.id} id={work.id} title={work.title}
             describtion={work.describtion} done={work.done}
             date={work.date} time={work.time}
             state={worksState} dispatch={dispatch} />)}
            </div>
        </div>
        </div>
        :   <div className="text-center mt-5">
            <p className="fs-2 mb-4">کار انجام نشده ای وجود ندارد</p>
            <div className="d-flex align-items-center justify-content-center">
                <p className="mb-1">ضربه بزنید</p>
                <i style={{backgroundColor: "#324376" , width: "40px" , height: "40px"}} className="rounded-circle mb-0 bi bi-plus-lg text-center fs-4 pt-1 mx-1 text-white"></i>
                <p className="mb-1">جهت ثبت کار روی</p>
            </div>
        </div>
        }
      
       <Plus />
        </div>
    );
};

export default UnDoneWorks;