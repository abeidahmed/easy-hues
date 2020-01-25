import React from "react";

import SectionHues from "../global/SectionHues";

import Form from "./Form";
import Payments from "./Payments";

const Service = props => {
  const backgroundColor = {
    backgroundColor: props.colorChange["Section color"]
  };
  const headingColor = {
    color: props.colorChange["Heading color"]
  };
  const textColor = {
    color: props.colorChange["Text color"]
  };
  const iconColor = () => {
    return props.colorChange["Icon color"];
  };
  const iconBackgroundColor = () => {
    return props.colorChange["Icon background color"];
  };
  return (
    <section style={backgroundColor} className="service">
      <div className="container">
        <div className="service-wrapper">
          <div className="service-intro">
            <h2 style={headingColor} className="service-title">
              A better way to send money
            </h2>
            <p style={textColor} className="service-desc">
              Quam hendrerit et scelerisque nulla pharetra in. Elementum urna risus enim aliquet
              pharetra nam tellus. Sem dolor sapien.
            </p>
          </div>
          <div className="service-inner">
            <div className="service-inner-left">
              <h3 style={headingColor} className="service-inner-title">
                Single-click transfers
              </h3>
              <p style={textColor} className="service-inner-desc">
                Non sollicitudin lobortis quis quis vel, sem nisl turpis. Arcu libero volutpat amet,
                elementum. Enim interdum potenti platea purus imperdiet hac. Tristique at egestas
                porttitor in leo. Pharetra id ornare netus venenatis arcu auctor.
              </p>
              <div className="service-offer-container">
                <div className="service-offer-wrapper">
                  <div className="service-offer-left">
                    <svg
                      width="45"
                      height="60"
                      viewBox="0 0 45 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 0H45L30 60H0L15 0Z" fill={iconBackgroundColor()} />
                      <path
                        d="M12 35C11.4477 35 11 35.4477 11 36C11 36.5523 11.4477 37 12 37V35ZM14 37C14.5523 37 15 36.5523 15 36C15 35.4477 14.5523 35 14 35V37ZM22 35C21.4477 35 21 35.4477 21 36C21 36.5523 21.4477 37 22 37V35ZM24 37C24.5523 37 25 36.5523 25 36C25 35.4477 24.5523 35 24 35V37ZM10 17H34V15H10V17ZM39 22V38H41V22H39ZM34 43H10V45H34V43ZM5 38V22H3V38H5ZM10 43C7.23858 43 5 40.7614 5 38H3C3 41.866 6.13401 45 10 45V43ZM39 38C39 40.7614 36.7614 43 34 43V45C37.866 45 41 41.866 41 38H39ZM34 17C36.7614 17 39 19.2386 39 22H41C41 18.134 37.866 15 34 15V17ZM10 15C6.13401 15 3 18.134 3 22H5C5 19.2386 7.23858 17 10 17V15ZM4 25H40V23H4V25ZM12 37H14V35H12V37ZM22 37H24V35H22V37Z"
                        fill={iconColor()}
                      />
                    </svg>
                  </div>
                  <div className="service-offer-right">
                    <h4 style={headingColor} className="service-offer-title">
                      Accept any type of card
                    </h4>
                    <p style={textColor} className="service-offer-desc">
                      Vitae lorem ullamcorper aliquam nec. Dignissim vestibulum turpis morbi
                      adipiscing suspendisse. Nibh pretium nunc varius morbi.
                    </p>
                  </div>
                </div>
                <div className="service-offer-wrapper">
                  <div className="service-offer-left">
                    <svg
                      width="45"
                      height="60"
                      viewBox="0 0 45 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 0H45L30 60H0L15 0Z" fill={iconBackgroundColor()} />
                      <path
                        d="M7 14C7 13.4477 6.55228 13 6 13C5.44772 13 5 13.4477 5 14H7ZM6 24H5C5 24.5523 5.44772 25 6 25V24ZM36.8839 28.1237C36.9522 28.6718 37.4519 29.0607 38 28.9923C38.548 28.924 38.9369 28.4243 38.8685 27.8763L36.8839 28.1237ZM16 25C16.5523 25 17 24.5523 17 24C17 23.4477 16.5523 23 16 23V25ZM37 46C37 46.5523 37.4477 47 38 47C38.5523 47 39 46.5523 39 46H37ZM38 36H39C39 35.4477 38.5523 35 38 35V36ZM28 35C27.4477 35 27 35.4477 27 36C27 36.5523 27.4477 37 28 37V35ZM7.1161 31.8763C7.04776 31.3282 6.54809 30.9393 6.00005 31.0077C5.45201 31.076 5.06313 31.5757 5.13147 32.1237L7.1161 31.8763ZM5 14V24H7V14H5ZM22 15C29.6485 15 35.9613 20.7254 36.8839 28.1237L38.8685 27.8763C37.8227 19.4893 30.6699 13 22 13V15ZM8.08997 24.3752C10.3159 18.8762 15.7065 15 22 15V13C14.864 13 8.75725 17.3965 6.2361 23.6248L8.08997 24.3752ZM6 25H7.16303V23H6V25ZM7.16303 25H16V23H7.16303V25ZM39 46V36H37V46H39ZM35.91 35.6248C33.6841 41.1238 28.2935 45 22 45V47C29.136 47 35.2428 42.6035 37.7639 36.3752L35.91 35.6248ZM38 35H36.837V37H38V35ZM36.837 35H28V37H36.837V35ZM22 45C14.3515 45 8.03866 39.2746 7.1161 31.8763L5.13147 32.1237C6.17731 40.5107 13.3301 47 22 47V45Z"
                        fill={iconColor()}
                      />
                    </svg>
                  </div>
                  <div className="service-offer-right">
                    <h4 style={headingColor} className="service-offer-title">
                      Instance status updates
                    </h4>
                    <p style={textColor} className="service-offer-desc">
                      Nibh et et gravida elementum eu vivamus montes, ac. Et eget cursus nunc
                      pulvinar quis bibendum. Gravida massa hac auctor egestas mauris id mattis.
                    </p>
                  </div>
                </div>
                <div className="service-offer-wrapper">
                  <div className="service-offer-left">
                    <svg
                      width="45"
                      height="60"
                      viewBox="0 0 45 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 0H45L30 60H0L15 0Z" fill={iconBackgroundColor()} />
                      <path
                        d="M12 35C11.4477 35 11 35.4477 11 36C11 36.5523 11.4477 37 12 37V35ZM14 37C14.5523 37 15 36.5523 15 36C15 35.4477 14.5523 35 14 35V37ZM22 35C21.4477 35 21 35.4477 21 36C21 36.5523 21.4477 37 22 37V35ZM24 37C24.5523 37 25 36.5523 25 36C25 35.4477 24.5523 35 24 35V37ZM10 17H34V15H10V17ZM39 22V38H41V22H39ZM34 43H10V45H34V43ZM5 38V22H3V38H5ZM10 43C7.23858 43 5 40.7614 5 38H3C3 41.866 6.13401 45 10 45V43ZM39 38C39 40.7614 36.7614 43 34 43V45C37.866 45 41 41.866 41 38H39ZM34 17C36.7614 17 39 19.2386 39 22H41C41 18.134 37.866 15 34 15V17ZM10 15C6.13401 15 3 18.134 3 22H5C5 19.2386 7.23858 17 10 17V15ZM4 25H40V23H4V25ZM12 37H14V35H12V37ZM22 37H24V35H22V37Z"
                        fill={iconColor()}
                      />
                    </svg>
                  </div>
                  <div className="service-offer-right">
                    <h4 style={headingColor} className="service-offer-title">
                      Accept any type of card
                    </h4>
                    <p style={textColor} className="service-offer-desc">
                      Elit consequat est dignissim ut laoreet phasellus tristique. Integer tempor
                      sagittis, odio metus purus. Lectus elementum, vel, nisl, suscipit pharetra
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Form colorChange={props.colorChange} />
          </div>
          <div className="service-inner">
            <div className="service-inner-left order-2">
              <h3 style={headingColor} className="service-inner-title">
                Single-click transfers
              </h3>
              <p style={textColor} className="service-inner-desc">
                Non sollicitudin lobortis quis quis vel, sem nisl turpis. Arcu libero volutpat amet,
                elementum. Enim interdum potenti platea purus imperdiet hac. Tristique at egestas
                porttitor in leo. Pharetra id ornare netus venenatis arcu auctor.
              </p>
              <div className="service-offer-container">
                <div className="service-offer-wrapper">
                  <div className="service-offer-left">
                    <svg
                      width="45"
                      height="60"
                      viewBox="0 0 45 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 0H45L30 60H0L15 0Z" fill={iconBackgroundColor()} />
                      <path
                        d="M12 35C11.4477 35 11 35.4477 11 36C11 36.5523 11.4477 37 12 37V35ZM14 37C14.5523 37 15 36.5523 15 36C15 35.4477 14.5523 35 14 35V37ZM22 35C21.4477 35 21 35.4477 21 36C21 36.5523 21.4477 37 22 37V35ZM24 37C24.5523 37 25 36.5523 25 36C25 35.4477 24.5523 35 24 35V37ZM10 17H34V15H10V17ZM39 22V38H41V22H39ZM34 43H10V45H34V43ZM5 38V22H3V38H5ZM10 43C7.23858 43 5 40.7614 5 38H3C3 41.866 6.13401 45 10 45V43ZM39 38C39 40.7614 36.7614 43 34 43V45C37.866 45 41 41.866 41 38H39ZM34 17C36.7614 17 39 19.2386 39 22H41C41 18.134 37.866 15 34 15V17ZM10 15C6.13401 15 3 18.134 3 22H5C5 19.2386 7.23858 17 10 17V15ZM4 25H40V23H4V25ZM12 37H14V35H12V37ZM22 37H24V35H22V37Z"
                        fill={iconColor()}
                      />
                    </svg>
                  </div>
                  <div className="service-offer-right">
                    <h4 style={headingColor} className="service-offer-title">
                      Accept any type of card
                    </h4>
                    <p style={textColor} className="service-offer-desc">
                      Vitae lorem ullamcorper aliquam nec. Dignissim vestibulum turpis morbi
                      adipiscing suspendisse. Nibh pretium nunc varius morbi.
                    </p>
                  </div>
                </div>
                <div className="service-offer-wrapper">
                  <div className="service-offer-left">
                    <svg
                      width="45"
                      height="60"
                      viewBox="0 0 45 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 0H45L30 60H0L15 0Z" fill={iconBackgroundColor()} />
                      <path
                        d="M7 14C7 13.4477 6.55228 13 6 13C5.44772 13 5 13.4477 5 14H7ZM6 24H5C5 24.5523 5.44772 25 6 25V24ZM36.8839 28.1237C36.9522 28.6718 37.4519 29.0607 38 28.9923C38.548 28.924 38.9369 28.4243 38.8685 27.8763L36.8839 28.1237ZM16 25C16.5523 25 17 24.5523 17 24C17 23.4477 16.5523 23 16 23V25ZM37 46C37 46.5523 37.4477 47 38 47C38.5523 47 39 46.5523 39 46H37ZM38 36H39C39 35.4477 38.5523 35 38 35V36ZM28 35C27.4477 35 27 35.4477 27 36C27 36.5523 27.4477 37 28 37V35ZM7.1161 31.8763C7.04776 31.3282 6.54809 30.9393 6.00005 31.0077C5.45201 31.076 5.06313 31.5757 5.13147 32.1237L7.1161 31.8763ZM5 14V24H7V14H5ZM22 15C29.6485 15 35.9613 20.7254 36.8839 28.1237L38.8685 27.8763C37.8227 19.4893 30.6699 13 22 13V15ZM8.08997 24.3752C10.3159 18.8762 15.7065 15 22 15V13C14.864 13 8.75725 17.3965 6.2361 23.6248L8.08997 24.3752ZM6 25H7.16303V23H6V25ZM7.16303 25H16V23H7.16303V25ZM39 46V36H37V46H39ZM35.91 35.6248C33.6841 41.1238 28.2935 45 22 45V47C29.136 47 35.2428 42.6035 37.7639 36.3752L35.91 35.6248ZM38 35H36.837V37H38V35ZM36.837 35H28V37H36.837V35ZM22 45C14.3515 45 8.03866 39.2746 7.1161 31.8763L5.13147 32.1237C6.17731 40.5107 13.3301 47 22 47V45Z"
                        fill={iconColor()}
                      />
                    </svg>
                  </div>
                  <div className="service-offer-right">
                    <h4 style={headingColor} className="service-offer-title">
                      Instance status updates
                    </h4>
                    <p style={textColor} className="service-offer-desc">
                      Nibh et et gravida elementum eu vivamus montes, ac. Et eget cursus nunc
                      pulvinar quis bibendum. Gravida massa hac auctor egestas mauris id mattis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Payments colorChange={props.colorChange} />
          </div>
          <SectionHues huesOpen={props.huesOpen} colorChange={props.colorChange} />
        </div>
      </div>
    </section>
  );
};

export default Service;
