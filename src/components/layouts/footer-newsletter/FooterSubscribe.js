import React from "react";

import SectionHues from "../global/SectionHues";

const FooterSubscribe = props => {
  const {
    background,
    heading,
    headingAccent,
    text,
    buttonBackground,
    buttonText
  } = props.colorChange;

  const buttonStyle = {
    color: buttonText,
    backgroundColor: buttonBackground
  };
  return (
    <section className="sub">
      <div className="container">
        <div style={{ backgroundColor: background }} className="sub-container">
          <div className="sub-wrapper">
            <div className="sub-header">
              <h3 style={{ color: heading }} className="sub-title">
                Want early access and product updates?
              </h3>
              <p style={{ color: headingAccent }} className="sub-desc">
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
              <p style={{ color: text }} className="sub-policy">
                We care about the protection of your data. Read our{" "}
                <a style={{ color: heading }} href="#!">
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
