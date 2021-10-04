import React, {useEffect, useState} from 'react'
import {NavbarContainer} from './style'
import { Logoimage } from '../../../images'
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css";
import MobileNav from './MobileNav';

const Navbar = () => {

    const [navWidth, setNavWidth] = useState()

    useEffect(() => {
        const handleResize = () => {
          if (typeof window !== "undefined") {
            setNavWidth(window.innerWidth)
          }
        };
        handleResize();
        if (typeof window !== "undefined") {
          window.addEventListener("resize", handleResize);
        }
      }, []);
      console.log(navWidth, 'navWidth')
    const navbarItem = [
        {name: 'Home', id: '1', link:"/"},
        {name: 'About me', id: '2', link:"/about-me"},
        {name: 'Portfolio', id: '3', link:"/portfolio"},
        {name: 'Contact me', id: '4', link:"/contact-me"},
        {name: 'Resume', id: '5', link:"https://www.linkedin.com/in/abdul-raheem-93b560122/"},
    ]
    return (
        <>
        {navWidth > 999 ?
        <NavbarContainer className="container-fluid shadow fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="row">
                            <div className="col d-flex align-items-center">
                            <Link href="/">
                            <>
                            <img className="rounded" width="60px" height="60px" src={Logoimage} />
                            <div className="logotext ps-2 mt-2">
                                <p className="h6">
                                    MUHAMMAD ABDUL RAHEEM
                                </p>
                                <p className="h6 mb-0">
                                    UI/UX Designer and Developer
                                </p>
                            </div>
                            </>
                            </Link>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-7 d-flex align-items-center justify-content-center">
                            <div className="d-flex justify-content-center align-items-center">
                             {navbarItem.map((item, index) => {
                                return(
                                    <div key={index} className="navItem px-3 h-100">
                                        {/* <a target={`${item.link.slice(0, 4) == "http" ? "_blank" : null}`}> */}
                                            <Link className="nav-link active"  href={item.link} key={index}>{item.name}</Link>
                                        {/* </a> */}
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-1 d-flex justify-content-end align-items-center">
                        <div className="rounded-circle shadow d-flex justify-content-center align-items-center" style={{width: 40, height: 40}}>
                            Lng
                        </div>
                        </div>
                    </div>
                </div>
        </NavbarContainer>
        : 
            <MobileNav />
        }
        </>
    )
}

export default Navbar