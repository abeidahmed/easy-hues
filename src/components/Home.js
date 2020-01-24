import React, { Component } from "react";

import HeroColors from "./colors/HeroColors";
import AboutColors from "./colors/AboutColors";
import ServiceColors from "./colors/ServiceColors";
import TestimonialColors from "./colors/TestimonialColors";
import PropertyColors from "./colors/PropertyColors";

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
        "Heading color": "#1a202c",
        "Heading accent color": "#5a67d8",
        "Text color": "#718096",
        "Button color": "#2d3748",
        "Button text color": "#fff",
        "Section color": "#fff"
      }
    ],
    aboutSection: [
      {
        "Icon color": "#5a67d8",
        "Icon background color": "#ebf4ff",
        "Heading color": "#1a202c",
        "Text color": "#718096",
        "Section color": "#fff"
      }
    ],
    serviceSection: [
      {
        "Heading color": "#1a202c",
        "Text color": "#718096",
        "Button color": "#1a202c",
        "Button text color": "#fff",
        "Section color": "#f7fafc",
        "Icon color": "#5a67d8",
        "Icon background color": "#ebf4ff",
        "SVG section color": "#fff"
      }
    ],
    testimonialSection: [
      {
        "Text color": "#fff",
        "Text accent color": "#c3dafe",
        "Icon color": "#c3dafe",
        "Border color": "#3c366b",
        "Section color": "#434190"
      }
    ],
    propertySection: [
      {
        "Heading color": "#fff",
        "Text color": "#cbd5e0",
        "Icon color": "#7f9cf5",
        "Section color": "#2d3748"
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
              "Heading accent color": color.headingAccentColor,
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
    AboutColors.map(color => {
      if (id === color.id) {
        this.setState({
          aboutSection: [
            {
              "Icon color": color.iconColor,
              "Icon background color": color.iconBackgroundColor,
              "Heading color": color.headingColor,
              "Text color": color.textColor,
              "Section color": color.sectionColor
            }
          ]
        });
      }
      return this.setState.aboutSection;
    });
    ServiceColors.map(color => {
      if (id === color.id) {
        this.setState({
          serviceSection: [
            {
              "Heading color": color.headingColor,
              "Text color": color.textColor,
              "Button color": color.buttonColor,
              "Button text color": color.buttonTextColor,
              "Section color": color.sectionColor,
              "Icon color": color.iconColor,
              "Icon background color": color.iconBackgroundColor,
              "SVG section color": color.svgsectionColor
            }
          ]
        });
      }
      return this.setState.serviceSection;
    });
    TestimonialColors.map(color => {
      if (id === color.id) {
        this.setState({
          testimonialSection: [
            {
              "Text color": color.textColor,
              "Text accent color": color.textAccentColor,
              "Icon color": color.iconColor,
              "Border color": color.borderColor,
              "Section color": color.sectionColor
            }
          ]
        });
      }
      return this.setState.serviceSection;
    });
    PropertyColors.map(color => {
      if (id === color.id) {
        this.setState({
          propertySection: [
            {
              "Heading color": color.headingColor,
              "Text color": color.textColor,
              "Icon color": color.iconColor,
              "Section color": color.sectionColor
            }
          ]
        });
      }
      return this.setState.propertySection;
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
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 74">
                  <g data-name="Layer 2">
                    <path
                      d="M2 12h49.2a10 10 0 0019.6 0H80a2 2 0 000-4h-9.2a10 10 0 00-19.6 0H2a2 2 0 000 4zm59-8a6 6 0 11-6 6 6 6 0 016-6zm19 31H30.8a10 10 0 00-19.6 0H2a2 2 0 000 4h9.2a10 10 0 0019.6 0H80a2 2 0 000-4zm-59 8a6 6 0 116-6 6 6 0 01-6 6zm59 19H50.8a10 10 0 00-19.6 0H2a2 2 0 000 4h29.2a10 10 0 0019.6 0H80a2 2 0 000-4zm-39 8a6 6 0 116-6 6 6 0 01-6 6z"
                      data-name="Layer 1"
                    />
                  </g>
                </svg>
                <span>View color palette</span>
              </button>
            </div>
          </div>
        </header>
        <Hero colorChange={this.state.heroSection[0]} />
        <About colorChange={this.state.aboutSection[0]} />
        <Service colorChange={this.state.serviceSection[0]} />
        <Testimonial colorChange={this.state.testimonialSection[0]} />
        <Property colorChange={this.state.propertySection[0]} />
        <FooterSubscribe />
        <Footer />
      </div>
    );
  }
}

export default Home;
