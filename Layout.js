import React , {useState , useEffect} from 'react';
// import { Route, Routes } from 'react-router-dom';
import DesktopAside from './components/DesktopAside';
import Edit from './components/Edit';
import Form from './components/Form';
import Header from './components/Header';
import Home from './components/Home';
import WorksContextProvider from './context/WorksContextProvider';
import FilterWorksContextProvider from './context/FilterWorksContextProvider';
import useLocalStorage from './hooks/UseLocalStorage';
import TodayWorks from './components/TodayWorks';
import DoneWorks from './components/ِDoneWorks';
import UnDoneWorks from './components/UnDoneWoks';
import HambergurMenuModal from './components/HambergurMenuModal';
import Footer from './components/Footer';
import ProjectDetailes from './components/ProjectDetailes';
import AboutDeveloper from './components/AboutDeveloper';

const Layout = ({children}) => {
  const [darkmode , setDarkmode] = useState(true);
  const [localDarkMode , setLocalDarkMode] = useLocalStorage("darkmode" , true)
  const[open , setOpen] = useState(false);
  useEffect(()=>{
    setDarkmode(localDarkMode);
  } , [] );
  useEffect(()=>{
    setLocalDarkMode(darkmode)
  } , [darkmode])
  return (
    <>
    <WorksContextProvider>
      <FilterWorksContextProvider>
      <div className={`app ${darkmode && "darkmode"} d-flex flex-column flex-xl-row align-items-center justify-content-between `}>
      <DesktopAside setDarkmode={setDarkmode} darkmode={darkmode} />
      <Header open={open} setOpen={setOpen} darkmode={darkmode} setDarkmode={setDarkmode} />
      <HambergurMenuModal open={open} setOpen={setOpen} />
      <div className="d-flex flex-column w-100 align-items-center align-items-xl-start ms-xl-2">
          {children}
        <Footer />
      </div>
    </div>
      </FilterWorksContextProvider>
    </WorksContextProvider>
    </>
  );
};

export default Layout;