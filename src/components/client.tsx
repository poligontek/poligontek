import { clientData } from '../data'

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css'

interface ClientData{
    image: string;
    name: string;
    position: string;
    desc: string;
    rate: string[];
}

export default function Client() {

    const settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      };

  return (
        <div className="flex justify-center relative mt-6">
            <div className="relative w-full">
                <div className="tiny-three-item">
                    <TinySlider settings={settings}>
                        {clientData.map((item:ClientData,index:number)=>{
                            return(
                                <div className="tiny-slide" key={index}>
                                    <div className="mx-3">
                                        <ul className="text-md font-medium text-amber-500 list-none mb-2">
                                            {item.rate.map((el,index)=>{
                                                return(
                                                    <li className="inline" key={index}><i className={el}></i></li>
                                                )
                                            })}
                                        </ul>

                                        <p className="text-lg text-slate-400"> {item.desc} </p>

                                        <div className="flex items-center mt-3">
                                            <img src={item.image} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800" alt=""/>
                                            <div className="ms-2">
                                                <h6 className="font-semibold">{item.name}</h6>
                                                <span className="text-slate-400 text-sm">{item.position}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
            </div>
        </div>
  )
}
