import mongoose from "mongoose";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
const Schema = mongoose.Schema;
// loadType(mongoose);

// intro schema
const introSchema = new Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  animationSequence: {
    type: [String], // Array of strings for the animation text
    required: true, // Mark as required to ensure it's always present
  },
  animationSpeed: {
    type: Number, // Store the speed of the animation in milliseconds
    default: 50, // Set a default value
  },
  animationRepeat: {
    type: Boolean, // Store whether the animation repeats indefinitely
    default: true,
  },
  devImagSrc: {
    type: String, // URL or path to the image
    required: true,
  },
  badgeCount: {
    type: Number,
    required: true,
  },
});

// about schema
const aboutMeSchema = new Schema({
  personalInformation: {
    devImagSrc: {
      type: String,
      required: true,
    },
    sectionTitle: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
  qualifications: {
    education: [
      {
        university: {
          type: String,
          required: true,
        },
        degree: {
          type: String,
          required: true,
        },
        years: {
          type: String,
          required: true,
        },
      },
    ],
    experience: [
      {
        company: {
          type: String,
          required: true,
        },
        role: {
          type: String,
          required: true,
        },
        years: {
          type: String,
          required: true,
        },
      },
    ],
  },
  technicalSkills: {
    skills: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    otherSkills: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    tools: [
      {
        imgPath: {
          type: String,
          required: true,
        },
      },
    ],
  },
});

// project Schema
const projectSchema = new Schema({
  projectImage: {
    type: String,
    required: true, // Path to the project's image
  },
  category: {
    type: String,
    required: true, // Technology category (e.g., Django, React, etc.)
  },
  projectName: {
    type: String,
    required: true, // Project name
  },
  projectDescription: {
    type: String,
    required: true, // Detailed description of the project
  },
  github: {
    type: String,
    required: true, // Link to the GitHub repository or "/" if unavailable
    validate: {
      validator: function (v) {
        return v === "/" || /^https?:\/\/(www\.)?github\.com\/.+/.test(v);
      },
      message: "Invalid GitHub URL",
    },
  },
});

// latest projects schema
const latestProjectSchema = new Schema({
  subtitle: {
    type: string,
    required: true,
  },
  projects: {
    type: [projectSchema],
  },
});

// areas of interest schema
const areasOfInterestSchema = new Schema({
  services: [
    {
      icon: {
        type: String, // Storing the icon name as a string
        required: true,
        enum: ["GanttChartSquare", "Blocks", "Gem"], // Limit to available icons
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
});

// values and work philosophy schema
const valuesPhilosophySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
});

// contact form schema
const contactSchema = new Schema({
  h1Text: {
    type: String,
    required: true,
    default: "Let’s Work Together",
  },
  pText: {
    type: String,
    required: true,
    default:
      "Whether you have a role in mind or just want to explore possibilities",
  },
  email: {
    type: String,
    required: true,
    default: "shermancharrell@gmail.com",
  },
  address: {
    type: String,
    required: true,
    default: "Washington DC",
  },
});

// footer schema
const footerSchema = new Schema({
  title: {
    type: String,
    required: true,
    default: "Ready to Add a Passionate Software Engineer to Your Team?",
  },
});

module.exports = {
  Intro: mongoose.model("into", introSchema),
  About: mongoose.model("about", aboutMeSchema),
  Project: mongoose.model("project", projectSchema),
  Projects: mongoose.model("projects", latestProjectSchema),
  Interest: mongoose.model("interest", areasOfInterestSchema),
  Value: mongoose.model("value", valuesPhilosophySchema),
  Contact: mongoose.model("contact", contactSchema),
  Footer: mongoose.model("footer", footerSchema),
};
