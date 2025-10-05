import Model from "../model/eassy.model.js";
import Model2 from "../model/Login.sinup.model.js";

export default class Login {

    static Loginpage(req,res,next){
        res.render("user-login",{})
    }
    // POST /register
    static Regesterdata(req, res, next) {
        const { name, email, password } = req.body;


        const existingUser = Model2.finduser(email, password);

        if (existingUser) {
            console.log("User already exists:", existingUser.email);


            req.session.email = existingUser.email;
            req.session.userId = existingUser.id;
            res.locals.user = { email: existingUser.email };


            const model_data = new Model();
            return res.render("job-details", { data: model_data.Getjobs() });
        }


        Model2.add(name, email, password);
        console.log("New user registered:", email);

        res.render("user-login", {});
    }


    static LoginYou(req, res, next) {
        const { email, password } = req.body;
        const user = Model2.finduser(email, password);

        if (!user) {
            return res.render("404", {});
        }

        req.session.email = user.email;
        req.session.userId = user.id;
        res.locals.user = { email: user.email };

        const model_data = new Model();
        res.render("list-all-jobs", { jobs: model_data.Getjobs() });
    }


    static Logout(req, res, next) {
        req.session.destroy((error) => {
            if (error) {
                console.error(error);
                return res.status(500).send("Something went wrong while logging out");
            }
            res.redirect("/");
        });
    }
}
