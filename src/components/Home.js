import React, { Component } from "react";

import HeroColors from "./colors/HeroColors";
import AboutColors from "./colors/AboutColors";
import ServiceColors from "./colors/ServiceColors";
import TestimonialColors from "./colors/TestimonialColors";
import PropertyColors from "./colors/PropertyColors";
import FooterSubscribeColors from "./colors/FooterSubscribeColors";
import FooterColors from "./colors/FooterColors";

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
    huesOpen: false,
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
        "Heading color": "#1a202c",
        "Text color": "#718096",
        "Icon color": "#5a67d8",
        "Icon background color": "#ebf4ff",
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
    ],
    footerSubscribeSection: [
      {
        "Heading color": "#3c366b",
        "Heading accent color": "#4c51bf",
        "Text color": "#5a67d8",
        "Button color": "#2d3748",
        "Button text color": "#fff",
        "Section color": "#ebf4ff"
      }
    ],
    footerSection: [
      {
        "Heading color": "#718096",
        "Text color": "#718096",
        "Icon color": "#a0aec0",
        "Section color": "#fff"
      }
    ]
  };

  handleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleHues = () => {
    this.setState(prevState => ({
      huesOpen: !prevState.huesOpen
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
    FooterSubscribeColors.map(color => {
      if (id === color.id) {
        this.setState({
          footerSubscribeSection: [
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
      return this.setState.footerSubscribeSection;
    });
    FooterColors.map(color => {
      if (id === color.id) {
        this.setState({
          footerSection: [
            {
              "Heading color": color.headingColor,
              "Text color": color.textColor,
              "Icon color": color.iconColor,
              "Section color": color.sectionColor
            }
          ]
        });
      }
      return this.setState.footerSection;
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
                {this.state.isOpen ? (
                  <span>Hide color palette</span>
                ) : (
                  <span>Show color palette</span>
                )}
              </button>
              <button onClick={this.handleHues} className="hues-toggle">
                {this.state.huesOpen ? (
                  <span className="hues-toggle-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g data-name="Layer 2">
                        <g data-name="Layer 1">
                          <path
                            d="M23.88 14.14l-2.58-2.27 2.49-2.36a.35.35 0 00.1-.34.37.37 0 00-.25-.25L20.33 8l1.22-3.19a.34.34 0 00-.06-.35.36.36 0 00-.33-.12l-3.41.54-.27-3.4a.36.36 0 00-.56-.26l-2.84 1.91L12.35.18A.35.35 0 0012 0a.38.38 0 00-.31.18l-2 3.39-3.43-2A.36.36 0 006 1.6a.35.35 0 00-.18.3v3.42L2.34 5a.36.36 0 00-.34.18.34.34 0 000 .35l1.46 3.09-3.23 1.2a.39.39 0 00-.23.27.35.35 0 00.13.33l2.67 2.17L.4 15a.36.36 0 00.17.59l3.36.82-1.1 3.23a.35.35 0 00.07.36.37.37 0 00.33.11l3.39-.68.38 3.42a.36.36 0 00.21.28.36.36 0 00.36 0L10.36 21l1.84 2.8a.37.37 0 00.3.16.38.38 0 00.3-.19l1.61-2.92 2.91 1.82a.36.36 0 00.36 0 .37.37 0 00.19-.3L18 19l3.43.42a.38.38 0 00.33-.14.36.36 0 000-.35l-1.35-3.14 3.28-1.08a.34.34 0 00.23-.26.32.32 0 00-.04-.31z"
                            fill="#ffa600"
                          />
                          <ellipse cx="11.92" cy="11.94" rx="7.32" ry="7.26" fill="#ffdb2d" />
                        </g>
                      </g>
                    </svg>
                    <span className="hues-toggle-text">Hide section hues</span>
                  </span>
                ) : (
                  <span className="hues-toggle-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.61 24">
                      <g data-name="Layer 2">
                        <g data-name="Layer 1">
                          <path
                            d="M29.49 14.14l-2.58-2.27 2.49-2.36a.35.35 0 00.1-.34.37.37 0 00-.25-.25L25.94 8l1.22-3.19a.34.34 0 00-.06-.35.36.36 0 00-.33-.12l-3.41.54-.27-3.4a.36.36 0 00-.56-.26l-2.84 1.91L18 .18a.35.35 0 00-.35-.18.38.38 0 00-.31.18l-2 3.39-3.43-2a.36.36 0 00-.35 0 .35.35 0 00-.18.3v3.45L8 5a.36.36 0 00-.32.15.34.34 0 000 .35l1.39 3.12-3.23 1.2a.35.35 0 00-.22.27.32.32 0 00.12.33l2.67 2.17L6 15a.36.36 0 00.17.59l3.36.82-1.1 3.23a.35.35 0 00.07.35.37.37 0 00.33.11l3.39-.68.41 3.39a.36.36 0 00.57.24L16 21l1.84 2.8a.37.37 0 00.3.16.38.38 0 00.3-.19L20 20.89l3 1.82a.36.36 0 00.36 0 .37.37 0 00.19-.3l.09-3.41 3.43.42a.38.38 0 00.33-.14.36.36 0 000-.35l-1.35-3.14 3.28-1.08a.34.34 0 00.23-.26.32.32 0 00-.07-.31z"
                            fill="#ffa600"
                          />
                          <ellipse cx="17.53" cy="11.94" rx="7.32" ry="7.26" fill="#ffdb2d" />
                          <path
                            d="M23.34 13a5.68 5.68 0 00-1.09.11A4.45 4.45 0 0016 9.94 6 6 0 104.81 14 5 5 0 005 24h18.34a5.49 5.49 0 000-11z"
                            fill="#a3d4f7"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className="hues-toggle-text">Show section hues</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>
        <Hero huesOpen={this.state.huesOpen} colorChange={this.state.heroSection[0]} />
        <About huesOpen={this.state.huesOpen} colorChange={this.state.aboutSection[0]} />
        <Service huesOpen={this.state.huesOpen} colorChange={this.state.serviceSection[0]} />
        <Testimonial
          huesOpen={this.state.huesOpen}
          colorChange={this.state.testimonialSection[0]}
        />
        <Property huesOpen={this.state.huesOpen} colorChange={this.state.propertySection[0]} />
        <FooterSubscribe
          huesOpen={this.state.huesOpen}
          colorChange={this.state.footerSubscribeSection[0]}
        />
        <Footer huesOpen={this.state.huesOpen} colorChange={this.state.footerSection[0]} />
      </div>
    );
  }
}

export default Home;
