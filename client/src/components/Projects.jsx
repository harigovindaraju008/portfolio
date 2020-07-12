import React, { useEffect } from "react";
import Sideshow from "./Sideshow";

export default function Projects() {
  const images = [
    // "https://yeehaw.s3.amazonaws.com/space/pexels-photo-1274260.jpeg",
    // "https://yeehaw.s3.amazonaws.com/space/pexels-photo-1624438.jpeg",
    "images/project1.png",
    "images/project2.png",
    // "https://yeehaw.s3.amazonaws.com/space/pexels-photo-220201.jpeg",
    // "https://yeehaw.s3.amazonaws.com/space/pexels-photo-796206.jpeg",
    // "https://yeehaw.s3.amazonaws.com/space/pexels-photo-924824.jpeg",
  ];
  useEffect(() => {
    images.forEach((src) => (new Image().src = src));
  }, []);

  return (
    <div className="projects">
      <div className="project--heading">My Projects</div>
      <Sideshow imgs={images} />
    </div>
  );
}
