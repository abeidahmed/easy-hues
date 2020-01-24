import React from "react";

import SectionHues from "../global/SectionHues";

const Testimonial = props => {
  return (
    <section style={{ backgroundColor: props.colorChange["Section color"] }} className="test">
      <div className="container">
        <div className="test-container-global">
          <div className="test-wrapper">
            <div style={{ borderColor: props.colorChange["Border color"] }} className="test-main">
              <div className="test-svg-container">
                <svg
                  width="105"
                  height="39"
                  viewBox="0 0 105 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.9001 16.4506V27.0001H47.3461V16.4506H50.8757V13.0576H39.3901V16.4506H42.9001ZM53.1048 21.2476C53.1048 25.2256 55.4058 27.2536 59.4813 27.2536C63.3813 27.2536 65.8773 25.4011 65.8773 21.2086V13.0576H61.4313V21.0526C61.4313 22.8856 61.0413 23.7826 59.4813 23.7826C57.9018 23.7826 57.5118 22.8856 57.5118 21.0721V13.0576H53.1048V21.2476ZM68.9652 27.0001V13.0576H74.5227C78.5397 13.0576 80.2558 14.8516 80.2558 17.8351V17.9131C80.2558 20.8186 78.3252 22.4566 74.7177 22.4566H73.3722V27.0001H68.9652ZM74.2884 19.4926H73.3719V16.3531H74.3079C75.4584 16.3531 76.0629 16.7821 76.0629 17.8546V17.9326C76.0629 18.9661 75.4584 19.4926 74.2884 19.4926ZM82.5632 27.0001V13.0576H86.9897V23.5876H92.0597V27.0001H82.5632ZM94.562 13.0576V27.0001H104.78V23.6071H98.969V21.5206H103.337V18.4201H98.969V16.4506H104.468V13.0576H94.562Z"
                    fill={props.colorChange["Icon color"]}
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99991 31.5584L21.9999 36.2251V10.2747L7.99991 14.9414V31.5584ZM5.99991 13.4999V32.9999L23.9999 38.9999V7.49989L5.99991 13.4999Z"
                    fill={props.colorChange["Icon color"]}
                  />
                  <path
                    d="M0 6.00001L18 0V31.5L0 25.5V6.00001Z"
                    fill={props.colorChange["Icon color"]}
                  />
                </svg>
              </div>
              <div className="test-container">
                <p style={{ color: props.colorChange["Text color"] }} className="test-desc">
                  Morbi aliquet molestie montes, ipsum arcu nibh. Integer tortor, elit tristique
                  est. Egestas nullam condimentum nisl, quis cursus sapien commodo. Volutpat tempor,
                  eget tellus vulputate. Sed imperdiet eget nec lectus.
                </p>
                <div className="test-inner">
                  <span style={{ color: props.colorChange["Text color"] }} className="test-name">
                    Judith Black
                  </span>
                  <span
                    style={{ color: props.colorChange["Text accent color"] }}
                    className="test-position"
                  >
                    CEO, Tuple
                  </span>
                </div>
              </div>
            </div>
            <div className="test-main">
              <div className="test-svg-container">
                <svg
                  width="180"
                  height="30"
                  viewBox="0 0 180 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M59.2672 26.6415H62.9852L66.0874 15.7007L69.2134 26.6415H72.9314L77.573 10.0645H74.1391L70.9658 22.3552L67.4847 10.0645H64.6902L61.2327 22.3552L58.0594 10.0645H54.6256L59.2672 26.6415Z"
                    fill={props.colorChange["Icon color"]}
                  />
                  <path
                    d="M83.5514 26.9731C87.0326 26.9731 89.827 24.2497 89.827 20.7212C89.827 17.1926 87.0326 14.4693 83.5514 14.4693C80.0702 14.4693 77.2995 17.1926 77.2995 20.7212C77.2995 24.2497 80.0702 26.9731 83.5514 26.9731ZM83.5514 23.9892C81.7516 23.9892 80.3544 22.6394 80.3544 20.7212C80.3544 18.803 81.7516 17.4531 83.5514 17.4531C85.3749 17.4531 86.7721 18.803 86.7721 20.7212C86.7721 22.6394 85.3749 23.9892 83.5514 23.9892Z"
                    fill={props.colorChange["Icon color"]}
                  />
                  <path
                    d="M95.031 16.8374V14.8008H91.9761V26.6415H95.031V20.9817C95.031 18.4951 97.0439 17.7847 98.6306 17.9741V14.564C97.1387 14.564 95.6467 15.2271 95.031 16.8374Z"
                    fill={props.colorChange["Icon color"]}
                  />
                  <path
                    d="M111.334 26.6415L106.432 20.6501L111.192 14.8008H107.545L103.472 20.0107V10.0645H100.417V26.6415H103.472V21.2659L107.782 26.6415H111.334Z"
                    fill={props.colorChange["Icon color"]}
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M42.3417 11.4503L34.7457 7.06463V27.436H43.6261V29.4095H0.210067V27.436H4.15699V14.8855L0.478633 15.8051L0 13.8905L20.8092 8.68825H23.8903C23.5503 9.49482 23.3243 10.3453 23.2191 11.2129L22.7433 15.1351L27.8385 12.1933V27.436H32.7722V7.06583L25.1781 11.4505C25.3968 9.64708 26.2746 7.94175 27.7094 6.71472H23.645C24.995 4.91724 27.1448 3.75454 29.5663 3.75454C29.7802 3.75454 29.9932 3.76369 30.2023 3.78164L24.6847 0.59585C26.7526 -0.285725 29.1953 -0.217911 31.2921 0.992734C32.3174 1.58451 33.148 2.38466 33.7599 3.30875C34.3718 2.38466 35.2014 1.58451 36.2267 0.992734C38.3235 -0.217911 40.7672 -0.285725 42.8351 0.59585L37.3166 3.78164C37.5266 3.76369 37.7396 3.75454 37.9545 3.75454C40.375 3.75454 42.5248 4.91724 43.8748 6.71472H39.8094C41.2452 7.94175 42.123 9.64708 42.3417 11.4503ZM23.8916 17.5687H17.9713V27.436H23.8916V17.5687ZM13.0376 19.5421C13.0376 20.632 12.154 21.5156 11.0641 21.5156C9.9742 21.5156 9.09066 20.632 9.09066 19.5421C9.09066 18.4522 9.9742 17.5687 11.0641 17.5687C12.154 17.5687 13.0376 18.4522 13.0376 19.5421Z"
                    fill={props.colorChange["Icon color"]}
                  />
                  <path
                    d="M118.495 26.9732C120.816 26.9732 122.829 25.7418 123.847 23.8946L121.195 22.379C120.721 23.3499 119.703 23.942 118.472 23.942C116.648 23.942 115.298 22.5921 115.298 20.7213C115.298 18.8268 116.648 17.4769 118.472 17.4769C119.679 17.4769 120.698 18.0927 121.171 19.0636L123.8 17.5243C122.829 15.7008 120.816 14.4694 118.495 14.4694C114.896 14.4694 112.243 17.1928 112.243 20.7213C112.243 24.2498 114.896 26.9732 118.495 26.9732Z"
                    fill={props.colorChange["Icon color"]}
                  />
                  <path
                    d="M134.277 14.8009V16.1981C133.424 15.1325 132.146 14.4694 130.417 14.4694C127.267 14.4694 124.662 17.1928 124.662 20.7213C124.662 24.2498 127.267 26.9732 130.417 26.9732C132.146 26.9732 133.424 26.3101 134.277 25.2445V26.6417H137.332V14.8009H134.277ZM130.985 24.0604C129.114 24.0604 127.717 22.7105 127.717 20.7213C127.717 18.7321 129.114 17.3822 130.985 17.3822C132.88 17.3822 134.277 18.7321 134.277 20.7213C134.277 22.7105 132.88 24.0604 130.985 24.0604Z"
                    fill={props.colorChange["Icon color"]}
                  />
                  <path
                    d="M146.875 17.7374V14.8009H144.199V11.4855L141.144 12.4091V14.8009H139.084V17.7374H141.144V22.6632C141.144 25.8602 142.589 27.1153 146.875 26.6417V23.8709C145.123 23.9657 144.199 23.942 144.199 22.6632V17.7374H146.875Z"
                    fill={props.colorChange["Icon color"]}
                  />
                  <path
                    d="M150.544 13.38C151.586 13.38 152.439 12.5275 152.439 11.5092C152.439 10.4909 151.586 9.61469 150.544 9.61469C149.526 9.61469 148.674 10.4909 148.674 11.5092C148.674 12.5275 149.526 13.38 150.544 13.38ZM149.029 26.6417H152.084V14.8009H149.029V26.6417Z"
                    fill={props.colorChange["Icon color"]}
                  />
                  <path
                    d="M160.516 26.9732C163.997 26.9732 166.792 24.2498 166.792 20.7213C166.792 17.1928 163.997 14.4694 160.516 14.4694C157.035 14.4694 154.264 17.1928 154.264 20.7213C154.264 24.2498 157.035 26.9732 160.516 26.9732ZM160.516 23.9893C158.716 23.9893 157.319 22.6395 157.319 20.7213C157.319 18.8031 158.716 17.4533 160.516 17.4533C162.34 17.4533 163.737 18.8031 163.737 20.7213C163.737 22.6395 162.34 23.9893 160.516 23.9893Z"
                    fill={props.colorChange["Icon color"]}
                  />
                  <path
                    d="M175.524 14.4694C173.938 14.4694 172.706 15.0614 171.996 16.1271V14.8009H168.941V26.6417H171.996V20.2477C171.996 18.1874 173.109 17.3112 174.601 17.3112C175.974 17.3112 176.945 18.14 176.945 19.7504V26.6417H180V19.3715C180 16.2218 178.034 14.4694 175.524 14.4694Z"
                    fill={props.colorChange["Icon color"]}
                  />
                </svg>
              </div>
              <div className="test-container">
                <p style={{ color: props.colorChange["Text color"] }} className="test-desc">
                  Morbi aliquet molestie montes, ipsum arcu nibh. Integer tortor, elit tristique
                  est. Egestas nullam condimentum nisl, quis cursus sapien commodo. Volutpat tempor,
                  eget tellus vulputate. Sed imperdiet eget nec lectus.
                </p>
                <div className="test-inner">
                  <span style={{ color: props.colorChange["Text color"] }} className="test-name">
                    Tiffany Bright
                  </span>
                  <span
                    style={{ color: props.colorChange["Text accent color"] }}
                    className="test-position"
                  >
                    Project Manager, Workcation
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SectionHues huesOpen={props.huesOpen} colorChange={props.colorChange} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
