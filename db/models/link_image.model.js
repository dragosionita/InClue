const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('link_image', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
        url: {
			allowNull: false,
			type: DataTypes.STRING,
		},
        alt: {
			allowNull: false,
			type: DataTypes.STRING,
		},
        timestamps: true
	});
};
