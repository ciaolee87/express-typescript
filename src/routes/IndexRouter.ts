import {Router} from "./Router";
import express from 'express';
import {IsLoggedIn, IsNotLoggedIn} from "../middlewares/LoginMidware";

export class IndexRouter extends Router {
	constructor() {
		super();
	}

	indexRoute(router: express.Router) {
		router.get('/', (req, res, next) => {
			res.render('main', {
				title: 'NodeBird',
				twits: [],
				user: req.user,
				loginError: req.flash('loginError')
			})
		});
	}

	profileRoute(router: express.Router) {
		router.get('/profile', IsLoggedIn, (req, res) => {
			res.render('profile', {
				title: '내 정보 - NodeBird',
				user: req.user
			})
		});
	}

	joinRoute(router: express.Router) {
		router.get('/join', IsNotLoggedIn, (req, res) => {
			res.render('join', {
				title: '회원가입 - NodeBird',
				user: req.user,
				joinError: req.flash('joinError')
			})
		});
	}
}