import React from "react";
import Kusa from "./Kusa";
import Gym from "./Gym";
import Dashboard from "./Dashboard";

const Projects = () => {
  return (
    <section id="projects" className="min-h-[30vh] py-10">
      <div className="w-5/6 mx-auto">
        <div>
          <p className="text-xl pt-10 lg:pt-5 md:text-2xl font-semibold text-center">
            Projects
          </p>
        </div>

        <div className="aboutUnderline mx-auto my-1"></div>
        <div className="mt-8  text-sm font-semibold">
          <p>Here are some of the projects I have worked on with different technologies gaining vast experience:</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 py-6">
          <div>
            <Kusa />
          </div>
          <div>
            <Gym />
          </div>
          <div>
            <Dashboard/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
