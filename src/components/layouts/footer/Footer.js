import React from "react";

import SectionHues from "../global/SectionHues";

const Footer = props => {
  return (
    <footer style={{ backgroundColor: props.colorChange["Section color"] }} className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <nav className="footer-contents">
            <h4 style={{ color: props.colorChange["Heading color"] }} className="nav-title">
              Company
            </h4>
            <ul className="nav-container">
              <a
                style={{ color: props.colorChange["Text color"] }}
                className="footer-links"
                href="#!"
              >
                Changelog
              </a>
              <a
                style={{ color: props.colorChange["Text color"] }}
                className="footer-links"
                href="#!"
              >
                About
              </a>
              <a
                style={{ color: props.colorChange["Text color"] }}
                className="footer-links"
                href="#!"
              >
                Partners
              </a>
              <a
                style={{ color: props.colorChange["Text color"] }}
                className="footer-links"
                href="#!"
              >
                News
              </a>
            </ul>
          </nav>
          <nav className="footer-contents">
            <h4 style={{ color: props.colorChange["Heading color"] }} className="nav-title">
              Legal
            </h4>
            <ul className="nav-container">
              <a
                style={{ color: props.colorChange["Text color"] }}
                className="footer-links"
                href="#!"
              >
                Claim
              </a>
              <a
                style={{ color: props.colorChange["Text color"] }}
                className="footer-links"
                href="#!"
              >
                Privacy
              </a>
              <a
                style={{ color: props.colorChange["Text color"] }}
                className="footer-links"
                href="#!"
              >
                Terms
              </a>
            </ul>
          </nav>
          <nav className="footer-contents social-link-container">
            <h4 style={{ color: props.colorChange["Heading color"] }} className="nav-title">
              Connect
            </h4>
            <ul className="nav-container social-link-wrapper">
              <a
                style={{ color: props.colorChange["Text color"] }}
                className="footer-links"
                href="#!"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0066 0H0.993428C0.444648 0 0 0.444648 0 0.993428V17.0066C0 17.5552 0.444648 18 0.993428 18H9.61433V11.0295H7.26862V8.3129H9.61433V6.30952C9.61433 3.98457 11.0343 2.71861 13.1083 2.71861C14.1018 2.71861 14.9556 2.79259 15.2044 2.82564V5.25532L13.766 5.256C12.6381 5.256 12.4197 5.79196 12.4197 6.57848V8.3129H15.1098L14.7595 11.0295H12.4197V18H17.0066C17.5552 18 18 17.5552 18 17.0066V0.993428C18 0.444648 17.5552 0 17.0066 0Z"
                    fill={props.colorChange["Icon color"]}
                  />
                </svg>
              </a>
              <a
                style={{ color: props.colorChange["Text color"] }}
                className="footer-links"
                href="#!"
              >
                <svg
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.2896 16.2512C13.8368 16.2512 17.9648 9.99837 17.9648 4.57598C17.9648 4.39838 17.9648 4.22158 17.9528 4.04558C18.7559 3.4647 19.4491 2.74548 20 1.92158C19.2511 2.25342 18.4567 2.47104 17.6432 2.56718C18.4998 2.05436 19.1409 1.24779 19.4472 0.297575C18.6417 0.77554 17.7605 1.11238 16.8416 1.29358C15.5697 -0.0589094 13.5486 -0.389935 11.9116 0.486119C10.2747 1.36217 9.42902 3.22744 9.8488 5.03598C6.54952 4.87057 3.47558 3.31223 1.392 0.748775C0.302898 2.62369 0.85919 5.02226 2.6624 6.22638C2.00939 6.20702 1.37062 6.03087 0.8 5.71278C0.8 5.72958 0.8 5.74718 0.8 5.76478C0.800535 7.71805 2.1774 9.4004 4.092 9.78718C3.4879 9.95193 2.85406 9.97601 2.2392 9.85758C2.77676 11.5291 4.31726 12.6742 6.0728 12.7072C4.61979 13.8491 2.82485 14.469 0.9768 14.4672C0.650323 14.4665 0.324163 14.4468 0 14.408C1.87651 15.6122 4.05993 16.2509 6.2896 16.248"
                    fill={props.colorChange["Icon color"]}
                  />
                </svg>
              </a>
              <a
                style={{ color: props.colorChange["Text color"] }}
                className="footer-links"
                href="#!"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 0C7.28416 0 6.94362 0.0115116 5.87701 0.0601777C4.81263 0.108725 4.08569 0.277786 3.44962 0.525007C2.79203 0.780524 2.23436 1.12246 1.67839 1.67839C1.12246 2.23436 0.780524 2.79203 0.525007 3.44962C0.277786 4.08569 0.108725 4.81263 0.0601777 5.87701C0.0115116 6.94362 0 7.28416 0 10C0 12.7158 0.0115116 13.0564 0.0601777 14.123C0.108725 15.1874 0.277786 15.9143 0.525007 16.5504C0.780524 17.208 1.12246 17.7656 1.67839 18.3216C2.23436 18.8775 2.79203 19.2195 3.44962 19.475C4.08569 19.7222 4.81263 19.8913 5.87701 19.9398C6.94362 19.9885 7.28416 20 10 20C12.7158 20 13.0564 19.9885 14.123 19.9398C15.1874 19.8913 15.9143 19.7222 16.5504 19.475C17.208 19.2195 17.7656 18.8775 18.3216 18.3216C18.8775 17.7656 19.2195 17.208 19.475 16.5504C19.7222 15.9143 19.8913 15.1874 19.9398 14.123C19.9885 13.0564 20 12.7158 20 10C20 7.28416 19.9885 6.94362 19.9398 5.87701C19.8913 4.81263 19.7222 4.08569 19.475 3.44962C19.2195 2.79203 18.8775 2.23436 18.3216 1.67839C17.7656 1.12246 17.208 0.780524 16.5504 0.525007C15.9143 0.277786 15.1874 0.108725 14.123 0.0601777C13.0564 0.0115116 12.7158 0 10 0ZM10 1.8018C12.6701 1.8018 12.9864 1.812 14.0409 1.86011C15.0158 1.90457 15.5453 2.06748 15.8977 2.20443C16.3645 2.38583 16.6976 2.60253 17.0475 2.95248C17.3975 3.30239 17.6142 3.63551 17.7956 4.10229C17.9325 4.45466 18.0954 4.98415 18.1399 5.95914C18.188 7.0136 18.1982 7.32989 18.1982 10C18.1982 12.6701 18.188 12.9864 18.1399 14.0409C18.0954 15.0158 17.9325 15.5453 17.7956 15.8977C17.6142 16.3645 17.3975 16.6976 17.0475 17.0475C16.6976 17.3975 16.3645 17.6142 15.8977 17.7956C15.5453 17.9325 15.0158 18.0954 14.0409 18.1399C12.9866 18.188 12.6703 18.1982 10 18.1982C7.32969 18.1982 7.01348 18.188 5.95914 18.1399C4.98415 18.0954 4.45466 17.9325 4.10229 17.7956C3.63551 17.6142 3.30239 17.3975 2.95248 17.0475C2.60257 16.6976 2.38583 16.3645 2.20443 15.8977C2.06748 15.5453 1.90457 15.0158 1.86011 14.0409C1.812 12.9864 1.8018 12.6701 1.8018 10C1.8018 7.32989 1.812 7.0136 1.86011 5.95914C1.90457 4.98415 2.06748 4.45466 2.20443 4.10229C2.38583 3.63551 2.60253 3.30239 2.95248 2.95248C3.30239 2.60253 3.63551 2.38583 4.10229 2.20443C4.45466 2.06748 4.98415 1.90457 5.95914 1.86011C7.0136 1.812 7.32989 1.8018 10 1.8018ZM4.86487 10C4.86487 7.16393 7.16393 4.86487 10 4.86487C12.8361 4.86487 15.1351 7.16393 15.1351 10C15.1351 12.8361 12.8361 15.1351 10 15.1351C7.16393 15.1351 4.86487 12.8361 4.86487 10ZM16.538 4.66199C16.538 5.32474 16.0008 5.86197 15.338 5.86197C14.6753 5.86197 14.138 5.32474 14.138 4.66199C14.138 3.99924 14.6753 3.46197 15.338 3.46197C16.0008 3.46197 16.538 3.99924 16.538 4.66199ZM6.66667 10C6.66667 11.841 8.15904 13.3333 10 13.3333C11.841 13.3333 13.3333 11.841 13.3333 10C13.3333 8.15904 11.841 6.66667 10 6.66667C8.15904 6.66667 6.66667 8.15904 6.66667 10Z"
                    fill={props.colorChange["Icon color"]}
                  />
                </svg>
              </a>
              <a
                style={{ color: props.colorChange["Text color"] }}
                className="footer-links"
                href="#!"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.3385 15.338H12.669V11.1605C12.669 10.1645 12.652 8.883 11.282 8.883C9.8925 8.883 9.6805 9.9685 9.6805 11.0895V15.338H7.014V6.748H9.573V7.9225H9.61C9.966 7.247 10.837 6.535 12.1355 6.535C14.839 6.535 15.3385 8.3135 15.3385 10.627V15.338ZM4.004 5.5745C3.1465 5.5745 2.455 4.881 2.455 4.026C2.455 3.1715 3.1465 2.478 4.004 2.478C4.858 2.478 5.551 3.1715 5.551 4.026C5.551 4.881 4.858 5.5745 4.004 5.5745ZM2.667 15.338H5.3395V6.748H2.667V15.338ZM16.668 0H1.3275C0.595 0 0 0.581 0 1.298V16.701C0 17.418 0.595 18 1.3275 18H16.668C17.402 18 17.9995 17.418 17.9995 16.701V1.298C17.9995 0.581 17.402 0 16.668 0Z"
                    fill={props.colorChange["Icon color"]}
                  />
                </svg>
              </a>
            </ul>
          </nav>
        </div>
        <div className="footer-copyright">
          <p style={{ color: props.colorChange["Text color"] }} className="copyright-text">
            &copy; 2020 Easy Hues, All rights reserved.
          </p>
          <SectionHues colorChange={props.colorChange} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
