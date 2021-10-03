import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components'

const ImageWrapper = styled.div`
    border-style: dotted;
    border-color: lightgray;
    border-radius: 100%;
    width: 23%;
    height: 300px;
    @media(max-width: 999px){
        width: 75% !important;
    }
    img{
        border-radius: 100%;
        width: 100%;
        height: 100%;
    }


`

const ProfileImgWrapper = (props) => {
    return (
        <ImageWrapper ProfileImg={props.ProfileImg} className="text-center profile_img p-2">
           <img src={props.ProfileImg} className="circle img-fluid" alt="..." />
        </ImageWrapper>
    )
}

export default ProfileImgWrapper