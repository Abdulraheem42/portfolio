import React from 'react'
import { useRouter } from 'next/dist/client/router'
import {portfolioData} from '../../src/MokeupData'
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link'

const PortfolioDetail = ({post}) => {
    console.log(post, 'props============')
    const {name, id, description, links, techs} = post
    return (
        <div className="container" style={{marginTop: '6rem'}}>
            <div className="pt-5">
                <Link href="/portfolio">
                    <p className="back_btn d-inline">
                        <FaArrowLeft className="me-2" />Back
                    </p>
                </Link>
            </div>
            <div className="row pt-3">
                <div className="col-12 d-flex flex-column">
                    <h2 className="text-center">{name}</h2>
                    <p className="lh-lg pt-5">{description}</p>
                    
                    <div className="d-flex mt-5">
                      <p className="fw-bold h5 pe-3">Techs:</p>
                      {techs.map((item, index) => <span key={index} className="me-2">{item},</span>)}
                    </div>

                    <div className="d-flex">
                    <p className="fw-bold h5 pe-3">Link:</p>
                    <a href={links}>{links}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getStaticPaths() {
    const paths = portfolioData.map((post) => ({
      params: { slug: post.slug }
    }));

    return {
      paths,
      fallback: false
    };
  }
  
export async function getStaticProps({ params }) {
    const { slug } = params;
    const post = portfolioData.find((p) => p.slug === slug);

    return {
      props: { post }
    };
  }
  

export default PortfolioDetail