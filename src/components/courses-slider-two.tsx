import { coursesData } from '../data'

import CoursesOne from './courses/courses-one'

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css'

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

export default function CoursesSliderTwo() {
    const settings = {
        container: '.tiny-one-item',
        items: 1,
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
      };
  return (
        <div className="lg:col-span-5 md:col-span-6">
            <div className="grid grid-cols-1 relative xl:ms-20">
                <div className="tiny-one-item">
                    <TinySlider settings={settings}>
                        {coursesData.map((item:CoursesData,index:number)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <CoursesOne item={item}/>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
            </div>
        </div>
  )
}
