import { Route, Routes } from 'react-router-dom';
import IndexOne from './pages/index/index-one';
import IndexTwo from './pages/index/index-two';
import IndexThree from './pages/index/index-three';
import IndexFour from './pages/index/index-four';
import IndexFive from './pages/index/index-five';
import Grid from './pages/courses/grid';
import GridSidebar from './pages/courses/grid-sidebar';
import List from './pages/courses/list';
import ListSidebar from './pages/courses/list-sidebar';
import YoutubeListing from './pages/courses/youtube-listing';
import VideoListing from './pages/courses/video-listing';
import CourseDetail from './pages/courses/detalle-de-curso';
import CourseDetailTwo from './pages/courses/detalle-de-curso-two.tsx';
import Aboutus from './pages/aboutus';
import Features from './pages/features';
import Pricing from './pages/pricing';
import Instructors from './pages/instructors';
import Faqs from './pages/faqs';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ForgotPassword from './pages/auth/forgot-password';
import Blogs from './pages/blog/blogs';
import BlogSidebar from './pages/blog/blog-sidebar';
import BlogDetail from './pages/blog/blog-detail';
import Comingsoon from './pages/special/comingsoon';
import Maintenance from './pages/special/maintenance';
import Error from './pages/special/404';
import Contactus from './pages/contactus';
import Terms from './pages/utility/terms';
import Privacy from './pages/utility/privacy';  

function App() {

  return (
    <>
       <Routes>
      <Route path='/' element={<IndexOne/>}/>
      <Route path='/index-two' element={<IndexTwo/>}/>
      <Route path='/index-three' element={<IndexThree/>}/>
      <Route path='/index-four' element={<IndexFour/>}/>
      <Route path='/index-five' element={<IndexFive/>}/>
      <Route path='/cursos-sin-barra' element={<Grid/>}/>
      <Route path='/cursos' element={<GridSidebar/>}/>
      <Route path='/list' element={<List/>}/>
      <Route path='/list-sidebar' element={<ListSidebar/>}/>
      <Route path='/youtube-listing' element={<YoutubeListing/>}/>
      <Route path='/video-listing' element={<VideoListing/>}/>
      <Route path='/detalle-de-curso' element={<CourseDetail/>}/>
      <Route path='/detalle-de-curso/:id' element={<CourseDetail/>}/>
      <Route path='/detalle-de-curso-two' element={<CourseDetailTwo/>}/>
      <Route path='/detalle-de-curso-two/:id' element={<CourseDetailTwo/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/features' element={<Features/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/instructors' element={<Instructors/>}/>
      <Route path='/faqs' element={<Faqs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blog-sidebar' element={<BlogSidebar/>}/>
      <Route path='/blog-detail' element={<BlogDetail/>}/>
      <Route path='/blog-detail/:id' element={<BlogDetail/>}/>
      <Route path='/comingsoon' element={<Comingsoon/>}/>
      <Route path='/maintenance' element={<Maintenance/>}/>
      <Route path='/404' element={<Error/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      <Route path='/terms' element={<Terms/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
    </Routes>
    </>
  )
}

export default App
