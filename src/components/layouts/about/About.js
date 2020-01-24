import React from "react";

import SectionHues from "../global/SectionHues";

const About = props => {
  return (
    <section
      style={{ backgroundColor: props.colorChange["Section color"] }}
      className="about-container"
    >
      <div className="container">
        <div className="about-container-wrapper">
          <div className="about-container-inner">
            <svg
              width="45"
              height="60"
              viewBox="0 0 45 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 0H45L30 60H0L15 0Z" fill={props.colorChange["Icon background color"]} />
              <path
                d="M29 24C29 24.5523 29.4477 25 30 25C30.5523 25 31 24.5523 31 24H29ZM10 37C10.5523 37 11 36.5523 11 36C11 35.4477 10.5523 35 10 35V37ZM14 25H34V23H14V25ZM37 28V40H39V28H37ZM34 43H14V45H34V43ZM11 40V28H9V40H11ZM14 43C12.3431 43 11 41.6569 11 40H9C9 42.7614 11.2386 45 14 45V43ZM37 40C37 41.6569 35.6569 43 34 43V45C36.7614 45 39 42.7614 39 40H37ZM34 25C35.6569 25 37 26.3431 37 28H39C39 25.2386 36.7614 23 34 23V25ZM14 23C11.2386 23 9 25.2386 9 28H11C11 26.3431 12.3431 25 14 25V23ZM6 17H26V15H6V17ZM3 32V20H1V32H3ZM6 35C4.34315 35 3 33.6569 3 32H1C1 34.7614 3.23858 37 6 37V35ZM26 17C27.6569 17 29 18.3431 29 20H31C31 17.2386 28.7614 15 26 15V17ZM6 15C3.23858 15 1 17.2386 1 20H3C3 18.3431 4.34315 17 6 17V15ZM29 20V24H31V20H29ZM10 35H6V37H10V35ZM27 34C27 35.6569 25.6569 37 24 37V39C26.7614 39 29 36.7614 29 34H27ZM24 37C22.3431 37 21 35.6569 21 34H19C19 36.7614 21.2386 39 24 39V37ZM21 34C21 32.3431 22.3431 31 24 31V29C21.2386 29 19 31.2386 19 34H21ZM24 31C25.6569 31 27 32.3431 27 34H29C29 31.2386 26.7614 29 24 29V31Z"
                fill={props.colorChange["Icon color"]}
              />
            </svg>
            <h3 style={{ color: props.colorChange["Heading color"] }} className="about-title">
              Get cash quicker
            </h3>
            <p style={{ color: props.colorChange["Text color"] }} className="about-desc">
              Tincidunt egestas sit viverra in tincidunt morbi elit ultricies vel. Adipiscing nibh
              posuere aliquam sed iaculis sed facilisis vulputate convallis.
            </p>
          </div>
          <div className="about-container-inner">
            <svg
              width="45"
              height="60"
              viewBox="0 0 45 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 0H45L30 60H0L15 0Z" fill={props.colorChange["Icon background color"]} />
              <path
                d="M14 44V32C14 29.7909 12.2091 28 10 28H6C3.79086 28 2 29.7909 2 32V44C2 46.2091 3.79086 48 6 48H10C12.2091 48 14 46.2091 14 44ZM14 44V24C14 21.7909 15.7909 20 18 20H22C24.2091 20 26 21.7909 26 24V44M14 44C14 46.2091 15.7909 48 18 48H22C24.2091 48 26 46.2091 26 44M26 44V16C26 13.7909 27.7909 12 30 12H34C36.2091 12 38 13.7909 38 16V44C38 46.2091 36.2091 48 34 48H30C27.7909 48 26 46.2091 26 44Z"
                stroke={props.colorChange["Icon color"]}
                strokeWidth="2"
              />
            </svg>

            <h3 style={{ color: props.colorChange["Heading color"] }} className="about-title">
              Make better choices for your business
            </h3>
            <p style={{ color: props.colorChange["Text color"] }} className="about-desc">
              Donec nisl libero nulla sit at orci, placerat. Vitae consectetur molestie eget
              placerat. Vitae et proin amet nulla nisl.
            </p>
          </div>
          <div className="about-container-inner">
            <svg
              width="45"
              height="60"
              viewBox="0 0 45 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 0H45L30 60H0L15 0Z" fill={props.colorChange["Icon background color"]} />
              <path
                d="M37.2358 14.08L38.2039 13.8294C38.0849 13.3698 37.6593 13.0572 37.1851 13.0813L37.2358 14.08ZM19.9999 8L20.6668 7.25487C20.2871 6.91505 19.7126 6.91504 19.333 7.25486L19.9999 8ZM2.76426 14.0798L2.81491 13.081C2.3408 13.057 1.91512 13.3696 1.79616 13.8292L2.76426 14.0798ZM20 43.3552L19.7507 44.3237C19.9143 44.3658 20.0858 44.3658 20.2493 44.3237L20 43.3552ZM14.7071 25.4042C14.3166 25.0137 13.6834 25.0137 13.2929 25.4042C12.9024 25.7948 12.9024 26.4279 13.2929 26.8185L14.7071 25.4042ZM18 30.1114L17.2929 30.8185C17.6834 31.209 18.3166 31.209 18.7071 30.8185L18 30.1114ZM26.7071 22.8185C27.0976 22.4279 27.0976 21.7948 26.7071 21.4042C26.3166 21.0137 25.6834 21.0137 25.2929 21.4042L26.7071 22.8185ZM37.1851 13.0813C36.7927 13.1012 36.3976 13.1113 36 13.1113V15.1113C36.4314 15.1113 36.8603 15.1003 37.2865 15.0787L37.1851 13.0813ZM36 13.1113C30.1086 13.1113 24.7366 10.8975 20.6668 7.25487L19.3329 8.74513C23.7553 12.7033 29.5976 15.1113 36 15.1113V13.1113ZM19.333 7.25486C15.2632 10.8974 9.89129 13.111 4 13.111V15.111C10.4022 15.111 16.2445 12.7031 20.6668 8.74514L19.333 7.25486ZM4 13.111C3.60245 13.111 3.20734 13.101 2.81491 13.081L2.7136 15.0785C3.13976 15.1001 3.56865 15.111 4 15.111V13.111ZM1.79616 13.8292C1.27631 15.8376 1 17.9429 1 20.1114H3C3 18.1134 3.25451 16.1764 3.73235 14.3303L1.79616 13.8292ZM1 20.1114C1 31.7617 8.96829 41.5485 19.7507 44.3237L20.2493 42.3868C10.329 39.8335 3 30.8271 3 20.1114H1ZM20.2493 44.3237C31.0317 41.5485 39 31.7617 39 20.1114H37C37 30.8271 29.671 39.8335 19.7507 42.3868L20.2493 44.3237ZM39 20.1114C39 17.943 38.7237 15.8377 38.2039 13.8294L36.2677 14.3306C36.7455 16.1766 37 18.1135 37 20.1114H39ZM13.2929 26.8185L17.2929 30.8185L18.7071 29.4042L14.7071 25.4042L13.2929 26.8185ZM18.7071 30.8185L26.7071 22.8185L25.2929 21.4042L17.2929 29.4042L18.7071 30.8185Z"
                fill={props.colorChange["Icon color"]}
              />
            </svg>

            <h3 style={{ color: props.colorChange["Heading color"] }} className="about-title">
              Security first
            </h3>
            <p style={{ color: props.colorChange["Text color"] }} className="about-desc">
              Nunc, porttitor vulputate feugiat elementum. Dignissim nullam in netus sem rhoncus
              natoque egestas tincidunt.
            </p>
          </div>
        </div>

        <SectionHues huesOpen={props.huesOpen} colorChange={props.colorChange} />
      </div>
    </section>
  );
};

export default About;
