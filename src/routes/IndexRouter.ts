import {Router} from "./Router";
import {IsLoggedIn, IsNotLoggedIn} from "../middlewares/LoginMidware";

export class IndexRouter extends Router {
	constructor() {
		super();
	}

	initRouter(): any {
		this.router.get('/profile', IsLoggedIn, (req, res) => {
			res.render('profile', {
				title: '내 정보 - NodeBird',
				user: req.user
			})
		});

		this.router.get('/join', IsNotLoggedIn, (req, res) => {
			res.render('join', {
				title:
			})
		});
	}
}