import React, { useState } from "react";
import AnimatedLetters from "../../animation/AnimatedLetter";
import "./home.css";
import "../body.css";
import "animate.css";
import ProfilePictureUpDown from "./ProfilePictureUpDown";
function Home() {
  const [letterClass, setletterClass] = useState("text-animate");
  const [isHovering, setIsHovering] = useState(false);
  const nameArray = [" ", "R", "o", "v", "i", "c"];
  const HiArray = ["H", "i", ","];
  const IM = ["I", "'", "m"];
  const JobArr = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  function handleMouseEnter() {
    setIsHovering(true);
    setletterClass("text-animate-bounce");
  }

  function handleMouseLeave() {
    setIsHovering(false);
    setletterClass("text-animate-bounce");
  }

  return (
    <div id="home" className="relative mt-[14vh]">
      <div className="max-w-7xl h-full mx-auto flex justify-between max-md:justify-center gap-3 items-center my-5 py-20 px-8 max-md:gap-8 max-md:flex-wrap relative">
        <div className="p-6 flex flex-col items-start">
          <h1 className="h1-html font-extrabold text-5xl max-lg:text-4xl max-sm:text-4xl mb-10 leading-snug text-white opacity-90 relative">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={HiArray}
              idx={5}
              isHovering={isHovering}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={IM}
              idx={8}
              isHovering={isHovering}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={11}
              isHovering={isHovering}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={JobArr}
              idx={17}
              isHovering={isHovering}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </h1>
          <h2 className="p-html relative text-blue-500 font-semibold text-xl mb-7">
            I Like React/Javascript
          </h2>
          <a
            href=""
            className="btn-home border border-blue-500 px-4 py-2 rounded-md text-white opacity-90"
          >
            CONTACT ME
          </a>
        </div>
        <ProfilePictureUpDown />
      </div>
    </div>
  );
}

export default Home;
