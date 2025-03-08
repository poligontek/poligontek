import { useState } from 'react';
import { Link } from 'react-router-dom'

import Tagline from '../../components/navbar/tagline'
import Navbar from '../../components/navbar/navbar'
import Counter from '../../components/counter';
import CoursesTwo from '../../components/courses/courses-two';
import Client from '../../components/client';
import Faq from '../../components/faq';
import Team from '../../components/team';
import Blog from '../../components/blog';
import Footer from '../../components/footer';
import ScrollToTop from '../../components/scroll-to-top';

import hero1 from '../../assets/images/course/1.jpg'
import hero2 from '../../assets/images/course/2.jpg'
import hero3 from '../../assets/images/course/3.jpg'
import hero4 from '../../assets/images/course/4.jpg'

import team1 from '../../assets/images/team/1.jpg'
import team2 from '../../assets/images/team/2.jpg'
import team3 from '../../assets/images/team/3.jpg'
import team4 from '../../assets/images/team/4.jpg'
import team5 from '../../assets/images/team/5.jpg'

import { Modal } from "flowbite-react";

import { FiVideo } from 'react-icons/fi'

import { counterData, coursesData } from '../../data';

interface CounterData{
    value: number;
    symbol: string;
    title: string;
}
interface CoursesData{
    id: number;
    image: string;
    tag1: string;
    tag2: string;
    amount: number;
    lessons: number;
    students: number;
    title: string;
    desc: string;
    user: string;
    name: string;
}

export default function IndexFive() {
    const [openModal, setOpenModal] = useState<boolean>(false);

  
  return (
    <>
    <Tagline/>
    <Navbar tagline={true} navlight={false}/>

    <section className="relative overflow-hidden md:py-44 py-36">
        <div className="container relative md:mt-16 mt-6">
            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-6">
                <div className="lg:col-span-7">
                    <h6 className="text-yellow-500 font-semibold mb-3 uppercase">100% Satisfaction Guarantee</h6>
                    <h1 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">Learn Product Design <br/> in <span className="bg-gradient-to-l from-fuchsia-500 to-violet-600 text-transparent bg-clip-text">16 weeks</span></h1>
                    <p className="text-slate-400 text-lg max-w-xl">Aprendé con clases flexibles y personalizadas. Creá tu futuro</p>
                    
                    <div className="mt-6">
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Explore Courses <i className="mdi mdi-arrow-right align-middle ms-1"></i></Link>
                        <Link to="#!" onClick={() => setOpenModal(true)}  className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-violet-600/10 hover:bg-violet-600 text-violet-600 hover:text-white ms-1 lightbox"><FiVideo className="h-4 w-4"/></Link><span className="font-medium text-slate-400 dark:text-white/80 ms-1 align-middle"> Watch Now</span>
                    </div>
                    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} position="center" className="video-modal bg-[#000000c4] z-[999999]">
                        <Modal.Body className="p-0 h-auto">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S_CGed6E610" className="md:h-[400px] h-[300px] flex justify-center align-middle"></iframe>
                        </Modal.Body>
                    </Modal>
                </div>

                <div className="lg:col-span-5">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="relative md:shrink-0">
                            <img src={hero1} className="xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 rounded-s-full" alt=""/>

                            <div className="overflow-hidden after:content-[''] after:absolute after:size-12 after:bg-fuchsia-500 after:top-0 after:-start-6 after:-z-1 after:rounded-full"></div>
                        </div>
                        
                        <div className="relative md:shrink-0">
                            <img src={hero2} className="xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 rounded-full" alt=""/>
                            
                            <div className="overflow-hidden after:content-[''] after:absolute after:size-24 after:bg-violet-600/40 after:-top-10 after:-end-0 after:-z-1 after:rounded-lg after:rotate-[36deg]"></div>
                        </div>
                        
                        <div className="relative md:shrink-0">
                            <img src={hero3} className="xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 rounded-xl" alt=""/>
                            
                            <div className="overflow-hidden after:content-[''] after:absolute after:size-40 after:bg-yellow-400 after:-bottom-10 after:-start-10 after:-z-1 after:rounded-full"></div>
                        </div>
                        
                        <div className="relative md:shrink-0">
                            <img src={hero4} className="xl:size-56 lg:size-44 md:size-40 size-44 object-cover shadow shadow-slate-100 dark:shadow-slate-800 rounded-e-full" alt=""/>
                            
                            <div className="overflow-hidden after:content-[''] after:absolute after:size-6 after:bg-violet-600/60 after:bottom-10 after:-end-12 after:-z-1 after:rounded-md"></div>
                            <div className="overflow-hidden after:content-[''] after:absolute after:size-6 after:bg-fuchsia-500/60 after:-bottom-12 after:start-10 after:-z-1 after:rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative py-12 bg-violet-600">
        <div className="container relative">
            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                <div className="lg:col-start-2 lg:col-span-10">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 items-center gap-6">
                        {counterData.map((item:CounterData,index:number)=>{
                            return(
                                <div className="counter-box text-center" key={index}>
                                    <h1 className="text-white lg:text-4xl text-3xl font-semibold mb-2"><Counter className="counter-value" value={item.value}></Counter>{item.symbol}</h1>
                                    <h5 className="counter-head text-white uppercase font-medium">{item.title}</h5>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="relative md:py-24 py-16">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Explore Our Best Courses</h4>
                <p className="text-slate-400 max-w-xl mx-auto">Aprendé con clases flexibles y personalizadas. Creá tu futuro</p>
            </div>
            
            <div className="grid lg:grid-cols-2 mt-6 gap-6">
                {coursesData.slice(0,8).map((item:CoursesData,index:number)=>{
                    return(
                        <CoursesTwo item={item} key={index}/>
                    )
                })}
            </div>

            <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                <div className="md:col-span-12 text-center">
                    <Link to="/list" className="text-slate-400 hover:text-violet-600 duration-500 ease-in-out">See More Courses <i className="mdi mdi-arrow-right align-middle"></i></Link>
                </div>
            </div>
        </div>

        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">What Our Students Say ?</h3>
                <p className="text-slate-400 max-w-xl mx-auto">Aprendé con clases flexibles y personalizadas. Creá tu futuro</p>
            </div>
            <Client/>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                <div className="lg:col-span-6 md:col-span-7">
                    <div className="relative">
                        <div className="relative md:shrink-0 lg:mx-0 mx-5">
                            <img className="object-cover md:w-96 w-84 h-[500px] rounded-lg shadow-md dark:shadow-gyay-700" src={hero4} alt=""/>
                        </div>

                        <div className="absolute bottom-10 lg:end-6 end-0">
                            <div className="relative z-1 top-10 xl:text-start lg:text-end text-end">
                                <Link to="#!" onClick={() => setOpenModal(true)} className="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-violet-600 text-white">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>

                            <div className="relative md:shrink-0">
                                <img className="object-cover size-48 rounded-lg shadow-md dark:shadow-gyay-700" src={hero2} alt=""/>
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

                <div className="lg:col-span-6 md:col-span-5">
                    <h4 className="mb-4 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Questions & Answers</h4>
                    <p className="text-slate-400 max-w-xl mx-auto">Aprendé con clases flexibles y personalizadas. Creá tu futuro</p>

                    <Faq/>
                </div>
            </div>
        </div>

        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Expert Instructors</h4>

                <p className="text-slate-400 max-w-xl mx-auto">Aprendé con clases flexibles y personalizadas. Creá tu futuro</p>
            </div>

            <Team/>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blogs Or News</h4>

                <p className="text-slate-400 max-w-xl mx-auto">Aprendé con clases flexibles y personalizadas. Creá tu futuro</p>
            </div>

            <Blog/>
        </div>
    </section>

    <Footer/>
    <ScrollToTop/>
    
    </>
  )
}
