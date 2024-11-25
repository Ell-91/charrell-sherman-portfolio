"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/projects/devSearchPhotos.png",
    imageSize: { width: 400, height: 300 }, // Add image dimensions
    category: "Django",
    category2: "Fullstack",
    name: "DevSearch",
    description:
      "Developer collaboration platform connecting developers with unfinished or in-progress projects. Built an authentication system and RESTful API using Django to manage frontend and backend.",
    github: "https://github.com/Ell-91/devSearch",
  },
  {
    image: "/projects/dashboardPhotos.png",
    imageSize: { width: 400, height: 300 }, // Add image dimensions
    category: "React",
    category2: "Fullstack",
    name: "Financier",
    description:
      "Created a full-stack web application and dashboard that provides advanced financial insights and predictive analytics, enabling stakeholders to monitor KPIs and make informed decisions.",
    github: "https://github.com/Ell-91/FinanceDashboard",
  },
  {
    image: "/projects/chatPhotos.png",
    imageSize: { width: 400, height: 300 }, // Add image dimensions
    category: "React Native",
    category2: "Fullstack",
    name: "ChatApp",
    description:
      "Developed a full-stack mobile messaging application for iOS and Android, replicating core WhatsApp functionalities, with features like real-time messaging, secure authentication, and group chat.",
    github: "https://github.com/Ell-91/ChatApp",
  },
  {
    image: "/ui_photos/Landing.png",
    imageSize: { width: 400, height: 300 }, // Add image dimensions
    category: "React",
    category2: "Fullstack",
    name: "My Portfolio Website",
    description:
      "Created my portfolio website to showcase my projects, qualifications, values, and philosophy, with a contact form for easy connection",
    github: "https://github.com/Ell-91/charrell-sherman-portfolio",
  },
];

// Get unique categories from both category and category2
const uniqueCategories = [
  "all projects",
  ...new Set([
    ...projectData.map((item) => item.category),
    ...projectData.map((item) => item.category2),
  ]),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  // Updated filter to check both category and category2
  const filteredProjects = projectData.filter((project) => {
    if (category === "all projects") return true;
    return project.category === category || project.category2 === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((cat, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(cat)}
                  value={cat}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {cat}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard
                    project={project}
                    // Pass image dimensions to ProjectCard
                    imageWidth={project.imageSize.width}
                    imageHeight={project.imageSize.height}
                  />
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
