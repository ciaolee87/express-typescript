"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = __importDefault(require("sequelize"));
exports.UserDefine = {
    email: {
        type: sequelize_1.default.STRING(40),
        allowNull: false,
        unique: true
    },
    nick: {
        type: sequelize_1.default.STRING(15),
        allowNull: false
    },
    password: {
        type: sequelize_1.default.STRING(100),
        allowNull: true
    },
    provider: {
        type: sequelize_1.default.STRING(10),
        allowNull: false,
        defaultValue: 'local'
    },
    snsId: {
        type: sequelize_1.default.STRING(30),
        allowNull: true
    }
};
exports.UserOption = {
    timestamps: true,
    paranoid: true
};
//# sourceMappingURL=user.js.map