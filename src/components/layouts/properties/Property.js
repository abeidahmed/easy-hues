import React from "react";

const Property = props => {
  console.log(props.colorChange);
  return (
    <section style={{ backgroundColor: props.colorChange["Section color"] }} className="property">
      <div className="container">
        <div className="property-wrapper">
          <h3 style={{ color: props.colorChange["Heading color"] }} className="property-intro">
            A better way to send money
          </h3>
          <p style={{ color: props.colorChange["Text color"] }} className="property-intro-info">
            Laoreet neque cras hendrerit nullam tempor sagittis, adipiscing sem. Purus vitae risus,
            fames pellentesque ut nulla imperdiet eget vestibulum.
          </p>
          <div className="property-flexed-container">
            <div className="property-container">
              <h4 style={{ color: props.colorChange["Heading color"] }} className="property-title">
                Accepted Payments
              </h4>
              <div className="property-info">
                <div className="property-desc">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L7.70711 9.29289ZM9 12L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L9 12ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L13.7071 8.70711ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM6.29289 10.7071L8.29289 12.7071L9.70711 11.2929L7.70711 9.29289L6.29289 10.7071ZM9.70711 12.7071L13.7071 8.70711L12.2929 7.29289L8.29289 11.2929L9.70711 12.7071Z"
                      fill={props.colorChange["Icon color"]}
                    />
                  </svg>
                  <span
                    style={{ color: props.colorChange["Text color"] }}
                    className="property-name"
                  >
                    Neque, aliquet
                  </span>
                </div>
                <div className="property-desc">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L7.70711 9.29289ZM9 12L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L9 12ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L13.7071 8.70711ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM6.29289 10.7071L8.29289 12.7071L9.70711 11.2929L7.70711 9.29289L6.29289 10.7071ZM9.70711 12.7071L13.7071 8.70711L12.2929 7.29289L8.29289 11.2929L9.70711 12.7071Z"
                      fill={props.colorChange["Icon color"]}
                    />
                  </svg>
                  <span
                    style={{ color: props.colorChange["Text color"] }}
                    className="property-name"
                  >
                    Neque, aliquet
                  </span>
                </div>
                <div className="property-desc">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L7.70711 9.29289ZM9 12L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L9 12ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L13.7071 8.70711ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM6.29289 10.7071L8.29289 12.7071L9.70711 11.2929L7.70711 9.29289L6.29289 10.7071ZM9.70711 12.7071L13.7071 8.70711L12.2929 7.29289L8.29289 11.2929L9.70711 12.7071Z"
                      fill={props.colorChange["Icon color"]}
                    />
                  </svg>
                  <span
                    style={{ color: props.colorChange["Text color"] }}
                    className="property-name"
                  >
                    Neque, aliquet
                  </span>
                </div>
              </div>
            </div>
            <div className="property-container">
              <h4 style={{ color: props.colorChange["Heading color"] }} className="property-title">
                Send Invoices
              </h4>
              <div className="property-info">
                <div className="property-desc">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L7.70711 9.29289ZM9 12L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L9 12ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L13.7071 8.70711ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM6.29289 10.7071L8.29289 12.7071L9.70711 11.2929L7.70711 9.29289L6.29289 10.7071ZM9.70711 12.7071L13.7071 8.70711L12.2929 7.29289L8.29289 11.2929L9.70711 12.7071Z"
                      fill={props.colorChange["Icon color"]}
                    />
                  </svg>
                  <span
                    style={{ color: props.colorChange["Text color"] }}
                    className="property-name"
                  >
                    Neque, aliquet
                  </span>
                </div>
                <div className="property-desc">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L7.70711 9.29289ZM9 12L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L9 12ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L13.7071 8.70711ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM6.29289 10.7071L8.29289 12.7071L9.70711 11.2929L7.70711 9.29289L6.29289 10.7071ZM9.70711 12.7071L13.7071 8.70711L12.2929 7.29289L8.29289 11.2929L9.70711 12.7071Z"
                      fill={props.colorChange["Icon color"]}
                    />
                  </svg>
                  <span
                    style={{ color: props.colorChange["Text color"] }}
                    className="property-name"
                  >
                    Neque, aliquet
                  </span>
                </div>
                <div className="property-desc">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L7.70711 9.29289ZM9 12L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L9 12ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L13.7071 8.70711ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM6.29289 10.7071L8.29289 12.7071L9.70711 11.2929L7.70711 9.29289L6.29289 10.7071ZM9.70711 12.7071L13.7071 8.70711L12.2929 7.29289L8.29289 11.2929L9.70711 12.7071Z"
                      fill={props.colorChange["Icon color"]}
                    />
                  </svg>
                  <span
                    style={{ color: props.colorChange["Text color"] }}
                    className="property-name"
                  >
                    Neque, aliquet
                  </span>
                </div>
              </div>
            </div>
            <div className="property-container">
              <h4 style={{ color: props.colorChange["Heading color"] }} className="property-title">
                Receive Payments
              </h4>
              <div className="property-info">
                <div className="property-desc">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L7.70711 9.29289ZM9 12L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L9 12ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L13.7071 8.70711ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM6.29289 10.7071L8.29289 12.7071L9.70711 11.2929L7.70711 9.29289L6.29289 10.7071ZM9.70711 12.7071L13.7071 8.70711L12.2929 7.29289L8.29289 11.2929L9.70711 12.7071Z"
                      fill={props.colorChange["Icon color"]}
                    />
                  </svg>
                  <span
                    style={{ color: props.colorChange["Text color"] }}
                    className="property-name"
                  >
                    Neque, aliquet
                  </span>
                </div>
                <div className="property-desc">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L7.70711 9.29289ZM9 12L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L9 12ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L13.7071 8.70711ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM6.29289 10.7071L8.29289 12.7071L9.70711 11.2929L7.70711 9.29289L6.29289 10.7071ZM9.70711 12.7071L13.7071 8.70711L12.2929 7.29289L8.29289 11.2929L9.70711 12.7071Z"
                      fill={props.colorChange["Icon color"]}
                    />
                  </svg>
                  <span
                    style={{ color: props.colorChange["Text color"] }}
                    className="property-name"
                  >
                    Neque, aliquet
                  </span>
                </div>
                <div className="property-desc">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L7.70711 9.29289ZM9 12L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L9 12ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L13.7071 8.70711ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM6.29289 10.7071L8.29289 12.7071L9.70711 11.2929L7.70711 9.29289L6.29289 10.7071ZM9.70711 12.7071L13.7071 8.70711L12.2929 7.29289L8.29289 11.2929L9.70711 12.7071Z"
                      fill={props.colorChange["Icon color"]}
                    />
                  </svg>
                  <span
                    style={{ color: props.colorChange["Text color"] }}
                    className="property-name"
                  >
                    Neque, aliquet
                  </span>
                </div>
              </div>
            </div>
            <div className="property-container">
              <h4 style={{ color: props.colorChange["Heading color"] }} className="property-title">
                Advanced Analytics
              </h4>
              <div className="property-info">
                <div className="property-desc">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L7.70711 9.29289ZM9 12L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L9 12ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L13.7071 8.70711ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM6.29289 10.7071L8.29289 12.7071L9.70711 11.2929L7.70711 9.29289L6.29289 10.7071ZM9.70711 12.7071L13.7071 8.70711L12.2929 7.29289L8.29289 11.2929L9.70711 12.7071Z"
                      fill={props.colorChange["Icon color"]}
                    />
                  </svg>
                  <span
                    style={{ color: props.colorChange["Text color"] }}
                    className="property-name"
                  >
                    Neque, aliquet
                  </span>
                </div>
                <div className="property-desc">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L7.70711 9.29289ZM9 12L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L9 12ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L13.7071 8.70711ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM6.29289 10.7071L8.29289 12.7071L9.70711 11.2929L7.70711 9.29289L6.29289 10.7071ZM9.70711 12.7071L13.7071 8.70711L12.2929 7.29289L8.29289 11.2929L9.70711 12.7071Z"
                      fill={props.colorChange["Icon color"]}
                    />
                  </svg>
                  <span
                    style={{ color: props.colorChange["Text color"] }}
                    className="property-name"
                  >
                    Neque, aliquet
                  </span>
                </div>
                <div className="property-desc">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L7.70711 9.29289ZM9 12L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L9 12ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L13.7071 8.70711ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM6.29289 10.7071L8.29289 12.7071L9.70711 11.2929L7.70711 9.29289L6.29289 10.7071ZM9.70711 12.7071L13.7071 8.70711L12.2929 7.29289L8.29289 11.2929L9.70711 12.7071Z"
                      fill={props.colorChange["Icon color"]}
                    />
                  </svg>
                  <span
                    style={{ color: props.colorChange["Text color"] }}
                    className="property-name"
                  >
                    Neque, aliquet
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Property;
