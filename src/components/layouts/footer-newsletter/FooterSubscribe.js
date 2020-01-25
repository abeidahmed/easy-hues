import React from "react";

import SectionHues from "../global/SectionHues";

const FooterSubscribe = props => {
  const backgroundColor = {
    backgroundColor: props.colorChange["Section color"]
  };
  const headingColor = {
    color: props.colorChange["Heading color"]
  };
  const headingAccentColor = {
    color: props.colorChange["Heading accent color"]
  };
  const textColor = {
    color: props.colorChange["Text color"]
  };
  const buttonStyle = {
    color: props.colorChange["Button text color"],
    backgroundColor: props.colorChange["Button color"]
  };
  return (
    <section className="sub">
      <div className="container">
        <div style={backgroundColor} className="sub-container">
          <div className="sub-wrapper">
            <div className="sub-header">
              <h3 style={headingColor} className="sub-title">
                Want early access and product updates?
              </h3>
              <p style={headingAccentColor} className="sub-desc">
                Sign up to get notified when it's ready.
              </p>
            </div>
            <div className="sub-field">
              <div className="sub-field-inner">
                <input className="sub-input" type="text" placeholder="Enter your email" />
                <div className="sub-button-container">
                  <button style={buttonStyle} className="sub-button">
                    Notify me
                  </button>
                </div>
              </div>
              <p style={textColor} className="sub-policy">
                We care about the protection of your data. Read our{" "}
                <a style={headingColor} href="#!">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <SectionHues huesOpen={props.huesOpen} colorChange={props.colorChange} />
        </div>
      </div>
    </section>
  );
};

export default FooterSubscribe;
