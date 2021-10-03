import React from 'react'
import { Logoimage } from '../../../images'
import { useRouter } from 'next/router'
import {FooterWrapper} from './style'

const Footer = () => {
    const date = new Date()
    const router = useRouter()
    console.log(router.asPath, 'router')
    return (
        <FooterWrapper className={`row w-100 py-2`}>
            <div className="col d-flex justify-content-center align-items-center">
                <img alt="logo" src={Logoimage} width="30px" height="30px" />
                <span className="mx-2">© </span>
                <span>{date.getFullYear()}</span>


            </div>
        </FooterWrapper>
    )
}

export default Footer