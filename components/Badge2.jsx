"use client";
import CountUp from "react-countup";

const Badge2 = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
  animated = true,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bod text-primary">
          {animated ? (
            <CountUp end={endCountNum} delay={1} duration={4} />
          ) : (
            endCountNum // Static value if animation is disabled
          )}
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge2;
