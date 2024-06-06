import React from "react";
import HeroImg from "../assets/hero.png";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Hero = () => {
  const config = {
    subtitle: "Im a Frontend Web Developer",
    social: {
      linkedin: "https://www.linkedin.com/in/kavya-shree1/",
      github: "https://github.com/Kavyashreekav",
    },
  };

  return (
    <section className="flex flex-col md:flex-row px-5 py-20 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-6xl font-hero-font">
          Hi, <br /> Im Kavya shree
          <p className="text-3xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-10">
          <a
            target="_blank"
            href={config.social.linkedin}
            className="pr-5 hover:text-white"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            target="_blank"
            href={config.social.github}
            className="hover:text-white"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} />
    </section>
  );
};

export default Hero;
