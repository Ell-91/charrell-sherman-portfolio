"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "Django",
    name: "DevSearch",
    description:
      "Developer collaboration platform connecting developers with unfinished or in-progress projects. Built an authentication system and RESTful API using Django to manage frontend and backend.",
    github: "https://github.com/Ell-91/devSearch",
  },
  {
    image: "/work/4.png",
    category: "React",
    name: "Finanseer",
    description:
      "Created a full-stack web application and dashboard that provides advanced financial insights and predictive analytics, enabling stakeholders to monitor KPIs and make informed decisions.",
    github: "https://github.com/Ell-91/FinanceDashboard",
  },
  {
    image: "/work/2.png",
    category: "React Native",
    name: "ChatApp",
    description:
      "Developed a full-stack mobile messaging application for iOS and Android, replicating core WhatsApp functionalities, with features like real-time messaging, secure authentication, and group chat.",
    github: "https://github.com/Ell-91/ChatApp",
  },
  {
    image: "/work/1.png",
    category: "Full Stack",
    name: "Pen to Print",
    description:
      "converting handwritten forms to digital text, improving document accessibility and usability for both doctors and patients.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "React",
    name: "My Portfolio Website",
    description:
      "Created my portfolio website to showcase my projects, qualifications, values, and philosophy, with a contact form for easy connection",
    github: "https://github.com/Ell-91/charrell-sherman-portfolio",
  },
  {
    image: "/work/4.png",
    category: "Django",
    name: "BandFinder",
    description:
      "BandFinder helps you create bands, find members, and book local talent, making it easy to connect musicians on one platform.",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  // if category is 'all projects' return all projects, else filter by category
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="m-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] 
          mb-12 mx-auto md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
