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

  Getjobs() {
    return jobs;
  }

  FindJob(id) {
    return jobs.find((job) => job.id === Number(id));
  }
  updateApplication(user, id) {
    const update = jobs.find((job) => job.id === Number(id));
    update.Applications.push(user);

  }
  static search(job_designation) {
    const requrejob = jobs.filter((value) => value.job_designation && value.job_designation.toLowerCase().includes(job_designation.toLowerCase()));
    return requrejob
  }
  static Adddata(new_data){
    jobs.push(new_data);
  }



}

// ------------------ Job 1 ------------------
const job1 = new Model(
  1,
  true,
  "/images/google.png",
  "Software Engineer",
  "Google",
  "Bangalore, India",
  "2+ years",
  "₹12 LPA",
  "10000+",
  "2 days ago",
  ["JavaScript", "Node.js", "React"],
  5,
  "2025-10-15",
  []
);

// ------------------ Job 2 ------------------
const job2 = new Model(
  2,
  false,
  "/images/microsoft.png",
  "Backend Developer",
  "Microsoft",
  "Hyderabad, India",
  "3+ years",
  "₹15 LPA",
  "50000+",
  "5 days ago",
  ["C#", ".NET", "Azure"],
  3,
  "2025-10-20",
  [] // 1 application
);

// ------------------ Job 3 ------------------
const job3 = new Model(
  3,
  true,
  "/images/amazon.png",
  "Frontend Developer",
  "Amazon",
  "Chennai, India",
  "1+ years",
  "₹10 LPA",
  "20000+",
  "1 week ago",
  ["HTML", "CSS", "JavaScript", "React"],
  4,
  "2025-10-25",
  [] // no applications yet
);

// ------------------ Jobs Array ------------------
const jobs = [job1, job2, job3];

