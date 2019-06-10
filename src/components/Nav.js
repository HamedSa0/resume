import React from "react";
import { Link, Element, animateScroll as scroll, scroller } from "react-scroll";

class Nav extends React.Component {
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
      <div className="container">
        <Element name="scrollTop" className="element" />
        <div className="row">
          <div className="col-md-12">

          <ul className="nav justify-content-center ">
            <li className="nav-item">
            <Link
                   activeClass="active"
                  className="nav-link"
                  to="AboutMe"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About me
                </Link>
            </li>
     
            <li className="nav-item">
            <Link
                  activeClass="active"
                  className="nav-link"
                  to="Skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Skills
                </Link>
          
            </li>
          </ul>




          
         

           


   
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
