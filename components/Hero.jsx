// import Link from "next/link";
// import { Button } from "./ui/button";
// import { Download, Send } from "lucide-react";

import {
  RiBracesFill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// import DevImg from "./DevImg";
// import Badge from "./Badge2";
// import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div>
            <div>Software Engineer</div>
            <h1 className="h1">Hello, my name is Charrell Sherman</h1>
            <p>
              {" "}
              Passion for education and a strong dedication to delivering
              projects that make a societal impact. Skilled in modern web
              technologies and frameworks with a focus on enhancing user-centric
              mobile and web applications. Proven ability to improve code
              quality, reduce technical debt, and effectively collaborate
              cross-functionally with product owners, engineers, UX/UI and QA to
              define, design, and new features.
            </p>
            {/* image */}
            <div>image</div>
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
