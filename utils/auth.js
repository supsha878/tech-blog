// authorization function, redirects to login page if user is not logged in
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

// export function
module.exports = withAuth;