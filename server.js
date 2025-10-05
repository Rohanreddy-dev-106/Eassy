import { server } from "./index.js";
import controller from "./src/controllers/eassy.controllers.js";
import controller2 from "./src/controllers/login.sinup.controller.js";
import controller3 from "./src/controllers/postjob.controller.js";
import { UplodeFile } from "./src/middlewares/file.uplode.config.js";

const PORT = 3100;

// ----------------- JOB ROUTES -----------------
server.get("/", controller.getHomepage);
server.get("/jobs", controller.jobdetails);
server.get("/job/:id", controller.jobview);
server.post("/apply/:id", UplodeFile.single("resume"), controller.getapplyformdata);
server.post("/search", controller.search_data);

// Post Job page
server.get("/postjob", (req, res, next) => {
  // Only allow logged-in users
  if (!req.session.userId) {
    return res.redirect("/login");
  }
  controller3.getpostpage(req, res, next);
});

// ----------------- AUTH ROUTES -----------------

// Login page
server.get("/login", (req, res) => {
  // If user is already logged in, redirect to jobs page
  if (req.session.userId) {
    return res.redirect("/jobs");
  }
  controller2.Loginpage(req, res);
});

// Register page (if you have a separate one, else handled by POST)
server.get("/register", (req, res) => {
  if (req.session.userId) {
    return res.redirect("/jobs");
  }
  res.render("user-register"); // Make sure you have this EJS page
});

// Handle registration
server.post("/register", controller2.Regesterdata);

// Handle login
server.post("/login", controller2.LoginYou);

// Logout
server.get("/logout", controller2.Logout);

// ----------------- START SERVER -----------------
server.listen(PORT, () =>
  console.log(`Server is Listening on PORT ${PORT}`)
);
