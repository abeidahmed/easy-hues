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
          </div>
          <SectionHues huesOpen={props.huesOpen} colorChange={props.colorChange} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
