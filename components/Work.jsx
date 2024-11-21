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
    image: "/work/3.png",
    category: "Django",
    name: "DevSearch",
    description:
      "Built a platform for developers to collaborate on unfinished and ‘in-progress’ projects. Implemented an authentication system and RESTful API using Django libraries to manage both frontend and backend.",
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
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
        {/* sidebar */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 ">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slide  */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
