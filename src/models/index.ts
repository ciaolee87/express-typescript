import Sequelize from 'sequelize';
import {UserDefine, UserOption} from "./user";
import {PostDefine, PostOption} from "./post";
import {HashtagDefine, HashtagOption} from "./Hashtag";

// 환경설정 가저오기
const env = process.env['NODE_ENV'] || 'development';
const config = require('../config/config.json')[env];

// 시퀄라이져 생성
const sequelize = new Sequelize(config);

// db 객체 생성
const DB = {
	sequelize: sequelize,   // 객체
	Sequelize: Sequelize,   // 전역객체
	User: sequelize.define('user', UserDefine, UserOption),
	Post: sequelize.define('post', PostDefine, PostOption),
	Hashtag: sequelize.define('hashtag', HashtagDefine, HashtagOption)
};

// 테이블별 관계 설정
DB.User.hasMany(DB.Post);
DB.Post.belongsTo(DB.User);
DB.Post.belongsToMany(DB.Hashtag, {through: 'PostHashtag'});
DB.Hashtag.belongsToMany(DB.Post, {through: 'PostHashtag'});
DB.User.belongsToMany(DB.User, {
	foreignKey: 'followingId',
	as: 'Followers',
	through: 'Follow'
});
DB.User.belongsToMany(DB.User, {
	foreignKey: 'followerId',
	as: 'Followings',
	through: 'Follow'
});

export default DB;