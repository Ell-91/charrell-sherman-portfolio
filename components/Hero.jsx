"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import { RiArrowDownSLine, RiBriefcase2Fill } from "react-icons/ri";

// import DevImg from "./DevImg";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge2 from "./Badge2";

const Hero = () => {
  return (
    <section className="py-8 xl:py-16 h-[84vh] xl:pt-20 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none relative">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left text-4xl sm:text-5xl lg:text-7xl">
            <span className="text-primary">Hello, I`m Charrell </span>

            <TypeAnimation
              sequence={["Software Engineer", 1000, "Mobile Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-extrabold text-[#32334c] mb-4"
            />
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Passion for education and a strong dedication to delivering
              projects that make a societal impact. Skilled in modern web
              technologies and frameworks with a focus on enhancing user-centric
              mobile and web applications. Proven ability to improve code
              quality, reduce technical debt, and effectively collaborate
              cross-functionally with product owners, engineers, UX/UI and QA to
              define, design, and new features.
            </p>
            {/* button container */}
            <div className="flex flex-col space-y-8">
              {/* button */}
              <div className="flex flex-row gap-4 justify-center xl:justify-start mt-4 text-base">
                <Link href="/contact">
                  {/* ERROR */}
                  <Button className="gap-x-2 w-[162px] xl:w-auto">
                    Contact me
                    <Send size={20} />
                  </Button>
                </Link>
                <Button
                  variant="secondary"
                  className="gap-x-2 w-[162px] xl:w-auto"
                >
                  Download Resume
                  <Download size={20} />
                </Button>
              </div>
              {/* socials */}
              <Socials
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
              />
            </div>
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge */}
            <Badge2
              containerStyles="absolute top-[18%] -left-[7rem]"
              icon={<RiBriefcase2Fill />}
              endCountNum={2}
              badgeText="Years Of Experience"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg containerStyles="bg-hero_shape2_dark w-[510px] h-[462px] bg-no-repeat relative bg-bottom" />
          </div>
        </div>
      </div>
      {/* icons */}
      <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  );
};

export default Hero;
