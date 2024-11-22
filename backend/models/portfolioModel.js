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
  // devImagSrc: {
  //   type: String, // URL or path to the image
  //   required: true,
  // },
  badgeCount: {
    type: Number,
    required: true,
  },
});

// about schema
const aboutSchema = new Schema({
  personalInformation: {
    // devImagSrc: {
    //   type: String,
    //   required: true,
    // },
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
  image: {
    type: String,
    required: true, // Path to the project's image
  },
  category: {
    type: String,
    required: true, // Technology category (e.g., Django, React, etc.)
    enum: ["Django", "React", "React Native", "Full Stack"],
  },
  name: {
    type: String,
    required: true, // Project name
  },
  description: {
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
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String, // This is the text from the <p> tag in the React component
    required: true,
  },
});

// areas of interest schema
const areasOfInterestSchema = new Schema({
  icon: {
    type: String,
    required: true,
    enum: ["GanttChartSquare", "Blocks", "Gem"], // Restrict to only allowed icon names
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxLength: 500,
  },
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

export const Intro = mongoose.model("intros", introSchema);
export const About = mongoose.model("abouts", aboutSchema);
export const Project = mongoose.model("projects", projectSchema);
export const Project_ = mongoose.model("project_s", latestProjectSchema);
export const Interest = mongoose.model("interests", areasOfInterestSchema);
export const Value = mongoose.model("values", valuesPhilosophySchema);
export const Contact = mongoose.model("contacts", contactSchema);
export const Footer = mongoose.model("footers", footerSchema);
