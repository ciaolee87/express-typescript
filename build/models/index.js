"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = __importDefault(require("sequelize"));
var user_1 = require("./user");
var post_1 = require("./post");
var Hashtag_1 = require("./Hashtag");
// 환경설정 가저오기
var env = process.env['NODE_ENV'] || 'development';
var config = require('../config/config.json')[env];
// 시퀄라이져 생성
var sequelize = new sequelize_1.default(config);
// db 객체 생성
var DB = {
    sequelize: sequelize,
    Sequelize: sequelize_1.default,
    User: sequelize.define('user', user_1.UserDefine, user_1.UserOption),
    Post: sequelize.define('post', post_1.PostDefine, post_1.PostOption),
    Hashtag: sequelize.define('hashtag', Hashtag_1.HashtagDefine, Hashtag_1.HashtagOption)
};
// 테이블별 관계 설정
DB.User.hasMany(DB.Post);
DB.Post.belongsTo(DB.User);
DB.Post.belongsToMany(DB.Hashtag, { through: 'PostHashtag' });
DB.Hashtag.belongsToMany(DB.Post, { through: 'PostHashtag' });
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
exports.default = DB;
//# sourceMappingURL=index.js.map