/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'

import logoLight from '../assets/images/logo-light.png'


import { FiChevronRight,  FiPhoneCall } from 'react-icons/fi'
import { IconType } from 'react-icons'

import { footerSocial } from '../data'

interface FooterSocial{
    link: string;
    icon: IconType;
}

export default function Footer() {
  return (
        <footer className="relative bg-slate-900 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1">
                    <div className="relative py-16">
                        <div className="relative w-full">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                                <div className="lg:col-span-4 md:col-span-12">
                                    <Link to="#" className="text-[22px] focus:outline-none">
                                        <img src={logoLight} alt=""/>
                                    </Link>
                                    <p className="mt-6 text-gray-300">Aprende de forma práctica y efectiva con clases en vivo, ya sea en sesiones individuales o en grupos reducidos, guiado por profesionales con experiencia en la industria.</p>

                                    {/* <div className="flex mt-6">
                                        <FiMapPin className="iconoir-map-pin align-middle text-2xl text-violet-600 me-2"/>
                                        <div className="">
                                            <h6 className="text-gray-300">C/54 Northwest Freeway, <br/> Houston, USA 485</h6>
                                        </div>
                                    </div> */}
                            
                                    <div className="flex mt-4">
                                        <FiPhoneCall className="iconoir-phone align-middle text-2xl text-violet-600 me-2"/>
                                        <div className="">
                                            <a href="https://api.whatsapp.com/send/?phone=5492374032946" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"> +54 9 2374 03-2946</a>
                                        </div>
                                    </div>
                                </div>
                        
                                <div className="lg:col-span-2 md:col-span-3">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold text-lg">Links Útiles</h5>

                                    <ul className="list-none footer-list mt-6">
                                        {/* {footerLink1.map((item:any,index:number)=>{ */}
                                        <li className="mt-[10px] first:mt-0 flex items-center"><FiChevronRight className="text-gray-400 align-middle me-1"></FiChevronRight><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">Cursos</Link></li>
                                        <li className="mt-[10px] first:mt-0 flex items-center"><FiChevronRight className="text-gray-400 align-middle me-1"></FiChevronRight><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">Contacto</Link></li>
                                        {/* })} */}
                                    </ul>
                                </div>
                        
                                {/* <div className="lg:col-span-2 md:col-span-3">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold text-lg">Our Institute</h5>

                                    <ul className="list-none footer-list mt-6">
                                        {footerLink2.map((item:any,index:number)=>{
                                            return(
                                                <li key={index} className="mt-[10px] first:mt-0 flex items-center"><FiChevronRight className="text-gray-400 align-middle me-1"></FiChevronRight><Link to="" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">{item}</Link></li>
                                            )
                                        })}
                                    </ul>
                                </div> */}
    
                                <div className="lg:col-span-4 md:col-span-6">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold text-lg">Nuestras redes</h5>
                            
                                    {/* <Link to="" className='mx-[2px]'><img src={app} className="h-12 inline-block mb-1" alt=""/></Link> */}
                                    {/* <Link to="" className='mx-[2px]'><img src={play} className="h-12 inline-block mb-1" alt=""/></Link> */}

                                    <ul className="list-none mt-4">
                                        {footerSocial.map((item:FooterSocial,index:number)=>{
                                            const Icon = item.icon
                                            return(
                                                <li className="inline mx-[2px]" key={index}><Link to={item.link} target="_blank" className="size-7 inline-flex justify-center items-center text-gray-400 hover:text-white border border-gray-800 dark:border-gray-700 rounded-md hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600"><Icon /></Link></li>
                                                
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-gray-800 dark:border-gray-700">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-2 items-center gap-6">
                        <div className="md:text-start text-center">
                            <p className="mb-0 text-gray-300">© {new Date().getFullYear()} PoligonTek. PoligonTek. Diseñado y Desarrollado con <i className="mdi mdi-heart text-red-600"></i> por <Link to="https://poligontek.com/" target="_blank" className="text-reset">PoligonTek</Link>.</p>
                        </div>

                        {/* <ul className="list-disc footer-list md:text-end text-center space-x-3">
                            <li className="inline-block"><i className="mdi mdi-circle-medium text-gray-400"></i> <Link to="/terms" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">Terms</Link></li>
                            <li className="inline-block mt-[10px] md:mt-0"><i className="mdi mdi-circle-medium text-gray-400"></i> <Link to="/privacy" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">Privacy</Link></li>
                            <li className="inline-block mt-[10px] md:mt-0"><i className="mdi mdi-circle-medium text-gray-400"></i> <Link to="/login" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">Login</Link></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </footer>
  )
}
