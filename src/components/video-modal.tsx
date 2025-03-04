import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from "flowbite-react";


export default function VideoModal() {
    const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
        <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
            <Link to="#!" onClick={() => setOpenModal(true)}
                className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-violet-600">
                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
            </Link>
        </div>
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} position="center" className="video-modal bg-[#000000c4] z-[999999]">
            <Modal.Body className="p-0 h-auto">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/S_CGed6E610" className="md:h-[400px] h-[300px] flex justify-center align-middle"></iframe>
            </Modal.Body>
        </Modal>
    </>
  )
}
