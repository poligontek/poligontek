
import { useState } from "react";
import { Modal } from "flowbite-react";
import { Link } from 'react-router-dom'

import course4 from '../assets/images/course/4.jpg'
import course2 from '../assets/images/course/2.jpg'
import team1 from '../assets/images/team/1.jpg'
import team2 from '../assets/images/team/2.jpg'
import team3 from '../assets/images/team/3.jpg'
import team4 from '../assets/images/team/4.jpg'
import team5 from '../assets/images/team/5.jpg'


export default function FaqAbout() {
    const [openModal, setOpenModal] = useState<boolean>(false);
   
  return (
    <>
        <div className="lg:col-span-6 md:col-span-7">
            <div className="relative">
                <div className="relative md:shrink-0 lg:mx-0 mx-5">
                    <img className="object-cover md:w-96 w-84 h-[500px] rounded-lg shadow-md dark:shadow-gyay-700" src={course4} alt=""/>
                </div>

                <div className="absolute bottom-10 lg:end-6 end-0">
                    <div className="relative z-1 top-10 xl:text-start lg:text-end text-end">
                        <Link to="" onClick={() => setOpenModal(true)} className="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-violet-600 text-white">
                            <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                        </Link>
                    </div>

                    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} position="center" className="video-modal bg-[#000000c4] z-[999999]">
                        <Modal.Body className="p-0 h-auto">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S_CGed6E610" className="md:h-[400px] h-[300px] flex justify-center align-middle"></iframe>
                        </Modal.Body>
                    </Modal>

                    
                    <div className="relative md:shrink-0">
                        <img className="object-cover size-48 rounded-lg shadow-md dark:shadow-gyay-700" src={course2} alt=""/>
                    </div>
                </div>

                <div className="absolute md:top-16 top-12 md:-start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 z-2 mover">
                    <h5 className="font-semibold mb-3">Nuestros Alumnos</h5>
                    
                    <ul className="list-none relative">
                        <li className="inline-block relative"><Link to=""><img src={team1} className="size-10 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                        <li className="inline-block relative -ms-4"><Link to=""><img src={team2} className="size-10 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                        <li className="inline-block relative -ms-4"><Link to=""><img src={team3} className="size-10 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                        <li className="inline-block relative -ms-4"><Link to=""><img src={team4} className="size-10 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                        <li className="inline-block relative -ms-4"><Link to=""><img src={team5} className="size-10 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt=""/></Link></li>
                        <li className="inline-block relative -ms-4"><Link to="" className="size-9 table-cell tracking-wide align-middle text-base text-center rounded-full bg-violet-600 text-white hover:z-1 hover:scale-105 transition-all duration-500"><i className="mdi mdi-plus"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </>
  )
}
