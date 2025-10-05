// src/middlewares/LastVisit.js
export default function LastVisit(req, res, next) {
    const existingCookie = req.cookies.name; // requires cookie-parser

    if (existingCookie) {
        // Cookie exists → make it available in views
        res.locals.info = existingCookie;
    } 
    else if (req.session && req.session.username) {
        // Only create cookie if user is logged in
        const EXPIRE = 6 * 24 * 60 * 60 * 1000; // 6 days
        res.cookie("name", req.session.username, { 
            maxAge: EXPIRE,
          
       
        });
        res.locals.info = req.session.username;
    } 
    else {
        // Not logged in → don't create cookie
        res.locals.info = null;
    }

    next();
}
