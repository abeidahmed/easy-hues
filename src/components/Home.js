import React, { Component } from "react";

import HeroColors from "./colors/HeroColors";
import Hero from "./layouts/hero/Hero";
import About from "./layouts/about/About";
import Service from "./layouts/service/Service";
import Testimonial from "./layouts/testimonials/Testimonial";
import Property from "./layouts/properties/Property";
import FooterSubscribe from "./layouts/footer-newsletter/FooterSubscribe";
import Footer from "./layouts/footer/Footer";

class Home extends Component {
  state = {
    isOpen: false,
    heroSection: [
      {
        "Heading color": "#1F1235",
        "Text color": "#1B1425",
        "Button color": "#FF6E6C",
        "Button text color": "#1F1235",
        "Section color": "#FFF"
      }
    ]
  };

  handleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleColorChange = id => {
    HeroColors.map(color => {
      if (id === color.id) {
        this.setState({
          heroSection: [
            {
              "Heading color": color.headingColor,
              "Text color": color.textColor,
              "Button color": color.buttonColor,
              "Button text color": color.buttonTextColor,
              "Section color": color.sectionColor
            }
          ]
        });
      }
      return this.setState.heroSection;
    });
  };
  render() {
    return (
      <div className="site-container">
        <div className={this.state.isOpen ? "sidebar-container active" : "sidebar-container"}>
          <div className="sidebar-container-inner">
            <h3 className="sidebar-title">Select a color palette</h3>
            {HeroColors.map(color => (
              <button onClick={() => this.handleColorChange(color.id)} key={color.id}>
                <span style={{ backgroundColor: color.headingColor }}></span>
                <span style={{ backgroundColor: color.textColor }}></span>
                <span style={{ backgroundColor: color.buttonColor }}></span>
                <span style={{ backgroundColor: color.sectionColor }}></span>
                <span style={{ backgroundColor: color.accentTextColor }}></span>
              </button>
            ))}
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="menu-toggle-container">
              <button onClick={this.handleSidebar} className="menu-toggle">
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 4.8a1.2 1.2 0 011.2-1.2h21.6a1.2 1.2 0 010 2.4H1.2A1.2 1.2 0 010 4.8zM0 12a1.2 1.2 0 011.2-1.2h21.6a1.2 1.2 0 010 2.4H1.2A1.2 1.2 0 010 12zm0 7.2A1.2 1.2 0 011.2 18h21.6a1.2 1.2 0 010 2.4H1.2A1.2 1.2 0 010 19.2z"
                    fill="#1F1235"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <Hero />
        <About />
        <Service />
        <Testimonial />
        <Property />
        <FooterSubscribe />
        <Footer />
      </div>
    );
  }
}

export default Home;
