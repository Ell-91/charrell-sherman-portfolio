import express from "express";
import {
  Intro,
  //   About,
  //   Project,
  //   Project_,
  //   Interest,
  //   Value,
  //   Contact,
  //   Footer,
} from "../models/portfolioModel.js";

const router = express.Router();

router.get("/get-portfolio-data", async (req, res) => {
  console.log("Fetching portfolio data..."); // Debug log to confirm the route is hit
  try {
    // Fetch data from MongoDB collections
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const project_s = await Project_.find();
    const interests = await Interest.find();
    const values = await Value.find();
    const contacts = await Contact.find();
    const footers = await Footer.find();

    // Send response with fetched data
    res.status(200).send({
      intros: intros[0] || {}, // Return first document or empty object if none
      abouts: abouts[0] || {},
      projects: projects || [],
      project_s: project_s || [],
      interests: interests || [],
      values: values || [],
      contacts: contacts || [],
      footers: footers[0] || {},
    });
  } catch (error) {
    console.error("Error fetching portfolio data:", error); // Log error for debugging
    res.status(500).send({ message: "Server Error", error });
  }
});

export default router;
