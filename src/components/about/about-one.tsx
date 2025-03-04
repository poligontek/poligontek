import { useState } from 'react';
import { Link } from 'react-router-dom'

import { Modal } from "flowbite-react";

import about1 from '../../assets/images/course/1.jpg'
import about2 from '../../assets/images/course/4.jpg'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AboutOne({title}:{title:any}) {
    const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-6 md:col-span-7">
                <div className="relative">
                    <div className="relative md:shrink-0 lg:me-0 me-10">
                        <img className="object-cover md:w-96 w-84 h-[500px] rounded-lg shadow-md dark:shadow-gyay-700" src={about1} alt=""/>
                    </div>

                    <div className="absolute bottom-10 lg:end-6 end-0">
                        <div className="relative z-1 top-10 xl:text-start lg:text-end text-end">
                            <Link to="#!"  onClick={() => setOpenModal(true)} className="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center bg-violet-600 text-white">
                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                            </Link>
                        </div>
                        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} position="center" className="video-modal bg-[#000000c4] z-[999999]">
                            <Modal.Body className="p-0 h-auto">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S_CGed6E610" className="md:h-[400px] h-[300px] flex justify-center align-middle"></iframe>
                            </Modal.Body>
                        </Modal>

                        <div className="relative md:shrink-0">
                            <img className="object-cover size-48 rounded-lg shadow-md dark:shadow-gyay-700" src={about2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-6 md:col-span-5">
                {title && 
                    <span className="text-violet-600 font-semibold mb-3 uppercase">Our Story</span>
                }
                <h4 className="mb-12 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Beneficios que nos diferencian</h4>
                <p className="text-slate-400 max-w-xl mx-auto">Descubre por qué nuestra metodología de enseñanza en vivo se adapta a tu crecimiento profesional.</p>

                <div className="grid md:grid-cols-1 mt-4">
                    <ul className="list-none">
                        <li className="mt-2 text-[16px]"><i className="mdi mdi-circle-medium"></i> <span className="text-slate-400">Clases Personalizadas: Aprende a tu propio ritmo con un mentor que te guía paso a paso.</span></li>
                        <li className="mt-2 text-[16px]"><i className="mdi mdi-circle-medium"></i> <span className="text-slate-400">Entorno Colaborativo: Interactúa con otros estudiantes y trabaja en proyectos reales.</span></li>
                        <li className="mt-2 text-[16px]"><i className="mdi mdi-circle-medium"></i> <span className="text-slate-400">Recursos Adicionales: Accede a material exclusivo, ejercicios prácticos y soporte continuo.</span></li>
                    </ul>


                </div>

                <div className="mt-6">
                    <Link to="" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600/10 hover:bg-violet-600 text-violet-600 hover:text-white">Nuestros Cursos <i className="mdi mdi-arrow-right align-middle ms-1"></i></Link>
                </div>
            </div>
        </div>
        
    </>
  )
}
