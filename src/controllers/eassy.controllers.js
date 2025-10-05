/* The Eassycontroller class contains methods for rendering different pages related to job listings and
handling job application submissions. */
import Model from "../model/eassy.model.js";

export default class Eassycontroller {

    // Renders the homepage
    static getHomepage(req, res, next) {
        res.render("landing-page", {});
    }

    // Renders a page listing all jobs
    static jobdetails(req, res, next) {
        const model_data = new Model();
        res.render("list-all-jobs", { jobs: model_data.Getjobs() });
    }

    // Renders a single job view using job ID from params
    static jobview(req, res, next) {
        const { id } = req.params; // middleware parses URL params
        const model_data = new Model();
        res.render("job-details", { data: model_data.FindJob(Number(id)), user: null });
    }

    // Handles form submission for job application
    static getapplyformdata(req, res, next) {
        // middleware 'express.urlencoded()' or 'express.json()' needed to parse req.body
        const user = req.body; 

        // middleware 'multer' needed to handle file uploads
        const fileurl = "data/" + req.file.filename; 

        const { id } = req.params; // ID from route parameter
        const model_data = new Model();

        // Update the job's Applications array
        model_data.updateApplication(user, id);

        res.redirect("/jobs");
    }

    // Handles job search form submission
    static search_data(req, res, next) {
        // middleware 'express.urlencoded()' needed to parse req.body for POST requests
        const { search } = req.body; 

        // Calls static search method in Model
        let search_dataName = Model.search(search);

        if (search_dataName.length === 0) {
            // If no jobs found, render a 404 page
            res.status(404).render("404", {});
        } else {
            // Render filtered jobs
            res.render("list-all-jobs", { jobs: search_dataName });
        }
    }
}
