import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faIdBadge,
  faEye,
  faHeading,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      {/* 
/home
/about
/contact
/projects
*/}
      <div className="nav-logo">
        <span>
          <p>
            <FontAwesomeIcon icon={faHeading} size="3x" />
          </p>
        </span>
      </div>

      <div className="nav-collection">
        <span>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="3x" />
          </Link>
        </span>
        <span>
          <Link to="about">
            <FontAwesomeIcon icon={faAddressCard} size="3x" />
          </Link>
        </span>

        <span>
          <Link to="projects">
            <FontAwesomeIcon icon={faEye} size="3x" />
          </Link>
        </span>
        <span>
          <Link to="contact">
            <FontAwesomeIcon icon={faIdBadge} size="3x" />
          </Link>
        </span>
      </div>

      <div className="social-links">
        <span>
          <a href="https://www.linkedin.com/in/hariharan20121999/">
            <i className="fa fa-linkedin fa-3x"></i>
          </a>
        </span>
        <span>
          <a href="https://twitter.com/crazyharan">
            <i className="fa fa-twitter fa-3x"></i>
          </a>
        </span>
        <span>
          <a href="https://github.com/harigovindaraju">
            <i className="fa fa-github fa-3x"></i>
          </a>
        </span>
        <span>
          <a href="https://codepen.io/hari_govindaraju">
            <i className="fa fa-codepen fa-3x"></i>
          </a>
        </span>
      </div>
    </div>
  );
}
