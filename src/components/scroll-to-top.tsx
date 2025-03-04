import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { FiArrowUp } from 'react-icons/fi'

export default function ScrollToTop() {
    const [scroll,setScroll] = useState<boolean>(false)

    const scrollToTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    useEffect(()=>{

        const handlerScroll=()=>{
            if(window.scrollY > 50){
                setScroll(true)
            }else{setScroll(false)}
        }
        window.addEventListener('scroll',handlerScroll)

        return () => {
            window.removeEventListener('scroll',handlerScroll)
          };
    },[])
  return (
    <Link to="#" onClick={scrollToTop} id="back-to-top" className={`back-to-top fixed rounded-full z-10 bottom-5 end-5 size-8 text-center bg-violet-600 text-white flex justify-center items-center ${scroll ? '' : 'hidden'}`}><FiArrowUp data-feather="arrow-up" className="size-4"></FiArrowUp></Link>
  )
}
