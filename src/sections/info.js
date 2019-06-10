import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faYoutubeSquare,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { Link, animateScroll as scroll, scroller } from "react-scroll";

class About extends React.Component {
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
      <div className="container info">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="avatar">
              <img src={require("../image/img_avatar.png")} alt="avatar" />
            </div>
            <h1>Hello, I am Hamed!</h1>
            <h1>A Full-Stack developer</h1>
            <div className="socialNetwork ">
              <a href="https://facebook.com/">
                <FontAwesomeIcon
                  className="socialIcon"
                  icon={faFacebookSquare}
                />
              </a>
              <a href="https://twitter.com/">
                <FontAwesomeIcon
                  className="socialIcon"
                  icon={faTwitterSquare}
                />
              </a>

              <a href="https://instagram.com/">
                <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
              </a>

              <a href="https://linkdin.com/">
                <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />
              </a>

              <a href="https://youtube.com/">
                <FontAwesomeIcon
                  className="socialIcon"
                  icon={faYoutubeSquare}
                />
              </a>

              <a href="https://github.com/">
                <FontAwesomeIcon className="socialIcon" icon={faGithubSquare} />
              </a>
            </div>

            <div style={{ marginTop: "140px" }}>
              <Link
                activeClass="active"
                to="AboutMe"
                spy={true}
                smooth={true}
                duration={500}
              >
                <FontAwesomeIcon className="downIcon" icon={faChevronDown} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
