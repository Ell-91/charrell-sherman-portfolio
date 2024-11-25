import DevImg from "./DevImg";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { Fragment } from "react";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Charrell Sherman",
  },
  {
    icon: <MailIcon size={20} />,
    text: "shermancharrell@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Calendly Link",
    link: "https://calendly.com/shermancharrell",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "BS in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Washington DC  / Open to Relocate",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        University: "University of california, Davis",
        qualification: "Computer Science, BS",
        years: "2021",
      },
    ],
  },
  {
    title: "Professional Experience",
    data: [
      {
        company: "General Motors",
        role: "Software Engineer",
        years: "May 2022 - Jan 2024",
      },
      {
        company: "Mission Bit",
        role: "Assistant Instructor",
        years: "May 2018 - Aug 2018",
      },
      {
        company: "Sacramento City College",
        role: "Computer Science Tutor",
        years: "Sept 2017 - May 2018",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Languages: JavaScript · TypeScript · HTML · CSS · Python · C++",
      },
      {
        name: "Frameworks: React · Node.js · Express.js · Django · PostgreSQL · MongoDB",
      },
      {
        name: "Technologies: Git · Azure · Figma · Postman · AWS ",
      },
    ],
  },
  {
    title: "other skills",
    data: [
      {
        name: "Code Maintenance · Debugging & Research · Agile · Web Development · Unit Testing · Code Review",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    // "min-h-screen pb-12 xl:pb-24"
    <section className="min-h-screen pb-10 xl:pb-22">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <div>
              {/* image */}
              <DevImg containerStyles="bg-hero_shape2_dark w-[505px] h-[505px] bg-no-repeat relative bg-bottom" />
            </div>
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="skills">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Technical Skills
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Building Applications That Bring Ideas to Life
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      I enjoy building dynamic applications that bring ideas to
                      life, using modern tools and technologies to create
                      engaging user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            {item.link ? (
                              <Link
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                              >
                                {item.text}
                              </Link>
                            ) : (
                              <div>{item.text}</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience and education */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {
                              getData(
                                qualificationData,
                                "Professional Experience"
                              ).title
                            }
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(
                            qualificationData,
                            "Professional Experience"
                          ).data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -lefy-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text:xl leading:none mb-2">
                                    {company}
                                  </div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">
                                    {role}
                                  </div>
                                  <div className="text-base font-medium">
                                    {years}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={20} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -lefy-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text:xl leading:none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Professional Toolkit</h3>
                    <div className="mb-10">
                      <h4 className="text-xl font-semibold mb-2">
                        Technical Skills
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div className="w-full space-y-4">
                        {getData(skillData, "skills").data.map(
                          (item, index) => (
                            <div
                              key={index}
                              className="flex items-center whitespace-nowrap"
                            >
                              <div className="w-32">
                                {" "}
                                {/* Fixed width for alignment */}
                                {index === 0 && (
                                  <span className="font-bold">Languages:</span>
                                )}
                                {index === 1 && (
                                  <span className="font-bold">Frameworks:</span>
                                )}
                                {index === 2 && (
                                  <span className="font-bold">
                                    Technologies:
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center flex-wrap gap-2">
                                {item.name
                                  .split(":")[1]
                                  .split("·")
                                  .map((tech, techIndex, array) => (
                                    <Fragment key={techIndex}>
                                      <span>{tech.trim()}</span>
                                      {techIndex < array.length - 1 && (
                                        <span className="text-gray-400">·</span>
                                      )}
                                    </Fragment>
                                  ))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    {/* technical practices */}
                    <div className="mb-4">
                      {/* technical practices list */}
                      <div className="mb-10">
                        <h4 className="text-xl font-semibold mb-2 xl:text-left">
                          Technical Practices
                        </h4>
                        <div className="border-b border-border mb-4"></div>
                        <div className="w-full">
                          {getData(skillData, "other skills").data.map(
                            (item, index) => (
                              <div
                                key={index}
                                className="flex items-center whitespace-nowrap"
                              >
                                <div className="flex items-center flex-wrap gap-2">
                                  {item.name
                                    .split("·")
                                    .map((skill, skillIndex, array) => (
                                      <Fragment key={skillIndex}>
                                        <span>{skill.trim()}</span>
                                        {skillIndex < array.length - 1 && (
                                          <span className="text-gray-400">
                                            ·
                                          </span>
                                        )}
                                      </Fragment>
                                    ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    {/* tools */}
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
