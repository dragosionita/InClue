'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SiteLink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SiteLink.belongsTo(models.Site, {
        foreignKey: site_id
      })
      SiteLink.belongsTo(models.Link, {
        foreignKey: link_id
      })
    }
  };
  SiteLink.init({
    site_id: DataTypes.INTEGER,
    link_id: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SiteLink',
  });
  return SiteLink;
};