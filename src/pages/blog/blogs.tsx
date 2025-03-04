import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar/navbar'
import Newsletter from '../../components/newsletter'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scroll-to-top'

import bg from '../../assets/images/bg/3.jpg'

import { blogData } from '../../data'

import { FiCalendar, FiClock } from 'react-icons/fi'

interface BlogData{
    id: number;
    image: string;
    tag: string;
    date: string;
    title: string;
}

export default function Blogs() {
  return (
    <>
        <Navbar navlight={true} tagline={false}/>

        <section className="relative table w-full py-32 lg:py-44 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white">Blogs & News</h3>
                </div>
            </div>
        </section>
        <div className="relative">
            <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {blogData.map((item:BlogData,index:number)=>{
                        return(
                            <div className="group relative h-fit overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 transition-all duration-500" key={index}>
                                <div className="relative overflow-hidden">
                                    <img src={item.image} className="" alt=""/>
                                    <div className="absolute start-6 bottom-6">
                                        <span className="bg-violet-600 text-white text-[12px] px-2.5 py-1 rounded-md h-4">{item.tag}</span>
                                    </div>
                                </div>

                                <div className="relative p-6">
                                    <div className="">
                                        <div className="flex justify-between mb-4">
                                            <span className="text-slate-400 text-sm flex items-center"><FiCalendar className="size-4 me-1"/> {item.date}</span>
                                            <span className="text-slate-400 text-sm flex items-center"><FiClock className="size-4 me-1"/> 5 Min</span>
                                        </div>

                                        <Link to={`/blog-detail/${item.id}`} className="text-lg hover:text-violet-600 font-medium">{item.title}</Link>
                                        
                                        <div className="mt-3">
                                            <Link to={`/blog-detail/${item.id}`} className="btn btn-link hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out">Read More <i className="mdi mdi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
