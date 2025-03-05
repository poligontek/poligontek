/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import logoDark from '../../assets/images/logo-dark.png'
import logoLight from '../../assets/images/logo-light.png'


// import BuyBtn from './buy-btn';

export default function Navbar({navlight,tagline}:{navlight:any, tagline:any}) {
    const [toggle, setToggle] = useState<Boolean | undefined>(false)
    const [, setManu] = useState<any>(false);
    const [, setSubManu] = useState<any>();
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
                                <span></span>Usefull Links
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* <BuyBtn navlight={navlight}/> */}

                <div id="navigation" className={`${toggle ? 'block' : 'none'}`}>
                    <ul className={`navigation-menu justify-start ${navlight ? 'nav-light' : ''}`}>
                        <li >
                            <Link to="/" onClick={() => { 
                                setSubManu(''); 
                                setTimeout(() => { 
                                    const element = document.getElementById('Principal'); 
                                    if (element) element.scrollIntoView({ behavior: 'smooth' }); 
                                }, 0); 
                            }}>Principal</Link>

                        </li>

                        <li>
                            <Link to="/cursos">Cursos</Link>
                        
                        </li>

                      
                
                        <li><Link to="https://api.whatsapp.com/send/?phone=5492374032946" className="sub-menu-item contactanos_navbar">Contacto </Link></li>
                    </ul>
                </div>
            </div>
        </nav>
       
    </>
  )
}
