/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'

import { FiBook, FiUsers } from 'react-icons/fi'

export default function CoursesOne({item}:any) {
  return (
    <>
        <Link to={`/detalle-de-curso/${item.id}`} className="block">
            <div className="group bg-white dark:bg-slate-900 rounded-md shadow-md hover:shadow-lg shadow-slate-100 dark:shadow-slate-800 transition duration-500">
                <div className="p-3 pb-0 relative">
                    <div className="relative overflow-hidden rounded-md">
                        <img src={item.image} className="group-hover:scale-105 duration-500" alt=""/>
                    </div>
                    <div className="absolute start-6 top-6">
                        <span className="bg-violet-600 text-white text-[12px] px-2.5 py-1 rounded-md h-4 mx-[2px]">{item.tag1}</span>
                        <span className="bg-violet-600 text-white text-[12px] px-2.5 py-1 rounded-md h-4 mx-[2px]">{item.tag2}</span>
                    </div>

                    <div className="absolute -bottom-5 end-6">
                        <span className="bg-violet-600 text-white size-10 flex items-center justify-center rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 font-semibold">${item.amount}</span>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex mb-3">
                        <span className="text-slate-400 text-sm flex items-center"><FiBook className="text-slate-900 dark:text-white size-[14px] me-1"/>{item.lessons} Clases</span>
                        <span className="text-slate-400 text-sm flex items-center ms-3"><FiUsers className="text-slate-900 dark:text-white size-[14px] me-1"/>{item.students} Estudiantes</span>
                    </div>

                    <p className="text-lg hover:text-violet-600 font-medium">{item.title}</p>

                    <p className="text-slate-400 mt-2">{item.desc}</p>

                    <div className="flex justify-between mt-3">
                        <span className="flex items-center hidden">
                            <img src={item.user} className="size-8 rounded-full shadow shadow-slate-100 dark:shadow-slate-800 me-2" alt=""/>
                            <span className="hover:text-violet-600 font-medium">{item.name}</span>
                        </span>
                        <span className="w-full h-8 px-3 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600/10 hover:bg-violet-600 text-violet-600 hover:text-white text-sm">Ver Curso <i className="mdi mdi-arrow-right align-middle ms-1"></i></span>
                    </div>
                </div>
            </div>
        </Link>
    </>
  )
}
