import bcrypt from 'bcrypt';
import {PassportStatic} from "passport";
import {Strategy} from "passport-local";
import DB from "../models";


export const localStrategy = (passport: PassportStatic) => {
	passport.use(new Strategy({
			usernameField: 'email',
			passwordField: 'password'
		}, (username, password, done) => {
			const exUser = DB.User.find({where: username})
		}
	));
};