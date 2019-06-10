import React, { Component } from "react";
import "./styles/App.css";
import Particles from "react-particles-js";
import Nav from "../src/components/Nav";
import Info from "./sections/info";
import AboutMe from "./sections/aboutMe";
import Skills from "../src/sections/skills";

const TContext = React.createContext();
const TConsumer = TContext.Consumer;

const particlesOpt = {
  particles: {
    number: {
      value: 160,
      density: {
        enable: false
      }
    },
    size: {
      value: 10,
      random: true
    },
    move: {
      direction: "bottom",
      out_mode: "out"
    },
    line_linked: {
      enable: false
    }
  },
  interactivity: {
    events: {
      onclick: {
        enable: true,
        mode: "remove"
      }
    },
    modes: {
      remove: {
        particles_nb: 10
      }
    }
  }
};

class TProvider extends Component {
  toggleTheme = evt => {
    this.setState({ theme: evt.target.checked ? "night" : "day" });
  };

  state = {
    theme: "night",
    toggleTheme: this.toggleTheme
  };

  render() {
    return (
      <TContext.Provider value={this.state}>
        {this.props.children}
      </TContext.Provider>
    );
  }
}

class Slider extends Component {
  render() {
    return (
      <label className="switch">
        <TConsumer>
          {({ toggleTheme, theme }) => (
            <input
              onChange={toggleTheme}
              type="checkbox"
              checked={theme === "night"}
            />
          )}
        </TConsumer>
        <span className="slider round" />
      </label>
    );
  }
}

const SliderBt = () => (
  <div className="SliderBt">
    <label>Theme change:</label> <Slider />
  </div>
);

const App = () => (
  <TProvider>
    <TConsumer>
      {({ theme }) => (
        <div className={theme}>
          <Nav />

          <Info />

          <AboutMe />

          <Skills />

          <SliderBt />

          <Particles params={particlesOpt} />
        </div>
      )}
    </TConsumer>
  </TProvider>
);

export default App;
