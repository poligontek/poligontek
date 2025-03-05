/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from 'react-router-dom'

import team1 from '../../assets/images/team/2.jpg'
import course1 from '../../assets/images/course/1.jpg'
import course2 from '../../assets/images/course/2.jpg'

import Navbar from '../../components/navbar/navbar'
import CoursesOne from '../../components/courses/courses-one'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scroll-to-top'

import { FiBook, FiBookOpen, FiBox, FiClock, FiShoppingCart, FiWifi } from 'react-icons/fi'
import { coursesData } from '../../data'
import VideoModal from '../../components/video-modal'

export default function CourseDetail() {
    const params = useParams()
    const id:any = params.id
    const data = coursesData.find((item)=>item.id === parseInt(id))

  return (
    <>
    <Navbar navlight={false} tagline={false}/>
    <section className="relative pt-32 md:pb-24 pb-16">
        <div className="container">
            <div className="md:flex justify-center">
                <div className="lg:w-3/5">
                    <h3 className="text-3xl leading-normal font-medium">{data?.title ? data?.title : 'Become a Professional Graphic Designer'}</h3>
                    <div className="flex items-center mx-auto mt-3">
                        <img src={data?.user ? data?.user : team1} className="size-8 rounded-full shadow-md dark:shadow-gray-800" alt=""/>
                        <Link to="" className="font-semibold block ms-3">{data?.name ? data?.name : 'Calvin Carlo'}</Link>
                    </div>
                </div>
            </div>

            <div className="md:flex justify-center text-center">
                <div className="lg:w-4/5">
                    <ul className="tracking-[0.5px] mb-0 inline-block mt-4">
                        <li className="inline-flex items-center mt-2 me-5">
                            <FiClock className="text-lg"/>
                            <span className="text-slate-400 ms-2">4 Semanas</span>
                        </li>
    
                        <li className="inline-flex items-center mt-2 me-5">
                            <FiWifi className="text-lg"/>
                            <span className="text-slate-400 ms-2">Principiante</span>
                        </li>
                        
                        <li className="inline-flex items-center mt-2 me-5">
                            <FiBook className="text-lg"/>
                            <span className="text-slate-400 ms-2">16 lecciones</span>
                        </li>
                        
                        <li className="inline-flex items-center mt-2 me-5">
                            <FiBox className="text-lg"/>
                            <span className="text-slate-400 ms-2">4 Quiz</span>
                        </li>
                        
                        <li className="inline-flex items-center mt-2 me-5">
                            <FiBookOpen className="text-lg"/>
                            <span className="text-slate-400 ms-2">56 estudiantes</span>
                        </li>
                        
                        <li className="inline-flex items-center mt-2">
                            <FiShoppingCart className="text-lg"/>
                            <Link to="https://1.envato.market/PoligonTek" target="_blank" className="text-violet-600 ms-2">Enroll Now</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="md:flex justify-center mt-6">
                <div className="lg:w-full">
                    <div className="relative">
                        <img src={data?.image ? data.image : course1} className="rounded-lg shadow-md dark:shadow-gray-800" alt=""/>
                        <VideoModal/>
                    </div>
                </div>
            </div>

            <div className="md:flex justify-center mt-10">
                <div className="lg:w-3/5">
                    <h5 className="text-2xl font-semibold mb-4">{data?.title ? data?.title : 'Titulo del curso'}</h5>

                <p>
                {data?.descripcion ? data?.descripcion : 'Descripción del curso'}</p> 
  

                    <img src={course2} className="rounded-md shadow mt-4" alt=""/>

      
    

                </div>
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Cursos Recientes</h4>

                <p className="text-slate-400 max-w-xl mx-auto">Aprendé con clases flexibles y personalizadas. Creá tu futuro</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                {coursesData.slice(0,3).map((item,index)=>{
                    return(
                        <CoursesOne item={item} key={index}/>
                    )
                })}
            </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="md:flex justify-center">
                <div className="lg:w-2/3 text-center">
                    <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">Subscribe our weekly subscription</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Add some text to explain benefits of subscripton on your services. We'll send you the best of our blog just once a weekly.</p>

                    <div className="mt-6">
                        <div className="text-center subcribe-form">
                            <form className="relative mx-auto max-w-xl">
                                <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800" placeholder="Enter your email id.."/>
                                <button type="submit" className="h-12 px-6 tracking-wide items-center justify-center font-medium bg-violet-600 text-white rounded-full absolute top-[1px] end-[1px]">Subcribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Footer/>

    <ScrollToTop/>
    </>
  )
}
