import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "./ui/card";

// Map of icon names to components
const iconMap = {
  GanttChartSquare: <GanttChartSquare size={72} strokeWidth={0.8} />,
  Blocks: <Blocks size={72} strokeWidth={0.8} />,
  Gem: <Gem size={72} strokeWidth={0.8} />,
};

// Updated serviceData with icon names instead of the JSX components
const serviceData = [
  {
    icon: "GanttChartSquare", // Store the name of the icon
    title: "Fullstack Web Development",
    description:
      "I enjoy the versatility of full-stack development, enabling me to work on everything from front-end design to back-end logic and contribute to projects from concept to completion.",
  },
  {
    icon: "Blocks", // Store the name of the icon
    title: "Backend Development",
    description:
      "I see backend development as a complex puzzle of performance and innovation. I'm drawn to it because it lets you build the invisible infrastructure that shapes the backbone of applications and provides smooth, high-quality user experiences",
  },
  {
    icon: "Gem", // Store the name of the icon
    title: "Mobile Development",
    description:
      "Mobile apps are the digital pulse of modern life. It’s more than just code—it's a gateway to solving real-world challenges. My passion lies in creating apps that intuitively connect users with powerful digital experiences across iOS and Android platforms.",
  },
];

const Services = () => {
  return (
    // mb-12 xl:mb-36 pb-12 xl:pb-24
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          Areas of Interest
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {serviceData.map((item, index) => {
            const IconComponent = iconMap[item.icon]; // Use the icon name to get the corresponding component
            return (
              <Card
                // "w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                className="w-full max-w-[424px] min-h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {IconComponent} {/* Render the icon dynamically */}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
