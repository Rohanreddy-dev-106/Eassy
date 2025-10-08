export default class Model {
  id;
  featured;
  logo;
  job_designation;
  company_name;
  job_location;
  experience;
  salary;
  employees;
  job_posted;
  skills_required;
  number_of_openings;
  apply_by;
  Applications;

  constructor(
    id,
    featured,
    logo,
    job_designation,
    company_name,
    job_location,
    experience,
    salary,
    employees,
    job_posted,
    skills_required = [],
    number_of_openings,
    apply_by,
    Applications = []
  ) {
    this.id = id;
    this.featured = featured;
    this.logo = logo;
    this.job_designation = job_designation;
    this.company_name = company_name;
    this.job_location = job_location;
    this.experience = experience;
    this.salary = salary;
    this.employees = employees;
    this.job_posted = job_posted;
    this.skills_required = skills_required;
    this.number_of_openings = number_of_openings;
    this.apply_by = apply_by;
    this.Applications = Applications;
  }

  // Instance methods
  Getjobs() {
    return jobs;
  }

  FindJob(id) {
    return jobs.find(job => job.id === Number(id));
  }

  updateApplication(user, id) {
    const job = jobs.find(job => job.id === Number(id));
    if (job) {
      job.Applications.push(user);
    }
  }

  // Static methods
  static search(job_designation) {
    return jobs.filter(job =>
      job.job_designation && job.job_designation.toLowerCase().includes(job_designation.toLowerCase())
    );
  }

  static Adddata(new_data) {
    jobs.push(new_data);
  }

  static getproductbtID(id) {
    return jobs.find(job => job.id === Number(id));
  }

  static updateData(id, logo, job_designation, company_name, job_location, experience, salary, employees, number_of_openings, apply_by, skills_required) {
    const index = jobs.findIndex(job => job.id === Number(id));
    if (index !== -1) {
      jobs[index].logo = logo || jobs[index].logo;
      jobs[index].job_designation = job_designation || jobs[index].job_designation;
      jobs[index].company_name = company_name || jobs[index].company_name;
      jobs[index].job_location = job_location || jobs[index].job_location;
      jobs[index].experience = experience || jobs[index].experience;
      jobs[index].salary = salary || jobs[index].salary;
      jobs[index].employees = employees || jobs[index].employees;
      jobs[index].number_of_openings = number_of_openings || jobs[index].number_of_openings;
      jobs[index].apply_by = apply_by || jobs[index].apply_by;
      jobs[index].skills_required = skills_required || jobs[index].skills_required;
    }
  }

  static Delete(id) {
    const index = jobs.findIndex(job => job.id === Number(id));
    if (index !== -1) {
      jobs.splice(index, 1);
    }
  }
}

// ------------------ Jobs ------------------
const job1 = new Model(
  1, true, "/images/google.png", "Software Engineer", "Google", "Bangalore, India",
  "2+ years", "₹12 LPA", "10000+", "2 days ago", ["JavaScript", "Node.js", "React"], 5, "2025-10-15", []
);
const job2 = new Model(
  2, false, "/images/microsoft.png", "Backend Developer", "Microsoft", "Hyderabad, India",
  "3+ years", "₹15 LPA", "50000+", "5 days ago", ["C#", ".NET", "Azure"], 3, "2025-10-20", []
);
const job3 = new Model(
  3, true, "/images/amazon.png", "Frontend Developer", "Amazon", "Chennai, India",
  "1+ years", "₹10 LPA", "20000+", "1 week ago", ["HTML", "CSS", "JavaScript", "React"], 4, "2025-10-25", []
);

const jobs = [job1, job2, job3];
