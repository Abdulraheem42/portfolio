import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'

const PortfolioCardWrapper = styled.div`
transition: all 0.5s ease;
.arrow{
    transition: all 1s ease;
}
&:hover{
    cursor: pointer;
    // background-position: left top;
    transform: scale(1.02);
    transition: all 0.8s ease;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    .arrow{
        transform: translateX(15px);
        transition: all 0.2s ease;
      }
}
`

const PortfolioCard = (props) => {
    const {startDate, endDate, name, id, route, slug} = props.data
    return(
        <Link href={`/projects/${slug}`}>
        <PortfolioCardWrapper className="carde row w-100 shadow-sm py-5 px-4 mb-5 rounded d-flex justify-content-between align-items-center">
            <div className="col-sm-12 col-lg-10 d-flex">
                <p className="mb-0 ">{startDate} to {endDate}</p>
                <h5 className="mb-0 ms-5">{name}</h5>
            </div>
            <div className="col-sm-12 col-lg-2 d-flex justify-content-end">
                <span className="mb-0 fw-bold" style={{fontSize: '0.8rem'}}>Read More</span>
                <span className="icon ms-2"><FaArrowRight className="arrow" /></span>
            </div>
        </PortfolioCardWrapper>
        </Link>
    )
}

export default PortfolioCard