import Model from "../model/eassy.model.js";

export default class Eassycontroller {

  static getHomepage(req, res, next) {
    res.render("landing-page", {});
  }

  static jobdetails(req, res, next) {
    const model_data = new Model();
    res.render("list-all-jobs", { jobs: model_data.Getjobs() });
  }

  static jobview(req, res, next) {
    const { id } = req.params;
    const model_data = new Model();
    res.render("job-details", { data: model_data.FindJob(Number(id)), user: null });
  }

  static getapplyformdata(req, res, next) {
    const user = req.body;
    const { id } = req.params;
    const model_data = new Model();
    
    model_data.updateApplication(user, id);

    // Use the same instance to render updated jobs
    res.render("list-all-jobs", { jobs: model_data.Getjobs() });
  }

  static UpdatePage(req, res, next) {
    const { id } = req.params;
    const model_data = new Model(); // create instance to fetch latest data
    let prduct_id = model_data.getproductbtID(Number(id));
    if (Object.keys(prduct_id).length > 0) {
      res.render("update-job", { job: prduct_id });
    } else {
      res.status(404).send(`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        <div style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 9999; max-width: 500px;">
          <div class="alert alert-danger text-center" role="alert">
            <strong>Error ${res.statusCode}!</strong> The product was not found.
          </div>
        </div>
      `);
    }
  }

  static updatedata_D(req, res, next) {
    const { job_designation, company_name, job_location, experience, salary, employees, number_of_openings, apply_by, skills_required } = req.body;
    const { id } = req.params;
    const logo = req.file ? "data/" + req.file.filename : undefined;

    Model.updateData(id, logo, job_designation, company_name, job_location, experience, salary, employees, number_of_openings, apply_by, skills_required);

    const model_data = new Model(); // use new instance to get updated jobs
    res.render("list-all-jobs", { jobs: model_data.Getjobs() });
  }

  static delite(req, res, next) {
    const { id } = req.params;
    Model.Delete(Number(id));

    const model_data = new Model(); // use new instance to fetch latest jobs
    res.render("list-all-jobs", { jobs: model_data.Getjobs() });
  }

  static search_data(req, res, next) {
    const { search } = req.body;
    let search_dataName = Model.search(search);

    if (search_dataName.length === 0) {
      res.status(404).render("404", {});
    } else {
      res.render("list-all-jobs", { jobs: search_dataName });
    }
  }
}
