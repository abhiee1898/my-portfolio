"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import projectData from "@/data/data.json";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}

const ProjectsPage: React.FC = () => {
  const projects: Project[] = projectData.projects;

  return (
    <div className="min-h-screen relative bg-gray-900 py-12 pt-40 overflow-hidden">

      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-sans font-bold text-white">
          My <span className="text-emerald-400">Projects</span>
        </h1>
        <p className="text-lg sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-300 mt-6">
          Take a look at some of my recent projects that showcase my skills.
        </p>
      </div>

      <div className="flex flex-wrap justify-center relative z-10">
        {projects.map((project) => (
          <CardContainer className="inter-var m-4" key={project.id}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-lg md:text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm md:text-base max-w-sm mt-2 dark:text-neutral-300 text-justify"
              >
                {project.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.image}
                  height="1000"
                  width="1000"
                  className="w-full h-60 object-contain rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>

              <div className="flex justify-between items-center mt-10 md:mt-16">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 flex items-center rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <BsGithub className="mr-2" /> GitHub
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href={project.demo}
                  target="_blank"
                  className="px-4 py-2 flex items-center rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <CgWebsite className="mr-2" /> Demo
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
