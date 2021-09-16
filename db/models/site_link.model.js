const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('site', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
        timestamps: true
	});
};
