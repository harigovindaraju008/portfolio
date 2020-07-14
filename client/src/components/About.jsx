import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function About() {
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, []);

  const [loader, setloader] = useState(true);
  return loader ? (
    <Preloader />
  ) : (
    <div className="about">
      <div className="about--heading">
        <div className="about--primary">About</div>
        <div className="about--sub">
          I am a Full Stack developer with industry experience building websites
          and web applications. I specialize in JavaScript and have professional
          experience working with React.js and Node.js. I also have experience
          working with Flutter
        </div>
      </div>

      <div className="about--skills">
        <div className="about--image">
          <img src="images/about.svg" alt="about_me" />
        </div>
        <div className="about--skills__catagory">
          <div className="skill">
            <div className="html"></div>
            <div className="skill--box">
              <div className="skill--title">HTML/CSS</div>
            </div>
          </div>
          <div className="skill ">
            <div className="js"></div>
            <div className="skill--box">
              <div className="skill--title">JS</div>
            </div>
          </div>
          <div className="skill ">
            <div className="reactjs"></div>
            <div className="skill--box">
              <div className="skill--title">ReactJS</div>
            </div>
          </div>
          <div className="skill ">
            <div className="nextjs"></div>
            <div className="skill--box">
              <div className="skill--title">NextJS</div>
            </div>
          </div>
          <div className="skill ">
            <div className="reduxjs"></div>
            <div className="skill--box">
              <div className="skill--title">ReduxJS</div>
            </div>
          </div>
          <div className="skill ">
            <div className="flutter"></div>
            <div className="skill--box">
              <div className="skill--title">Flutter</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
