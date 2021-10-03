import React from 'react'
import CardContainer from './style'
import Link from 'next/link'

const PictureCard = (props) => {
    return (
        <Link href={`${props.href}`}>
        <CardContainer {...props}>
                <p className="card_text" {...props}>
                    {props.cardname}
                </p>
        </CardContainer>
        </Link>
    ) 
}

export default PictureCard