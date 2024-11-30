import React , {createContext , useContext , useState , useEffect} from 'react';
import { worksContext } from './WorksContextProvider';
export const filterWorksContext = createContext();

const FilterWorksContextProvider = ({children}) => {
    const nowDate = new Date();
    const year = nowDate.getFullYear();
    const month = nowDate.getMonth();
    const day = nowDate.getDate();
    const todayDate = `${year < 10 ? "0" : ""}${year}/${month < 10 ? "0" : ""}${month + 1}/${day < 10 ? "0" : ""}${day}`;
    console.log(nowDate.getMonth())
    const {worksState} = useContext(worksContext);

    const [doneWorksFilter , setDoneWorksFilter] = useState([]);
    const [unDoneWorksFilter , setUnDoneWorksFilter] = useState([]);
    const [todayWorksFilter , setTodayWorksFilter] = useState([]);

    useEffect(()=>{
        setDoneWorksFilter(worksState.works.filter(item => item.done));
        setUnDoneWorksFilter(worksState.works.filter(item => !(item.done)));
        setTodayWorksFilter(worksState.works.filter(item => item.date == todayDate))
    } , [worksState])

    return (
        <filterWorksContext.Provider value={{doneWorksFilter , unDoneWorksFilter , todayWorksFilter}}>
            {children}
        </filterWorksContext.Provider>
    );
};

export default FilterWorksContextProvider;