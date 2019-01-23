import {DefineAttributeColumnOptions, DefineOptions, Model, Sequelize} from "sequelize";
import DataTypes from "sequelize";

export const UserDefine: { [attribue: string]: DefineAttributeColumnOptions } = {
	email: {
		type: DataTypes.STRING(40),
		allowNull: false,
		unique: true
	},
	nick: {
		type: DataTypes.STRING(15),
		allowNull: false
	},
	password: {
		type: DataTypes.STRING(100),
		allowNull: true
	},
	provider: {
		type: DataTypes.STRING(10),
		allowNull: false,
		defaultValue: 'local'
	},
	snsId: {
		type: DataTypes.STRING(30),
		allowNull: true
	}
};

export const UserOption: DefineOptions<any> = {
	timestamps: true,
	paranoid: true
};