import Model from "../model/eassy.model.js";

export default class PostJob {

  static getpostpage(req, res, next) {
    res.render("new-job", {});
  }

  static getdatapost(req, res, next) {
    const {
      job_category,
      job_designation,
      job_location,
      company_name,
      company_founded,
      employees,
      salary,
      number_of_openings,
      experience,
      skills_required,
      apply_by
    } = req.body;

    const logo = req.file ? req.file.filename : null;

    // Create a new job object
    const newJob = new Model(
      Date.now(),               // id
      true,                     // featured (default true if missing)
      logo || "/images/default.png", // logo
      job_designation || "Unknown",
      company_name || "Unknown",
      job_location || "Unknown",
      experience || "0 years",
      salary || "Negotiable",
      employees || "Unknown",
      new Date().toLocaleDateString(), // job_posted
      skills_required ? Array.isArray(skills_required) ? skills_required : [skills_required] : [], 
      number_of_openings || 1,
      apply_by || new Date().toISOString().split("T")[0], // default today
      [] // Applications
    );

    // Add the job to the jobs array
    Model.Adddata(newJob);

    console.log(newJob);

    res.send("Job posted successfully!");
  }

}
