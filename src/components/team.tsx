import { Link } from 'react-router-dom';

import { teamData } from '../data'
import { IconType } from 'react-icons';

interface TeamData{
    image: string;
    name: string;
    position: string;
    social: IconType[];
}

export default function Team() {
  return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            {teamData.slice(0,4).map((item:TeamData,index:number)=>{
                return(
                    <div className="group text-center" key={index}>
                        <div className="relative inline-block mx-auto rounded-full overflow-hidden">
                            <img src={item.image} className="" alt=""/>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>

                            <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                {item.social.map((el,index)=>{
                                    const Icon = el
                                    return(
                                        <li className="inline mx-[2px]" key={index}><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-violet-600 text-white rounded-full"><Icon className="size-4"/></Link></li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="content mt-3">
                            <Link to="" className="text-lg font-medium hover:text-violet-600 duration-500">{item.name}</Link>
                            <p className="text-slate-400">{item.position}</p>
                        </div>
                    </div>
                )
            })}
        </div>
  )
}
