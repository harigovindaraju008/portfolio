import React from "react";

export default function Welcome() {
  return (
    <div className="welcomePage">
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
          <img src="images/hari.jpg" alt="err" />
        </div>
      </div>
    </div>
  );
}
