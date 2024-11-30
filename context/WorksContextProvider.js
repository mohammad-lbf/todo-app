import React , {useReducer , createContext , useEffect} from 'react';
import useLocalStorage from '../hooks/UseLocalStorage';
import { successNotify , failedNotify } from '../shared/Toast';
import { ToastContainer } from 'react-toastify';

export const worksContext = createContext();

const initialState = {
    works:[],
    worksCounter:0
};

const worksReducer = (state , action)=>{
    switch (action.type){

        case "ADDWORK":
            state.works.push({...action.payload});
            successNotify("کار با موفقیت ثبت شد");
            return {
                ...state,
                works: [...state.works],
                worksCounter: state.worksCounter + 1
            };

        case "REMOVEWORK":
            const newWorks = state.works.filter(work => work.id !== action.payload.id);
            return {
                works: [...newWorks],
                worksCounter: state.worksCounter - 1
            };

        case "WORKDONE":
            const doneWorkI = state.works.findIndex(item => item.id === action.payload.id);
             state.works[doneWorkI].done = !(state.works[doneWorkI].done);
             
             return {...state};

        case "EDITWORK":
            const editedWorkI = state.works.findIndex(item => item.id == action.payload.id);
            state.works[editedWorkI].title = action.payload.newTitle;
            state.works[editedWorkI].describtion = action.payload.newDescribtion;
            successNotify("کار با موفقیت ویرایش شد");
            return {...state};
        case "LOCALSTORAGE":
            return {...action.payload}    
        default: return state;    
    }
}

const WorksContextProvider = ({children}) => {
    const [worksState , dispatch] = useReducer(worksReducer , initialState);
    const [localValue , setLocalValue] = useLocalStorage("worksState" , initialState);
    useEffect(()=>{
        dispatch({type: "LOCALSTORAGE" , payload:localValue})
    } , []);
    useEffect(()=>{
        setLocalValue(worksState);
    } , [worksState]);
    return (
        <worksContext.Provider value={{worksState , dispatch}}>
            {children}
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
                />
        </worksContext.Provider>
    );
};

export default WorksContextProvider;