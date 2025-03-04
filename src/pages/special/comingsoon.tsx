/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import bg from '../../assets/images/bg/2.jpg'
import logo from '../../assets/images/logo-icon-64.png'

import BackToHome from '../../components/back-to-home'

export default function Comingsoon() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline:any = "September, 13, 2025";

    const getTime = (deadline: any) => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
      };
      useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
      })
  return (
    <>
        <section className="md:h-screen py-6 flex items-center justify-center relative bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-2" id="particles-snow"></div>
            <div className="container-fluid relative z-3">
                <div className="grid grid-cols-1">
                    <div className="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div className="text-center">
                            <Link to="/"><img src={logo} className="mx-auto" alt=""/></Link>
                        </div>
                        <div className="title-heading text-center my-auto">
                            <h1 className="text-white mt-3 mb-6 md:text-5xl text-3xl font-bold">We Are Coming Soon...</h1>
                            <p className="text-white/70 text-lg max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                        
                            <div id="countdown">
                                <ul className="count-down list-none inline-block text-white text-center mt-8 m-6">
                                    <li id="days" className="count-number inline-block m-2">{days}<p className='count-head'>Days</p></li>
                                    <li id="hours" className="count-number inline-block m-2">{hours}<p className='count-head'>Hours</p></li>
                                    <li id="mins" className="count-number inline-block m-2">{minutes}<p className='count-head'>Mins</p></li>
                                    <li id="secs" className="count-number inline-block m-2">{seconds}<p className='count-head'>Secs</p></li>
                                    <li id="end" className="h1"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="mb-0 text-slate-400">© {new Date().getFullYear()} Edupath. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <BackToHome/>
    </>
  )
}
