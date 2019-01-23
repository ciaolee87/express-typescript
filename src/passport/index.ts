import {PassportStatic} from "passport";
import DB from "../models";

export const InitPassport = (passport: PassportStatic) => {
	passport.serializeUser<any, any>((user, done) => {
		done(null, user['id']);
	});

	passport.deserializeUser((id, done) => {
		// 유저를 찾는다
		DB.User.find({where: {id}})
			.then(value => {
				// 찾으면 그 값을 입력
				done(null, value);
			})
			.catch(error => {
				// 못찾으면 에러값을 입력
				done(error);
			});

	});
};