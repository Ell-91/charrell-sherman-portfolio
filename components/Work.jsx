"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
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

const Work = () => {
  return (
    <div className="sm:p-4">
      <section className="relative pb-50 xl:pb-60">
        <div className="container mx-auto">
          {/* text */}
          <div
            className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left
         mb-12 xl:h-[400px] flex flex-col justify-center items-center 
         xl:items-start"
          >
            <h2 className="section-title mb-4">Latest Projects</h2>
            <p className="subtitle mb-8">
              Explore my latest projects showcasing full-stack and mobile app
              development with modern technologies and frameworks.
            </p>
            <Link href="/projects">
              <Button>All projects</Button>
            </Link>
          </div>
          {/* slider container */}
          <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
            <Swiper
              className="h-[580px] px-2 pb-20"
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
              }}
              spaceBetween={30}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
                type: "bullets",
                bulletActiveClass: "swiper-pagination-bullet-active",
                bulletClass: "swiper-pagination-bullet",
              }}
            >
              {/* show only the first 4 projects for the slide  */}
              {projectData.slice(0, 4).map((project, index) => {
                return (
                  <SwiperSlide key={index} className="py-4">
                    <ProjectCard project={project} />
                  </SwiperSlide>
                );
              })}
              <div className="swiper-pagination mt-8"></div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
