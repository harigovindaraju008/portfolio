import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p>CONNECT WITH ME</p>
      <div className="social-links">
        <span>
          <a href="https://www.linkedin.com/in/bradleyengelhardt">
            <i className="fa fa-linkedin fa-3x"></i>
          </a>
        </span>
        <span>
          <a href="https://twitter.com/bradengelhardt">
            <i className="fa fa-twitter fa-3x"></i>
          </a>
        </span>
        <span>
          <a href="https://github.com/SquishyAndroid">
            <i className="fa fa-github fa-3x"></i>
          </a>
        </span>
        <span>
          <a href="https://codepen.io/SquishyAndroid/pens/public/">
            <i className="fa fa-codepen fa-3x"></i>
          </a>
        </span>
      </div>
    </div>
  );
}
