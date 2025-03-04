
import Navbar from '../../components/navbar/navbar'
import CoursesSliderTwo from '../../components/courses-slider-two'
import Features from '../../components/features'
import Categories from '../../components/categories'
import Cta from '../../components/cta'
import Client from '../../components/client'
import Team from '../../components/team'
import Blog from '../../components/blog'
import GetInTouch from '../../components/get-in-touch'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scroll-to-top'

import bg from '../../assets/images/bg/4.jpg'
import map from '../../assets/images/map.svg'

import { TypeAnimation } from 'react-type-animation';

export default function IndexThree() {
  return (
    <>
     <Navbar navlight={true} tagline={false}/>   

    <section className="relative table w-full md:py-44 py-36 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
        <div className="absolute inset-0 bg-slate-950/90"></div>
        <div className="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-cover" style={{backgroundImage:`url(${map})`}}></div>
        <div className="container relative">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-6">
                <div className="lg:col-span-7 md:col-span-6">
                    <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl text-white mb-5">Get Quality

                    <TypeAnimation
                        sequence={[
                            'Courses',
                            1000,
                            'Education',
                            1000,
                        ]}
                        wrapper="span"
                        speed={30}
                        repeat={Infinity}
                        className="font-bold text-yellow-400 typewrite ms-1"
                        cursor={false}
                        />

                         <span className="font-bold text-yellow-400 typewrite" data-period="2000" data-type='[ "Courses", "Education" ]'></span> 

                         <br/> Through <span className="after:absolute after:end-0 after:start-0 after:bottom-3 after:-rotate-6 after:h-2 after:w-auto after:rounded-md after:bg-yellow-400/50 after:-z-1 z-1 relative">1-on-1</span> <br/> Online Classes</h1>
                    
                    <p className="text-white/50 text-lg max-w-xl">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
                    
                    <div className="mt-6">
                        <form className="relative max-w-xl">
                            <input type="email" id="subemail" name="name" className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-white rounded-full bg-slate-900/70 border border-slate-800" placeholder="Enter your email id.."/>
                            <button type="submit" className="h-12 px-6 tracking-wide items-center justify-center font-medium bg-yellow-500 text-white rounded-full absolute top-[1px] end-[1px]">Subcribe Now</button>
                        </form>
                    </div>
                </div>

                <CoursesSliderTwo/>
            </div>
        </div>
    </section>

    <section className="relative md:py-24 py-16">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Discover Powerful Features</h4>

                <p className="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
            </div>

            <Features/>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Explore 1500+ Free Education Courses</h4>

                <p className="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
            </div>

            <Categories/>
        </div>
    </section>

    <Cta/>

    <section className="relative lg:py-24 py-16">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">What Our Students Say ?</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
            </div>
            <Client/>
        </div>

        <div className="container relative lg:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Expert Instructors</h4>

                <p className="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
            </div>

            <Team/>
        </div>

        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Blogs Or News</h4>
                <p className="text-slate-400 max-w-xl mx-auto">Discover a world of knowledge and opportunities with our online education platform pursue a new career.</p>
            </div>
            <Blog/>
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
