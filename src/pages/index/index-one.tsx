import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar/navbar'

import Partner from '../../components/partner'
import AboutOne from '../../components/about/about-one'

import CoursesOne from '../../components/courses/courses-one'

import Footer from '../../components/footer'
import ScrollToTop from '../../components/scroll-to-top'

import bg from '../../assets/images/bg/bg.png'

import hero from '../../assets/images/hero/1.png'

import team1 from '../../assets/images/team/1.jpg'
import team2 from '../../assets/images/team/2.jpg'
import team3 from '../../assets/images/team/3.jpg'
import team4 from '../../assets/images/team/4.jpg'
import team5 from '../../assets/images/team/5.jpg'



import { coursesData } from '../../data'
import Client from '../../components/client'


interface CoursesData {
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

export default function IndexOne() {

    return (
        <>
            <Navbar navlight={false} tagline={false} />

            <section className="relative overflow-hidden md:h-screen flex items-center py-36 bg-violet-600/5 dark:bg-violet-600/20  bg-center bg-no-repeat bg-cover" id="home" style={{ backgroundImage: `url(${bg})` }}>
                <div className="container relative">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
                        <div>
                            <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">Aprendé a <span className="before:block before:absolute before:-inset-2 before:-skew-y-6 before:bg-gradient-to-tl before:from-violet-600 before:to-fuchsia-600 relative inline-block"><span className="relative text-white font-bold">Programar</span></span> y creá tu <span className="font-bold">futuro.</span></h1>
                            <p className="text-slate-400 text-lg max-w-xl">Aprende de forma práctica y efectiva con clases en vivo, ya sea en sesiones individuales o en grupos reducidos, guiado por profesionales con experiencia en la industria.

                            </p>

      
                            <div className="mt-6 flex justify-center gap-4">
                                <Link to="/cursos" className="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Cursos<i className="mdi mdi-arrow-right align-middle ms-1"></i></Link>
                                <Link to="https://api.whatsapp.com/send/?phone=5492374032946" className="h-12 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white">Contacto<i className="mdi mdi-arrow-right align-middle ms-1"></i></Link>
                            </div>


                        </div>

                        <div className="lg:ms-8">
                            <div className="relative">
                                <img src={hero} className="mx-auto" alt="" />

                                <div className="overflow-hidden after:content-[''] after:absolute after:size-10 after:bg-violet-600/20 after:top-0 after:start-0 after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

                                <div className="absolute md:bottom-16 bottom-12 md:-start-10 -start-2 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 z-2 mover">
                                    <h5 className="text-lg font-medium mb-3">Nuestros Alumnos</h5>

                                    <ul className="list-none relative">
                                        <li className="inline-block relative"><Link to="#"><img src={team1} className="size-10 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                        <li className="inline-block relative -ms-4"><Link to="#"><img src={team2} className="size-10 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                        <li className="inline-block relative -ms-4"><Link to="#"><img src={team3} className="size-10 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                        <li className="inline-block relative -ms-4"><Link to="#"><img src={team4} className="size-10 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                        <li className="inline-block relative -ms-4"><Link to="#"><img src={team5} className="size-10 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                        <li className="inline-block relative -ms-4"><Link to="#" className="size-9 table-cell tracking-wide align-middle text-base text-center rounded-full bg-violet-600 text-white hover:z-1 hover:scale-105 transition-all duration-500"><i className="mdi mdi-plus"></i></Link></li>
                                    </ul>
                                </div>



                                <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl from-violet-600 to-fuchsia-600 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 md:translate-x-0 -translate-x-1/2 -z-1 shadow-md shadow-violet-600/10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-6">
                <div className="container relative">
                    <Partner />
                </div>
            </section>

            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <AboutOne title={false} />
                </div>

          

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-6 text-center">
                        <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Explora nuestros cursos
                          

                        </h4>

                        <p className="text-slate-400 max-w-xl mx-auto">Aprendé con clases flexibles y personalizadas. Creá tu futuro</p>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                        {coursesData.slice(0, 6).map((item: CoursesData, index: number) => {
                            return (
                                <CoursesOne item={item} key={index} />
                            )
                        })}
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                        <div className="md:col-span-12 text-center">
                            <Link to="/cursos" className="text-slate-400 hover:text-violet-600 duration-500 ease-in-out">Ver mas cursos<i className="mdi mdi-arrow-right align-middle"></i></Link>
                        </div>
                    </div>
                </div>





                <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">¿Qué dicen nuestros estudiantes?</h3>
                <p className="text-slate-400 max-w-xl mx-auto">Descubrí cómo fueron sus experiencias y resultados.</p>
            </div>
            <Client/>
        </div>



 
            </section>

            <Footer />

            <ScrollToTop />
        </>
    )
}
