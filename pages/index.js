import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/navbar";
import PictureCard from '../src/components/pictureCard'
import { Books, Coffee, Resources, Letter, Blog } from '../images';
import Footer from "../src/components/footer";

export default function Home() {



  return (
    <div className="d-flex flex-column justify-content-center" style={{ marginTop: '7rem'}}>
      <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <div className="row justify-content-between align-content-between">
                <div className="col-12 py-2" style={{height: '250px'}}>
                <PictureCard 
                  href="/about-me"
                  bg_image={Coffee} 
                  height='100%' 
                  cardname="About me"
                  top="20px"
                  left= "20px"
                  color="red"
                />
                </div>
                <div className="col-lg-6 py-3" style={{height: '320px'}}>
                <PictureCard 
                  href="/portfolio"
                  bg_image={Resources} 
                  height='100%' 
                  cardname="Portfolio"
                  right="20px"
                  bottom= "0px"
                />
                </div>
                <div className="col-lg-6 py-3" style={{height: '320px'}}>
                <PictureCard 
                  href="/contact-me"
                  bg_image={Books} 
                  height='100%' 
                  cardname="Academy"
                  top="20px"
                  right= "20px"
                />
                </div>
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="row justify-content-between align-content-between">
                <div className="col-12 py-2" style={{height: '320px'}}>
                <PictureCard 
                  bg_image={Letter} 
                  height='100%' 
                  cardname="Contact me"
                  right="20px"
                  bottom= "0px"
                />
                </div>
                <div className="col-lg-12 py-3" style={{height: '250px'}}>
                <PictureCard 
                  bg_image={Blog} 
                  height='100%' 
                  cardname="Blog"
                  left="20px"
                  bottom= "0px"
                />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
