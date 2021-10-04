import React, {useState} from 'react'
import {NavbarContainer} from './style'
import { Logoimage } from '../../../images'
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    console.log(menuOpen, 'menuopen')
    const menuOpenHandle = () => {
        if(menuOpen){
            setMenuOpen(false)
        }
        else{
            setMenuOpen(true)
        }
    }
    const navbarItem = [
        {name: 'Home', id: '1', link:"/"},
        {name: 'About me', id: '2', link:"/about-me"},
        {name: 'Portfolio', id: '3', link:"/portfolio"},
        {name: 'Contact me', id: '4', link:"/contact-me"},
        {name: 'Resume', id: '5', link:"/resume"},
        {name: 'Lng', id: '6', link:"https://www.linkedin.com/in/abdul-raheem-93b560122/"},
    ]
    return (
        <NavbarContainer className="container-fluid shadow fixed-top py-2">
                <div className="container">
                    <div className="row flex-column">
                        <div className="col-xl-3 col-lg-4 col-md-12">
                            <div className="row">
                            <div className="col-10 d-flex align-items-center">
                            <Link href="/">
                            <>
                            <img className="rounded brand-logo" width="60px" height="60px" src={Logoimage} />
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
                            <div className="col-2 d-flex align-items-center justify-content-end">
                                <FaBars onClick={menuOpenHandle} size="1.4em" />
                            </div>
                            </div>
                        </div>

                        {menuOpen && 
                        <div className="menu-container col-12 d-flex align-items-center justify-content-center mt-4" style={{ backgroundColor: 'white'}}>
                            <div className="d-inline justify-content-center align-items-center h-100 w-100">
                             {navbarItem.map((item, index) => {
                                 if(index === navbarItem.length-1){
                                    return(
                                        <div onClick={menuOpenHandle} key={index} className="navItem px-3 h-100 py-3 text-center w-100">
                                            <Link className="rounded-circle shadow d-flex justify-content-center align-items-center" style={{width: 40, height: 40}} href={item.link} key={index}>{item.name}</Link>
                                        </div>
                                    ) 
                                 }
                                return(
                                    <div onClick={menuOpenHandle} key={index} className="navItem px-3 h-100 py-3 text-center">
                                        <Link className="nav-link active" href={item.link} key={index}>{item.name}</Link>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                        }

                        {/* <div className="col-xl-2 col-lg-1 col-md-4  d-inline d-lg-flex justify-content-end align-items-center">
                        <div className="rounded-circle shadow d-flex justify-content-center align-items-center" style={{width: 40, height: 40}}>
                            Lng
                        </div>
                        </div> */}

                    </div>
                </div>
        </NavbarContainer>
    )
}

export default MobileNav