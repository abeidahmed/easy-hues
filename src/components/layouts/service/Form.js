import React from "react";

const Form = () => {
  return (
    <div className="service-inner-right">
      <form className="form">
        <div className="form-wrapper">
          <div className="form-intro">
            <div className="form-svg-container">
              <svg width="45" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0h30L30 60H0L15 0z" fill="#EBF4FF" />
                <path
                  d="M31 24a1 1 0 102 0h-2zM12 37a1 1 0 100-2v2zm4-12h20v-2H16v2zm23 3v12h2V28h-2zm-3 15H16v2h20v-2zm-23-3V28h-2v12h2zm3 3a3 3 0 01-3-3h-2a5 5 0 005 5v-2zm23-3a3 3 0 01-3 3v2a5 5 0 005-5h-2zm-3-15a3 3 0 013 3h2a5 5 0 00-5-5v2zm-20-2a5 5 0 00-5 5h2a3 3 0 013-3v-2zm-8-6h20v-2H8v2zM5 32V20H3v12h2zm3 3a3 3 0 01-3-3H3a5 5 0 005 5v-2zm20-18a3 3 0 013 3h2a5 5 0 00-5-5v2zM8 15a5 5 0 00-5 5h2a3 3 0 013-3v-2zm23 5v4h2v-4h-2zM12 35H8v2h4v-2zm17-1a3 3 0 01-3 3v2a5 5 0 005-5h-2zm-3 3a3 3 0 01-3-3h-2a5 5 0 005 5v-2zm-3-3a3 3 0 013-3v-2a5 5 0 00-5 5h2zm3-3a3 3 0 013 3h2a5 5 0 00-5-5v2z"
                  fill="#5A67D8"
                />
              </svg>
            </div>
            <div className="form-info-container">
              <h4>Send money</h4>
              <p>Select a recipient and the amount you want to send</p>
            </div>
          </div>
          <div className="form-content">
            <div className="form-control">
              <label htmlFor="recipient">Recipient</label>
              <input type="text" id="recipient" placeholder="Jacob Chander" />
            </div>
            <div className="transaction-control">
              <label htmlFor="transaction">How much do you want to send</label>
              <div className="transaction-details">
                <input
                  className="currency-input"
                  type="text"
                  id="transaction-id"
                  placeholder="$1000"
                />
                <div className="transaction-country">
                  <input className="country-input" type="text" placeholder="CAD" />
                  <div className="country-flag">
                    <svg width="28" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x=".25"
                        y=".25"
                        width="27.5"
                        height="19.5"
                        rx="1.75"
                        fill="#fff"
                        stroke="#F5F5F5"
                        strokeWidth=".5"
                      />
                      <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
                        <rect
                          x=".25"
                          y=".25"
                          width="27.5"
                          height="19.5"
                          rx="1.75"
                          fill="#fff"
                          stroke="#fff"
                          strokeWidth=".5"
                        />
                      </mask>
                      <g mask="url(#a)" fill="#FF3131">
                        <path d="M20 0h8v20h-8z" />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 20h8V0H0v20zM16.112 9.221a.333.333 0 01-.563-.3L16 6.666l-1.333.666-.667-2-.667 2L12 6.667l.45 2.253a.333.333 0 01-.562.301l-.319-.319a.333.333 0 00-.471 0l-.431.431-1.334-.666L10 10l-.431.43a.333.333 0 000 .472l1.764 1.765h2l.334 2h.666l.334-2h2l1.764-1.765a.333.333 0 000-.471L18 10l.667-1.333-1.334.666-.43-.43a.333.333 0 00-.472 0l-.32.318z"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="exchange-rate">
                <input type="text" placeholder="$12.17 CAD + Tax" />
                <input type="text" placeholder="0.7514 per USD" />
              </div>
              <div className="recipient-container">
                <label htmlFor="recipient-gets">Recipient gets</label>
                <div className="transaction-details">
                  <input
                    className="currency-input"
                    type="text"
                    id="transaction"
                    placeholder="$1000"
                  />
                  <div className="transaction-country">
                    <input className="country-input" type="text" placeholder="CAD" />
                    <div className="country-flag">
                      <svg width="28" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="28" height="20" rx="2" fill="#fff" />
                        <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20">
                          <rect width="28" height="20" rx="2" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28 0H0v1.333h28V0zm0 2.667H0V4h28V2.667zM0 5.333h28v1.334H0V5.333zM28 8H0v1.333h28V8zM0 10.667h28V12H0v-1.333zm28 2.666H0v1.334h28v-1.334zM0 16h28v1.333H0V16zm28 2.667H0V20h28v-1.333z"
                            fill="#D02F44"
                          />
                          <path fill="#46467F" d="M0 0h12v9.333H0z" />
                          <g filter="url(#filter0_d)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.667 2a.667.667 0 11-1.334 0 .667.667 0 011.334 0zm2.666 0A.667.667 0 114 2a.667.667 0 011.333 0zm2 .667a.667.667 0 100-1.334.667.667 0 000 1.334zM10.667 2a.667.667 0 11-1.334 0 .667.667 0 011.334 0zM3.333 4a.667.667 0 100-1.333.667.667 0 000 1.333zm3.334-.667a.667.667 0 11-1.334 0 .667.667 0 011.334 0zm2 .667a.667.667 0 100-1.333.667.667 0 000 1.333zm2 .667a.667.667 0 11-1.334 0 .667.667 0 011.334 0zm-3.334.666a.667.667 0 100-1.333.667.667 0 000 1.333zm-2-.666a.667.667 0 11-1.333 0 .667.667 0 011.333 0zM2 5.333A.667.667 0 102 4a.667.667 0 000 1.333zM4 6a.667.667 0 11-1.333 0A.667.667 0 014 6zm2 .667a.667.667 0 100-1.334.667.667 0 000 1.334zM9.333 6A.667.667 0 118 6a.667.667 0 011.333 0zM10 8a.667.667 0 100-1.333A.667.667 0 0010 8zm-2-.667a.667.667 0 11-1.333 0 .667.667 0 011.333 0zM4.667 8a.667.667 0 100-1.333.667.667 0 000 1.333zm-2-.667a.667.667 0 11-1.334 0 .667.667 0 011.334 0z"
                              fill="url(#paint0_linear)"
                            />
                          </g>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="1.333"
                            y1="1.333"
                            x2="1.333"
                            y2="8"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fff" />
                            <stop offset="1" stopColor="#F0F0F0" />
                          </linearGradient>
                          <filter
                            id="filter0_d"
                            x="1.333"
                            y="1.333"
                            width="9.333"
                            height="7.667"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix
                              in="SourceAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="1" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-button-container">
          <div className="form-button">
            <a href="#!" className="button-cancel">
              Cancel
            </a>
            <a href="#!" className="button-submit">
              Continue
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
