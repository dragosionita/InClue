'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LinkImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LinkImage.belongsTo(models.Link, {
        foreignKey: 'link_id'
      });
    }
  };
  LinkImage.init({
    link_id: DataTypes.INTEGER,
    url: DataTypes.STRING,
    alt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LinkImage',
  });
  return LinkImage;
};