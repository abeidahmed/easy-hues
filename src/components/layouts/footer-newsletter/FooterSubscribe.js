import React from "react";

import SectionHues from "../global/SectionHues";

const FooterSubscribe = props => {
  return (
    <section className="sub">
      <div className="container">
        <div
          style={{ backgroundColor: props.colorChange["Section color"] }}
          className="sub-container"
        >
          <div className="sub-wrapper">
            <div className="sub-header">
              <h3 style={{ color: props.colorChange["Heading color"] }} className="sub-title">
                Want early access and product updates?
              </h3>
              <p style={{ color: props.colorChange["Heading accent color"] }} className="sub-desc">
                Sign up to get notified when it's ready.
              </p>
            </div>
            <div className="sub-field">
              <div className="sub-field-inner">
                <input className="sub-input" type="text" placeholder="Enter your email" />
                <div className="sub-button-container">
                  <button
                    style={{
                      color: props.colorChange["Button text color"],
                      backgroundColor: props.colorChange["Button color"]
                    }}
                    className="sub-button"
                  >
                    Notify me
                  </button>
                </div>
              </div>
              <p style={{ color: props.colorChange["Text color"] }} className="sub-policy">
                We care about the protection of your data. Read our{" "}
                <a style={{ color: props.colorChange["Heading color"] }} href="#!">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <SectionHues colorChange={props.colorChange} />
        </div>
      </div>
    </section>
  );
};

export default FooterSubscribe;
