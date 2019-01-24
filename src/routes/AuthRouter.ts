import {Router} from "./Router";
import express from 'express';
import Bcrypt from 'bcrypt';
import {IsLoggedIn, IsNotLoggedIn} from "../middlewares/LoginMidware";
import DB from "../models";
import * as passport from "passport";

export class AuthRouter extends Router {

	bcrypt = Bcrypt;

	constructor() {
		super();
	}


	joinRoute(router: express.Router) {
		router.post('/join', IsNotLoggedIn, async (req, res, next) => {
			// 바디에서 데이터를 가저오는 문법
			const {email, nick, password} = req.body;

			try {
				// 메일 정보를 찾는다
				const exUser = await DB.User.find({where: {email}});
				if (exUser) {
					// 플레시 메시지 작동
					req.flash('joinError', '이미 가입되어 있는 메시지 입니다');

					// 페이지 리다이렉트
					return res.redirect('/join');
				}

				/* 중복이 아니면 실행 */
				// 비밀번호 암호화
				const hash = await this.bcrypt.hash(password, 12);

				// 데이터 베이스에 입력
				await DB.User.create({
					email, nick, password: hash
				});

				// 회원가입이 완료되면 메인 화면으로 이동
				return res.redirect('/');

			} catch (error) {
				console.error(error);
				return next(error);
			}
		});
	}

	loginRoute(router: express.Router) {
		router.post('/login', IsNotLoggedIn, (req, res, next) => {
			passport.authenticate('local', (authError, user, info) => {
				// 인증에러시 실행
				if (authError) {
					// 인증 에러
					console.error(authError);
					return next(authError);
				}

				// 유저정보 없을때 실행
				if (!user) {
					req.flash('loginError', info.message);
					return res.redirect('/');
				}

				//
				return req.login(user, (loginError) => {
					if (loginError) {
						console.error(loginError);
						return next(loginError);
					}
					return res.redirect('/');
				});
			})(req, res, next);
		});
	}

	logoutRoute(router: express.Router) {
		router.get('/logout', IsLoggedIn, (req, res) => {
			req.logout();
			req.session.destroy();
			res.redirect('/');
		});
	}


}