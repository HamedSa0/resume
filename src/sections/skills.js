import React from "react";
import { Link, Element, animateScroll as scroll, scroller } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

class Skills extends React.Component {
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  render() {
    return (
      <div className="container skills">
        <Element name="Skills" className="element"/>
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>Skills</h1>
              <br />
            </div>

            <div className="col-md-3 ">
              <img
                src={require("../image/html5.png")}
                alt="avatar"
                height="200"
              />
            </div>

            <div className="col-md-3">
              <img
                src={require("../image/css3.png")}
                alt="avatar"
              
                height="200"
              />
            </div>
            <div className="col-md-3">
              <img
                src={require("../image/javascript.png")}
                alt="avatar"
  
                height="200"
              />
            </div>
            <div className="col-md-3">
              <img
                src={require("../image/jquery.png")}
                alt="avatar"
           
                height="200"
              />
            </div>
            <div className="col-md-3">
              <img
                src={require("../image/reactjs.png")}
                alt="avatar"
              
                height="200"
              />
            </div>
            <div className="col-md-3">
              <img
                src={require("../image/nodejs.png")}
                alt="avatar"
             
                height="200"
              />
            </div>
            <div className="col-md-3">
              <img
                src={require("../image/python.png")}
                alt="avatar"
           
                height="200"
              />
            </div>
            <div className="col-md-3">
              <img
                src={require("../image/php.png")}
                alt="avatar"
          
                height="200"
              />
            </div>
            <div className="col-md-12 text-center">
              <Link
                activeClass="active"
                to="scrollTop"
                spy={true}
                smooth={true}
                duration={500}
              >
                <FontAwesomeIcon className="downIcon" icon={faChevronUp} />
              </Link>
            </div>
          </div>
        
      </div>
    );
  }
}

export default Skills;
