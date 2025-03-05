import { Link } from 'react-router-dom'

import { FiPhone } from 'react-icons/fi'

export default function GetInTouch() {
  return (
        <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Have Question ? Get in touch!</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Aprendé con clases flexibles y personalizadas. Creá tu futuro</p>
        
            <div className="mt-6">
                <Link to="/contact" className="h-10 px-5 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-violet-600 text-white"><FiPhone className="align-middle me-2"/> Contact us</Link>
            </div>
        </div>
  )
}
