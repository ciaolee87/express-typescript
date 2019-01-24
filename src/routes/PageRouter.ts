import {Router} from "./Router";
import express from 'express';

export class PageRouter extends Router {

	constructor() {
		super();
	}

	indexRoute(router: express.Router) {
		router.get('/', (req, res, next) => {
			res.render('main',
				{
					title: 'NodeBird',
					twits: [],
					user: null,
					loginError: req.flash('loginError')
				});
		});
	}

	profileRoute(router: express.Router) {
		router.get('/profile', (req, res) => {
			res.render(
				'profile',
				{title: '내 정보 - NodeBird', user: null}
			);
		});
	}

	joinRoute(router: express.Router) {
		router.get('/join', (req, res) => {
			res.render(
				'join',
				{
					title: '회원가입 - NodeBird',
					user: null,
					joinError: req.flash('joinError')
				});
		});
	}
}