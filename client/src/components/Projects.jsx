import React, { useEffect, useState } from "react";
import Preloader from "./Preloader";
import Sideshow from "./Sideshow";

export default function Projects() {
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, []);

  const [loader, setloader] = useState(true);
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

  return loader ? (
    <Preloader />
  ) : (
    <div className="projects">
      <div className="project--heading">My Projects</div>
      <Sideshow imgs={images} />
    </div>
  );
}
