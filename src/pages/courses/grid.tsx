import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar/navbar'
import CoursesOne from '../../components/courses/courses-one'
import Newsletter from '../../components/newsletter'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scroll-to-top'

import { FiChevronRight } from 'react-icons/fi'

import { coursesData } from '../../data'

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

export default function Grid() {
  return (
    <>
        <Navbar navlight={false} tagline={false}/>

        <section className="relative py-5 bg-slate-50 dark:bg-slate-800 mt-[74px]">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-2 items-center">
                    <div className="lg:col-span-5 md:col-span-4">
                        <h3 className="text-2xl md:leading-normal leading-normal font-semibold">Courses</h3>
                    </div>

                    <div className="lg:col-span-7 md:col-span-8 md:text-end">
                        <ul className="tracking-[0.5px] mb-0 inline-flex items-center">
                            <li className="inline-block items-center text-slate-400 dark:text-white/60 duration-500 ease-in-out hover:text-violet-600 dark:hover:text-white"><Link to="/">Edupath</Link></li>
                            <li className="inline-block items-center text-slate-500 dark:text-white/60 mx-0.5 ltr:rotate-0 rtl:rotate-180"><FiChevronRight className="align-middle"/></li>
                            <li className="inline-block items-center text-slate-400 dark:text-white/60 duration-500 ease-in-out hover:text-violet-600 dark:hover:text-white"><Link to="">Courses</Link></li>
                            <li className="inline-block items-center text-slate-500 dark:text-white/60 mx-0.5 ltr:rotate-0 rtl:rotate-180"><FiChevronRight className="align-middle"/></li>
                            <li className="inline-block items-center text-violet-600 dark:text-white" aria-current="page">Grid Courses</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative py-12">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {coursesData.map((item:CoursesData,index:number)=>{
                        return(
                            <CoursesOne item={item} key={index}/>
                        )
                    })}
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <nav>
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link to="#" className="size-8 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm shadow-slate-100 dark:shadow-slate-800 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">
                                        <i className="mdi mdi-chevron-left text-[20px]"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-8 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm shadow-slate-100 dark:shadow-slate-800 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-8 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm shadow-slate-100 dark:shadow-slate-800 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">2</Link>
                                </li>
                                <li>
                                    <Link to="#" aria-current="page" className="z-10 size-8 inline-flex justify-center items-center mx-1 rounded-full text-white bg-violet-600 shadow-sm shadow-slate-100 dark:shadow-slate-800">3</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-8 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 hover:text-white bg-white dark:bg-slate-900 shadow-sm shadow-slate-100 dark:shadow-slate-800 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">4</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-8 inline-flex justify-center items-center mx-1 rounded-full text-slate-400 bg-white dark:bg-slate-900 hover:text-white shadow-sm shadow-slate-100 dark:shadow-slate-800 hover:border-violet-600 dark:hover:border-violet-600 hover:bg-violet-600 dark:hover:bg-violet-600">
                                        <i className="mdi mdi-chevron-right text-[20px]"></i>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <Newsletter/>
            </div>
        </section>

        <Footer/>

        <ScrollToTop/>
    </>
  )
}
