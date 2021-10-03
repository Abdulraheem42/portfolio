import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { ProfileImg, Html, Css, Javascript, Node, Reactjs, ReactNative, Redux, Bootstrap, Ant, Material } from '../../images';
import ProfileImgWrapper from '../../src/components/profileImgWrapper';

const AboutMe = () => {
    const languageLogo = [
        {path: Node, title: "Node.js"}, 
        {path: Javascript, title: "Javascript"}, 
        {path: Reactjs, title: "React js"}, 
        {path: ReactNative, title: "React Native"}, 
        {path: Redux, title: "Redux"},
        {path: Css, title: "Css"}, 
        {path: Html, title: "Html5"}
    ]
    const libraryLogo = [
        {path: Ant, title: "Ant Design"}, 
        {path: Bootstrap, title: "Bootstrap"}, 
        {path: Material, title: "Material ui"}, 
    ]

    return (
    <div className="d-flex flex-column justify-content-center" style={{marginTop: "7rem"}}>
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <ProfileImgWrapper ProfileImg={ProfileImg} />
                </div>
                <div className="col-12 mt-4 mb-3">
                    <div className="text-center">
                        {languageLogo.map((item, index) => {
                            return (
                                <img alt={item.title} key={index} title={item.title} className="mx-2" src={item.path} width="40px" height="40px" />
                            )
                        })}
                    </div>              
                </div>
                <div className="col-12 mb-4">
                    <div className="text-center">
                        {libraryLogo.map((item, index) => {
                            return (
                                <img alt={item.title} key={index} title={item.title} className="mx-2" src={item.path} width="30px" height="30px" />
                            )
                        })}
                    </div>              
                </div>
                <div className="col-12">
                    <div className="about_para ps-4">
                        <p style={{textAlign: "justify"}}>
                        I'm Abdul Raheem. I am Web designer and developer.  
                        I am undergraduate degree in Bachelor in computer science (BSCS) from Virtual University of Pakistan. 
                        I came into the web field because of the interest and the attractiveness
                        of the internet. I did my best to learn in-depth client side languages ​​and technologies and implement
                        standard UIs with the right user experience. All the time I was trying to get to know the back-end in 
                        addition to the front-end so that I could interact well with the back-end team as well as write the right 
                        code with scalability. To this end, I got acquainted with Node.js and JavaScript
                        and tried to do various projects in different fields. The rapid growth of technology and interest
                        in learning new technologies has driven me to learn JavaScript libraries and frameworks,
                        and has made learning Reactjs, nextjs, and nodeJs-ExpressJs easier, and now my focus
                        is on these. Because of my interest and field of study, I have also done good work in software
                        development in the health field. Teaching Web design related courses is one of the activities
                        I love and I believe teaching topics to other people can help stabilize information.
                        The aim of this website is to share what I've learned with others. If you have any questions, I'll be happy to answer. 
                        Contact me right now!
                        </p>
                    </div>        
                </div>
            </div>
          
        </div>
    </div>
    )
}

export default AboutMe