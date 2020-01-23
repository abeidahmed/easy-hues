import React from "react";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="container">
        <div className="hero-container-inner">
          <div className="hero-left">
            <h3 className="hero-subtitle">Coming soon</h3>
            <h1 className="hero-title">
              Data to enrich your <span>online business</span>
            </h1>
            <p className="hero-desc">
              Nulla viverra urna facilisis amet, vitae sapien. Velit feugiat tortor nisl eu faucibus
              dolor mauris. Malesuada tincidunt rutrum turpis vitae sed euismod urna etiam mi.
              Vitae, rutrum quis enim integer.
            </p>
            <div className="subscribe-field">
              <h3 className="subscribe-field-intro">Sign up to get notified when it's ready.</h3>
              <div className="subscribe-field-inner">
                <input className="subscribe-input" type="text" placeholder="Enter your email" />
                <div className="subscribe-button-container">
                  <button className="subscribe-button">Notify me</button>
                </div>
              </div>
              <p className="subscribe-policy">
                We care about the protection of your data. Read our <a href="#!">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
