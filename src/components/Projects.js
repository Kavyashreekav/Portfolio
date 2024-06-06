import React from "react";
import websiteImg1 from "../assets/ecommerce-websites.jpg";
// import websiteImg2 from "../assets/food-ecommerce.jpg";

const Projects = () => {
  const config = {
    projects: [
      {
        image: websiteImg1,
        description: "A Ecommerce Website built with React js and FireBase",
        link: "https://react-and-firebase-ecommerce.vercel.app/",
      },
      // ,
      // {
      //   image: websiteImg2,
      //   description: "A Ecommerce Website built with React js and FireBase",
      //   link: "",
      // },
    ],
  };

  return (
    <section
      className="flex flex-col py-20 px-5 justify-center bg-primary text-white"
      id="projects"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl  border-b-4 border-[#2b2d77] mb-5 w-[170px] font-bold">
            PROJECTS
          </h1>
          <p>
            These are my best projects. I have built using React js and Mern.
            Check them out.
          </p>
        </div>
      </div>
      <div className="w-3/4">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project) => (
            <a href={project.link}>
              <div className="relative">
                <img className="h-[200px] w-[500px]" src={project.image} />
                <div className="project-desc">
                  <p className="text-center px-5 py-5 ">
                    {project.description}
                  </p>
                  <div className="flex justify-center">
                    <a className="btn" target="_blank" href={project.link}>
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
