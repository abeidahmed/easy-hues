import React, { Component } from "react";

class FooterSubscribe extends Component {
  render() {
    return (
      <section className="sub">
        <div className="container">
          <div className="sub-container">
            <div className="sub-wrapper">
              <div className="sub-header">
                <h3 className="sub-title">Want early access and product updates?</h3>
                <p className="sub-desc">Sign up to get notified when it's ready.</p>
              </div>
              <div className="sub-field">
                <div className="sub-field-inner">
                  <input className="sub-input" type="text" placeholder="Enter your email" />
                  <div className="sub-button-container">
                    <button className="sub-button">Notify me</button>
                  </div>
                </div>
                <p className="sub-policy">
                  We care about the protection of your data. Read our{" "}
                  <a href="#!">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FooterSubscribe;
