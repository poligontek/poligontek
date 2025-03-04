import { Link } from 'react-router-dom';

import Navbar from '../../components/navbar/navbar'
import Tagline from '../../components/navbar/tagline'
import AboutOne from '../../components/about/about-one'
import Features from '../../components/features'
import CoursesTwo from '../../components/courses/courses-two'
import Cta from '../../components/cta'
import GetInTouch from '../../components/get-in-touch'
import Client from '../../components/client'
import Team from '../../components/team'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scroll-to-top'

import bg2 from '../../assets/images/bg/2.jpg'
import bg3 from '../../assets/images/bg/3.jpg'
import bg4 from '../../assets/images/bg/4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { coursesData } from '../../data'

export default function IndexFour() {
  return (
    <>
        <Tagline/>
        <Navbar navlight={true} tagline={true}/>

        <section className="swiper mySwiper swiper-slider-hero relative block h-screen" id="home">
            <Swiper className="swiper-wrapper" modules={[Autoplay]} autoplay={true} speed={3000}>
                <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute start-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;" style={{backgroundImage:`url(${bg2})`}}>
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="container relative md:mt-16">
                            <div className="grid grid-cols-1">
                                <div className="text-center">
                                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Unlock Your Potential <br/> with Online Learning</h1>
                                    <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                                    
                                    <div className="mt-6">
                                        <Link to="" className="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Contact Us <i className="mdi mdi-arrow-right align-middle ms-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> 

                <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute start-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;" style={{backgroundImage:`url(${bg3})`}}>
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="container relative md:mt-16">
                            <div className="grid grid-cols-1">
                                <div className="text-center">
                                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Find the Perfect Course <br/> for Your Carrier Goals</h1>
                                    <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                                    
                                    <div className="mt-6">
                                        <Link to="" className="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Get Started <i className="mdi mdi-arrow-right align-middle ms-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> 

                <SwiperSlide className="swiper-slide flex items-center overflow-hidden">
                    <div className="slide-inner absolute start-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;" style={{backgroundImage:`url(${bg4})`}}>
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="container relative md:mt-16">
                            <div className="grid grid-cols-1">
                                <div className="text-center">
                                    <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">Welcome to Your Online <br/> Learning Journey</h1>
                                    <p className="text-white/70 text-lg max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS v3.x html page.</p>
                                    
                                    <div className="mt-6">
                                        <Link to="" className="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Get Started <i className="mdi mdi-arrow-right align-middle ms-1"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide> 
            </Swiper>     
        </section>

        <div className="container relative -mt-12 z-1">
            <div className="flex justify-center">
                <div className="lg:w-3/4 md:w-11/12 p-6 bg-white dark:bg-slate-900 rounded-xl shadow shadow-slate-100 dark:shadow-slate-800">
                    <form className="relative mx-auto">
                        <input type="text" id="searchCourse" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800" placeholder="Search..."/>
                        <button type="submit" className="h-12 px-6 tracking-wide items-center justify-center font-medium bg-violet-600 text-white rounded-full absolute top-[1px] end-[1px]">Search Now</button>
                    </form>
                </div>
            </div>
        </div>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <AboutOne title={false}/>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Discover Powerful Features</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>

                <Features/>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Explore Our Best Courses</h4>
                    
                    <p className="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                
                <div className="grid lg:grid-cols-2 mt-6 gap-6">
                    {coursesData.slice(0,8).map((item,index)=>{
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
        </section>

        <Cta/>

        <section className="relative lg:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Expert Instructors</h4>

                    <p className="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>
                <Team/>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">What Our Students Say ?</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                </div>

                <Client/>
            </div>

            <div className="container relative lg:mt-24 mt-16">
                <GetInTouch/>
            </div>
        </section>
        <Footer/>
        <ScrollToTop/>
        
    </>
  )
}
