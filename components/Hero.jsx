import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBracesFill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiBriefcase2Fill,
} from "react-icons/ri";

// import DevImg from "./DevImg";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge2 from "./Badge2";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Software Engineer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Charrell Sherman</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              {" "}
              Passion for education and a strong dedication to delivering
              projects that make a societal impact. Skilled in modern web
              technologies and frameworks with a focus on enhancing user-centric
              mobile and web applications. Proven ability to improve code
              quality, reduce technical debt, and effectively collaborate
              cross-functionally with product owners, engineers, UX/UI and QA to
              define, design, and new features.
            </p>
            {/* button */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                {/* ERROR */}
                <Button className="gap-x-2 w-[162px] xl:w-auto">
                  Contact me
                  <Send size={18} />
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
          {/* icons */}
          <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
            <RiArrowDownSLine className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
