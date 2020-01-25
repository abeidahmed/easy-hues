import React, { Component } from "react";

import HeroColors from "./colors/HeroColors";
import AboutColors from "./colors/AboutColors";
import ServiceColors from "./colors/ServiceColors";
import TestimonialColors from "./colors/TestimonialColors";
import PropertyColors from "./colors/PropertyColors";
import FooterSubscribeColors from "./colors/FooterSubscribeColors";
import FooterColors from "./colors/FooterColors";

import Sidebar from "./layouts/global/Sidebar";
import Header from "./layouts/global/Header";
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
    activeId: 1,
    heroSection: [
      {
        heading: "#1a202c",
        headingAccent: "#5a67d8",
        text: "#718096",
        buttonBackground: "#2d3748",
        buttonText: "#fff",
        background: "#fff"
      }
    ],
    aboutSection: [
      {
        heading: "#1a202c",
        text: "#718096",
        icon: "#5a67d8",
        iconBackground: "#ebf4ff",
        background: "#fff"
      }
    ],
    serviceSection: [
      {
        heading: "#1a202c",
        text: "#718096",
        buttonBackground: "#1a202c",
        buttonText: "#fff",
        background: "#f7fafc",
        icon: "#5a67d8",
        iconBackground: "#ebf4ff",
        formLabel: "#1a202c",
        inputBorder: "#cbd5e0",
        inputBackground: "#fff",
        formBackground: "#fff"
      }
    ],
    testimonialSection: [
      {
        text: "#fff",
        textAccent: "#c3dafe",
        icon: "#c3dafe",
        border: "#3c366b",
        background: "#434190"
      }
    ],
    propertySection: [
      {
        heading: "#fff",
        text: "#cbd5e0",
        icon: "#7f9cf5",
        background: "#2d3748"
      }
    ],
    footerSubscribeSection: [
      {
        heading: "#3c366b",
        headingAccent: "#4c51bf",
        text: "#5a67d8",
        buttonBackground: "#2d3748",
        buttonText: "#fff",
        background: "#ebf4ff"
      }
    ],
    footerSection: [
      {
        heading: "#718096",
        text: "#718096",
        icon: "#a0aec0",
        logo: "#00d8ff",
        background: "#fff"
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

  handleActive = id => {
    this.setState({
      activeId: id
    });
  };

  handleColorChange = id => {
    HeroColors.map(color => {
      if (id === color.id) {
        this.setState({
          heroSection: [
            {
              heading: color.heading,
              headingAccent: color.headingAccent,
              text: color.text,
              buttonBackground: color.buttonBackground,
              buttonText: color.buttonText,
              background: color.sectionBackground
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
              heading: color.heading,
              text: color.text,
              icon: color.icon,
              iconBackground: color.iconBackground,
              background: color.sectionBackground
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
              heading: color.heading,
              text: color.text,
              buttonBackground: color.buttonBackground,
              buttonText: color.buttonText,
              background: color.sectionBackground,
              icon: color.icon,
              iconBackground: color.iconBackground,
              formLabel: color.formLabel,
              inputBorder: color.inputBorder,
              inputBackground: color.inputBackground,
              formBackground: color.formBackground
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
              text: color.text,
              textAccent: color.textAccent,
              icon: color.icon,
              border: color.borderColor,
              background: color.sectionBackground
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
              heading: color.heading,
              text: color.text,
              icon: color.icon,
              background: color.sectionBackground
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
              heading: color.heading,
              headingAccent: color.headingAccent,
              text: color.text,
              buttonBackground: color.buttonBackground,
              buttonText: color.buttonText,
              background: color.sectionBackground
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
              heading: color.heading,
              text: color.text,
              icon: color.icon,
              logo: color.logo,
              background: color.sectionBackground
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
        <Sidebar
          isOpen={this.state.isOpen}
          heroColors={HeroColors}
          activeId={this.state.activeId}
          handleColorChange={this.handleColorChange}
          handleActive={this.handleActive}
        />
        <Header
          handleSidebar={this.handleSidebar}
          isOpen={this.state.isOpen}
          handleHues={this.handleHues}
          huesOpen={this.state.huesOpen}
        />
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
