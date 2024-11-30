import React , {useEffect , useState , useContext} from 'react';
import { filterWorksContext } from '../context/FilterWorksContextProvider';
import { worksContext } from '../context/WorksContextProvider';
import Plus from '../shared/Plus';
import Work from '../shared/Work';
// import '../styles/Home.css'
const TodayWorks = () => {
    const {todayWorksFilter} = useContext(filterWorksContext);
    const {worksState , dispatch} = useContext(worksContext);
    console.log(todayWorksFilter)
    return (
        <div className="home rounded">
        {todayWorksFilter.length ? 
        <div>
        <div className="container px-lg-5 my-4">
            <div className="fs-3 text-center mb-5">کار های ثبت شده ی امروز</div>
            <div className="row justify-content-between flex-row-reverse">
            {todayWorksFilter.map(work =>
             <Work key={work.id} id={work.id} title={work.title}
             describtion={work.describtion} done={work.done}
             date={work.date} time={work.time}
             state={worksState} dispatch={dispatch} />)}
            </div>
        </div>
        </div>
        :   <div className="text-center mt-5">
            <p className="fs-2 mb-4">امروز کاری ثبت نشده است</p>
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

export default TodayWorks;