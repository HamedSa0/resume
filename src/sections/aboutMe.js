import React from "react";
import { Element } from "react-scroll";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="container AboutMe ">
        <Element name="AboutMe" className="element"/>
          <div className="row">
            <div className="col-md-12 ">
              <h1 className="text-center">About Me</h1>

              <p>
                I have been programming for around 6 years.I began with
                programming to create websites for my personal projects but
                after a while people started to contact me to develop their
                websites.
              </p>
              <p>
                I worked with technologies such as PHP, Wordpress and many other
                languages, but today I like to work with JavaScript based tech
                like React, Angular or VueJS. 
              </p>
              <p>
              I am passionate about JavaScript developer.
              </p>
            </div>
          </div>
      </div>
    );
  }
}

export default AboutMe;
