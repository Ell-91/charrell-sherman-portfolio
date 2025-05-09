import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const ProjectCard = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative h-[500px] flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl"
            src={project.image}
            width={475}
            height={475}
            alt={project.name}
            priority
          />
          {/* button Links */}
          <div className="flex gap-x-4">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <GitHubLogoIcon className="text-white" />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="flex-1 px-8 py-6 flex flex-col">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-forground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
