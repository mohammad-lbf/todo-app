import React , {useContext} from 'react';
import { worksContext } from '../context/WorksContextProvider';
import Work from '../shared/Work';

const HomeWorksContainer = () => {
    const {worksState , dispatch} = useContext(worksContext)
    return (
        <>
        {worksState.worksCounter ? 
        <div>
        <div className="container px-lg-5 mt-4">
            <div className="fs-3 text-center mb-5">همه کار ها</div>
            <div className="row justify-content-between flex-row-reverse">
            {worksState.works.map(work =>
             <Work key={work.id} id={work.id} title={work.title}
             describtion={work.describtion} done={work.done}
             date={work.date} time={work.time}
             state={worksState} dispatch={dispatch} />)}
            </div>
        </div>
        </div>
        :   <div className="text-center mt-5">
            <p className="fs-2 mb-4">.کار ثبت شده ای وجود ندارد</p>
            <div className="d-flex align-items-center justify-content-center">
                <p className="mb-1">ضربه بزنید</p>
                <i style={{backgroundColor: "#324376" , width: "40px" , height: "40px"}} className="rounded-circle mb-0 bi bi-plus-lg text-center fs-4 pt-1 mx-1 text-white"></i>
                <p className="mb-1">جهت ثبت کار روی</p>
            </div>
        </div>
        }
      
       
        </>
    );
};

export default HomeWorksContainer;