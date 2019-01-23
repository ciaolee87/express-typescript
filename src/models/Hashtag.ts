import DataTypes, {DefineAttributeColumnOptions, DefineOptions} from "sequelize";

export const HashtagDefine: { [attribue: string]: DefineAttributeColumnOptions } = {
	title: {
		type: DataTypes.STRING(15),
		allowNull: false,
		unique: true
	}
};

export const HashtagOption: DefineOptions<any> = {
	timestamps: true,
	paranoid: true
};