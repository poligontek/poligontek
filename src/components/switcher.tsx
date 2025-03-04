/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

import {FiSun, FiMoon} from 'react-icons/fi'
export default function Switcher(){

    const htmlTag = document.getElementsByTagName("html")[0]
    const changeTheme = () => {
        console.log(htmlTag);
        if (htmlTag.className.includes("dark")) {
            htmlTag.className = 'light'
        } else {
            htmlTag.className = 'dark'
        }
    }

    const modeChange = () =>{
        const switcherRtl:any = document.getElementById("switchRtl")
        if(switcherRtl.innerText === "LTR"){
            htmlTag.dir = "ltr"
        }
        else{
            htmlTag.dir = "rtl"
        }
    }


    return(
        <>
        <div className="fixed top-1/4 -right-2 z-3">
            <span className="relative inline-block rotate-90">
                <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onChange={()=>changeTheme()} />
                <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-[60px] h-8" htmlFor="chk">
                    <FiMoon className="iconoir-half-moon text-yellow-500 align-middle ps-1 text-[20px] relative z-1"></FiMoon>
                    <FiSun className="iconoir-sun-light text-yellow-500 align-middle pe-1 text-[20px] relative z-1"></FiSun>
                    <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                </label>
            </span>
        </div>

        <div className="fixed top-[40%] -right-3 z-50">
            <Link to="" id="switchRtl" onClick={()=>modeChange()}>
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" >LTR</span>
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">RTL</span>
            </Link>
        </div>

        
        </>
    )
}