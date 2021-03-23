import React from 'react';
import "../App.css";
import { withRouter } from 'react-router';
import Places from "../Places";
import Image1 from "../images/pic1.jpg";
import Image2 from "../images/pic2.jpg";
import Image3 from "../images/pic3.jpg";
import Image4 from "../images/pic4.jpg";
import Image5 from "../images/pic5.jpg";
import Image6 from "../images/pic6.jpg";
import Image7 from "../images/pic7.jpg";
import Image8 from "../images/pic8.jpg";
import Image9 from "../images/pic9.jpg";
 function Home(props) {
    return (
        <div  >
     <Places/>
     <div className="container-fluid ">
    <div className="row justify-content-around text-center mt-5">
    <div className="col-lg-4 pb-5 ">
        <img className="img" src={Image1} alt=""/>
    </div>
    <div className="col-lg-4 pb-5">
        <img className="img" src={Image2} alt=""/>
    </div>
    <div className="col-lg-4 pb-5">
        <img className="img" src={Image3} alt=""/>
    </div>
    <div className="col-lg-4 pb-5">
        <img className="img" src={Image4} alt=""/>
    </div>
    <div className="col-lg-4 pb-5">
        <img className="img" src={Image5} alt=""/>
    </div>
    <div className="col-lg-4 pb-5">
        <img className="img" src={Image6} alt=""/>
    </div>
    <div className="col-lg-4 pb-5">
        <img className="img" src={Image7} alt=""/>
    </div>
    <div className="col-lg-4 pb-5">
        <img className="img" src={Image8} alt=""/>
    </div>
    <div className="col-lg-4 pb-5">
        <img className="img" src={Image9} alt=""/>
    </div>
    </div>
    </div>
        </div>
    )
}

export default withRouter(Home);