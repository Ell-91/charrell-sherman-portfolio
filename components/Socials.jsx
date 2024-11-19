"use client";

import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";

import Link from "next/link";

import React from "react";
//Fix Linkes
const icons = [
  {
    path: "https://www.linkedin.com/in/charrell-sherman/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/Ell-91?tab=repositories",
    name: <RiGithubFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
