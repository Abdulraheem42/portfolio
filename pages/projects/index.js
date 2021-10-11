import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import PortfolioCard from '../../src/components/portfolioCard';
import {portfolioData} from '../../src/MokeupData'

const Portfolio = () => {
    

    return (
    <div style={{marginTop: '7rem'}}>
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center flex-column align-items-center">
                    {portfolioData.map((item, index) => {
                        return <PortfolioCard data={item} key={index} />
                    })}
                </div>
            </div>
          
        </div>
    </div>
    )
}

export default Portfolio