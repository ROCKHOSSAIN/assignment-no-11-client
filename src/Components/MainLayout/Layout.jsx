import {Outlet} from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar';
import Footer from '../Pages/Home/Footer';
import { useEffect, useState } from 'react';


const Layout = () => {
    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
          setTheme('dark');
        }
        else {
          setTheme('light');
        }
      }, [])
    const [theme,setTheme]= useState("light")
     useEffect(()=>{
          if (theme==='dark') {
               document.documentElement.classList.add('dark');
             } else {
               document.documentElement.classList.remove('dark');
             }
     },[theme]);
     const handleThemeSwitch=()=>{
        setTheme(theme === "dark" ? "light" : "dark");
     }
    return (
        <div>
            <div className={theme === "dark" ? "bg-black" : "bg-white"}>

            <Navbar handleThemeSwitch={handleThemeSwitch}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;