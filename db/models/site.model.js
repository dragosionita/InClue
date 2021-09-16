const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('site', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
        url: {
			allowNull: false,
			type: DataTypes.STRING,
		},
        timestamps: true
	});
};
