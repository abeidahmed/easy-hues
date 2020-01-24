import React from "react";

import SectionHues from "../global/SectionHues";

const Hero = props => {
  return (
    <section
      style={{ backgroundColor: props.colorChange["Section color"] }}
      className="hero-container"
    >
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-container-inner">
            <div className="hero-left">
              <h3 style={{ color: props.colorChange["Text color"] }} className="hero-subtitle">
                Coming soon
              </h3>
              <h1 style={{ color: props.colorChange["Heading color"] }} className="hero-title">
                Data to enrich your{" "}
                <span style={{ color: props.colorChange["Heading accent color"] }}>
                  online business
                </span>
              </h1>
              <p style={{ color: props.colorChange["Text color"] }} className="hero-desc">
                Nulla viverra urna facilisis amet, vitae sapien. Velit feugiat tortor nisl eu
                faucibus dolor mauris. Malesuada tincidunt rutrum turpis vitae sed euismod urna
                etiam mi. Vitae, rutrum quis enim integer.
              </p>
              <div className="subscribe-field">
                <h3
                  style={{ color: props.colorChange["Heading color"] }}
                  className="subscribe-field-intro"
                >
                  Sign up to get notified when it's ready.
                </h3>
                <div className="subscribe-field-inner">
                  <input className="subscribe-input" type="text" placeholder="Enter your email" />
                  <div className="subscribe-button-container">
                    <button
                      style={{
                        color: props.colorChange["Button text color"],
                        backgroundColor: props.colorChange["Button color"]
                      }}
                      className="subscribe-button"
                    >
                      Notify me
                    </button>
                  </div>
                </div>
                <p style={{ color: props.colorChange["Text color"] }} className="subscribe-policy">
                  We care about the protection of your data. Read our{" "}
                  <a style={{ color: props.colorChange["Heading color"] }} href="#!">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-right-inner">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
                  alt="meeting"
                />
                <svg width="114" height="114" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity=".9" filter="url(#filter0_dd)">
                    <circle cx="57" cy="49" r="42" fill="#fff" />
                  </g>
                  <path
                    opacity=".9"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.288 34.313a2.5 2.5 0 012.537.067l20 12.5a2.5 2.5 0 010 4.24l-20 12.5A2.5 2.5 0 0147 61.5v-25a2.5 2.5 0 011.288-2.187z"
                    fill={props.colorChange["Heading accent color"]}
                  />
                  <defs>
                    <filter
                      id="filter0_dd"
                      x="0"
                      y="0"
                      width="114"
                      height="114"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="3" />
                      <feGaussianBlur stdDeviation="3" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy="8" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                      <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
                      <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <SectionHues huesOpen={props.huesOpen} colorChange={props.colorChange} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
