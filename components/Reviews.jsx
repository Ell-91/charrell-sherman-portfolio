"use client";

import Image from "next/image";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const reviewData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Technical Ownership",
    review:
      "Every line of code is a chance to learn and innovate. I approach each project as a learning canvas, taking full ownership from concept to completion and seeing challenges as opportunities for technical growth",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Code Quality & Craftsmanship",
    review:
      " I treat each codebase as a living ecosystem, prioritizing clean, well-structured code that is maintainable and documented. My approach isn't just about solving today's problems but creating flexible foundations that adapt to future challenges.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Continuous Learning",
    review:
      "My technical journey is an endless curiosity-driven expedition. Emerging technologies aren't just tools to me, they're invitations to learn, adapt, and continuously redefine what's possible in software development.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Impact- Driven",
    review:
      "Dedicated to creating solutions that deliver meaningful value by deeply understanding user needs and measuring success through tangible outcomes. I  want to ensure that every project I undertake makes a lasting, positive difference.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "User-Centric Approach",
    review:
      "Beyond aesthetics and functionality, the heart of great software lies in delivering an exceptional user experience. I strive to create solutions that are intuitive, engaging, and centered around the needs of the people who use them.",
  },
];
const Reviews = ({ project }) => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">
          Values and Work Philosophy
        </h2>
        {/* sidebar */}
        <Swiper
          className="h-[350px]"
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {reviewData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center justify-center gap-x-4">
                      {/* name */}
                      <div className="flex flex-col items-center">
                        <CardTitle>{person.name}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
