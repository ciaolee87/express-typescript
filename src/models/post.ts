import DataTypes, {DefineAttributeColumnOptions, DefineOptions} from "sequelize";

export const PostDefine: { [attribue: string]: DefineAttributeColumnOptions } = {
	content: {
		type: DataTypes.STRING(140),
		allowNull: false
	},
	img: {
		type: DataTypes.STRING(200),
		allowNull: true
	}
};

export const PostOption: DefineOptions<any> = {
	timestamps: true,
	paranoid: true
};