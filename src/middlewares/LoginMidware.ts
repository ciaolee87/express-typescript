import {RequestHandler} from "express-serve-static-core";

export const IsLoggedIn: RequestHandler = (req, res, next) => {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.status(403).send('로그인 필요');
	}
};

export const IsNotLoggedIn: RequestHandler = (req, res, next) => {
	if (!req.isAuthenticated()) {
		next();
	} else {
		res.redirect('/');
	}
};