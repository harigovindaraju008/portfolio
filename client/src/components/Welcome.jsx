import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

export default function Welcome() {
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <motion.div layoutTransition={spring} className="welcomePage">
      <div className="logo">
        <span className="left">{"<"}</span>HARIHARAN
        <span className="right">{"/>"}</span>
        <div className="text">
          <span className="word">Full Stack </span>
          <span className="web">Developer</span>
        </div>
      </div>
      <div className="rapper">
        <div className="btn-group">
          <a
            className="btn btn--animated"
            href="./resume/hariharan.pdf"
            download
          >
            Resume
          </a>
          <a className="btn btn--animated" href="#contact">
            Get touch
          </a>
        </div>
        <div className="profile_pic">
          <LazyLoadImage
            src="images/hari.jpg"
            alt="hari govindaraju"
            effect="blur"
            delayTime={7000}
          />
          {/* <img src="images/hari.jpg" alt="err" /> */}
        </div>
      </div>
    </motion.div>
  );
}
