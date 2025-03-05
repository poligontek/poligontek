/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import logoDark from '../../assets/images/imagotipo-dark-tiny.png'
import logoLight from '../../assets/images/imagotipo-blanco-tiny.png'

import demo1 from '../../assets/images/demos/1.png'
import demo2 from '../../assets/images/demos/2.png'
import demo3 from '../../assets/images/demos/3.png'
import demo4 from '../../assets/images/demos/4.png'
import demo5 from '../../assets/images/demos/5.png'

import BuyBtn from './buy-btn';

export default function Navbar({navlight,tagline}:{navlight:any, tagline:any}) {
    const [toggle, setToggle] = useState<Boolean | undefined>(false)
    const [manu, setManu] = useState<any>(false);
    const [subManu, setSubManu] = useState<any>();
    const[scroll,setScroll] = useState<boolean>(false)

    const toggleMenu = () =>{
        setToggle(!toggle)
    }

    useEffect(()=>{
        setManu(window.location.pathname)
        window.scrollTo(0,0)

        const handlerScroll=()=>{
            if(window.scrollY > 50){
                setScroll(true)
            }else{setScroll(false)}
        }
        window.addEventListener('scroll',handlerScroll)

        return () => {
            window.removeEventListener('scroll',handlerScroll)
          };
    },[])

  return (
    <>
        <nav id="topnav" className={`defaultscroll is-sticky ${scroll ? 'nav-sticky' : ''} ${tagline ? 'tagline-height' : ''}`}>
            <div className="container relative">
                {!navlight && 
                    <Link className="logo" to="/">
                        <img src={logoDark} className="inline-block dark:hidden" alt=""/>
                        <img src={logoLight} className="hidden dark:inline-block" alt=""/>
                    </Link>
                }
                {navlight && 
                    <Link className="logo" to="/">
                        <span className="inline-block dark:hidden">
                            <img src={logoDark} className="l-dark" height="24" alt=""/>
                            <img src={logoLight} className="l-light" height="24" alt=""/>
                        </span>
                        <img src={logoLight} height="24" className="hidden dark:inline-block" alt=""/>
                    </Link>
                }

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to='' className={`navbar-toggle ${toggle ? 'open' : ''}`} id="isToggle" onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <BuyBtn navlight={navlight}/>

                <div id="navigation" className={`${toggle ? 'block' : 'none'}`}>
                    <ul className={`navigation-menu justify-start ${navlight ? 'nav-light' : ''}`}>
                        <li className={`has-submenu parent-parent-menu-item ${['/','/index-two','/index-three','/index-four','/index-five'].includes(manu) ? 'active' : ''}`}>
                            <Link to="#" onClick={()=>setSubManu(subManu === '/index-item' ? '' : '/index-item')}>Home</Link><span className="menu-arrow"></span>

                            <ul className={`submenu megamenu ${['/index-item'].includes(subManu) ? 'open' : ''}`}>
                                <li>
                                    <ul>
                                        <li className={manu === '/' ? 'active' : ''}>
                                            <Link to="/" className="sub-menu-item">
                                                <div className="min-[992px]:text-center">
                                                    <span className="hidden min-[992px]:block"><img src={demo1} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="min-[992px]:mt-2 block">Hero One</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className={manu === '/index-two' ? 'active' : ''}>
                                            <Link to="/index-two" className="sub-menu-item">
                                                <div className="min-[992px]:text-center">
                                                    <span className="hidden min-[992px]:block"><img src={demo2} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="min-[992px]:mt-2 block">Hero Two</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className={manu === '/index-three' ? 'active' : ''}>
                                            <Link to="/index-three" className="sub-menu-item">
                                                <div className="min-[992px]:text-center">
                                                    <span className="hidden min-[992px]:block"><img src={demo3} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="min-[992px]:mt-2 block">Hero Three</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                
                                <li>
                                    <ul>
                                        <li className={manu === '/index-four' ? 'active' : ''}>
                                            <Link to="/index-four" className="sub-menu-item">
                                                <div className="min-[992px]:text-center">
                                                    <span className="hidden min-[992px]:block"><img src={demo4} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="min-[992px]:mt-2 block">Hero Four</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                
                                <li>
                                    <ul>
                                        <li className={manu === '/index-five' ? 'active' : ''}>
                                            <Link to="/index-five" className="sub-menu-item">
                                                <div className="min-[992px]:text-center">
                                                    <span className="hidden min-[992px]:block"><img src={demo5} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="min-[992px]:mt-2 block">Hero Five</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className={`has-submenu parent-parent-menu-item ${['/grid','/grid-sidebar','/list','/list-sidebar','/youtube-listing','/video-listing','/detalle-de-curso','/detalle-de-curso-two'].includes(manu)? 'active' :''}`}>
                            <Link to="#" onClick={()=>setSubManu(subManu === '/cours-item' ? '' : '/cours-item')}>Courses</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/cours-item','/grid-item','/list-item','/video-item','/courses-item'].includes(subManu) ? 'open' : ''}`}>
                                <li className={`has-submenu parent-menu-item ${['/grid','/grid-sidebar'].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>setSubManu(subManu === '/grid-item' ? '' : '/grid-item')}> Grid Courses </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/grid-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu === '/grid' ? 'active' : ''}><Link to="/grid" className="sub-menu-item">Grid Listing</Link></li>
                                        <li className={manu === '/grid-sidebar' ? 'active' : ''}><Link to="/grid-sidebar" className="sub-menu-item">Grid Sidebar </Link></li>
                                    </ul> 
                                </li>
                                <li className={`has-submenu parent-menu-item ${['/list','/list-sidebar'].includes(manu) ? 'active' :''}`}><Link to="#" onClick={()=>setSubManu(subManu === '/list-item' ? '' : '/list-item')}> Lista de Cursos </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/list-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu === '/list' ? 'active' : ''}><Link to="/list" className="sub-menu-item">List Listing</Link></li>
                                        <li className={manu === '/list-sidebar' ? 'active' : ''}><Link to="/list-sidebar" className="sub-menu-item">List Sidebar </Link></li>
                                    </ul>  
                                </li>
                                <li className={`has-submenu parent-menu-item ${['/youtube-listing','/video-listing'].includes(manu) ? 'active' :''}`}><Link to="#" onClick={()=>setSubManu(subManu === '/video-item' ? '' : '/video-item')}> Video Courses </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/video-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu === '/youtube-listing' ? 'active' : ''}><Link to="/youtube-listing" className="sub-menu-item">Youtube Listing</Link></li>
                                        <li className={manu === '/video-listing' ? 'active' : ''}><Link to="/video-listing" className="sub-menu-item">Video Listing</Link></li>
                                    </ul>  
                                </li>
                                <li className={`has-submenu parent-menu-item ${['/detalle-de-curso','/detalle-de-curso-two'].includes(manu) ? 'active' :''}`}><Link to="#" onClick={()=>setSubManu(subManu === '/courses-item' ? '' : '/courses-item')}> Courses Detail</Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/courses-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu === '/detalle-de-curso' ? 'active' : ''}><Link to="/detalle-de-curso" className="sub-menu-item">Courses Detail</Link></li>
                                        <li className={manu === '/detalle-de-curso-two' ? 'active' : ''}><Link to="/detalle-de-curso-two" className="sub-menu-item">Courses Detail Two</Link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>

                        <li className={manu === '/aboutus' ? 'active' : ''}><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>

                        <li className={`has-submenu parent-parent-menu-item ${['/features','/pricing','/instructors','/faqs','/blogs','/blog-sidebar','/blog-detail'].includes(manu) ? 'active' : ''}`}>
                            <Link to="#" onClick={()=>setSubManu(subManu === '/page-item' ? '' : '/page-item')}>Pages</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/page-item','/auth-item','/blog-item','/special-item'].includes(subManu) ? 'open' : ''}`}>
                                <li className={manu === '/features' ? 'active' : ''}><Link to="/features" className="sub-menu-item">Features</Link></li>
                                <li className={manu === '/pricing' ? 'active' : ''}><Link to="/pricing" className="sub-menu-item">Pricing</Link></li>
                                <li className={manu === '/instructors' ? 'active' : ''}><Link to="/instructors" className="sub-menu-item">Instructors</Link></li>
                                <li className={manu === '/faqs' ? 'active' : ''}><Link to="/faqs" className="sub-menu-item">Faqs</Link></li>
                                <li className="has-submenu parent-menu-item"><Link to="#" onClick={()=>setSubManu(subManu === '/auth-item' ? '' : '/auth-item')}> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/auth-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li><Link to="/login" className="sub-menu-item">Login</Link></li>
                                        <li><Link to="/signup" className="sub-menu-item">Signup</Link></li>
                                        <li><Link to="/forgot-password" className="sub-menu-item">Reset Password</Link></li>
                                    </ul>  
                                </li>
                                <li className={`has-submenu parent-menu-item ${['/blogs','/blog-sidebar','/blog-detail'].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>setSubManu(subManu === '/blog-item' ? '' : '/blog-item')}> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/blog-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li className={manu === '/blogs' ? 'active' : ''}><Link to="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                        <li className={manu === '/blog-sidebar' ? 'active' : ''}><Link to="/blog-sidebar" className="sub-menu-item"> Blog Sidebar</Link></li>
                                        <li className={manu === '/blog-detail' ? 'active' : ''}><Link to="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#" onClick={()=>setSubManu(subManu === '/special-item' ? '' : '/special-item')}> Special </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/special-item'].includes(subManu) ? 'open' : ''}`}>
                                        <li><Link to="/comingsoon" className="sub-menu-item">Comingsoon</Link></li>
                                        <li><Link to="/maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li><Link to="/404" className="sub-menu-item">404! Error</Link></li>
                                    </ul>  
                                </li>
                            </ul>
                        </li>
                
                        <li className={manu === '/contactus' ? 'active' : ''}><Link to="/contactus" className="sub-menu-item">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
       
    </>
  )
}
