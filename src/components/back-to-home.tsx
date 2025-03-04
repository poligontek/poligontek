import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function BackToHome() {
  return (
        <div className="fixed bottom-3 end-3 z-10">
            <Link to="/" className="size-8 flex bg-violet-600 text-white justify-center items-center rounded-full back-button"><FiArrowLeft className="size-4"/></Link>
        </div>
  )
}
