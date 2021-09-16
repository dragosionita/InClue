const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize(`
    mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}
`);

const modelDefiners = [
	require('./models/link.model'),
	require('./models/site.model'),
	require('./models/site_link.model'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

const { site, site_link, link, link_image} = sequelize.models;

site.hasMany(site_link);
site_link.belongsTo(site);
site_link.belongsTo(link);
link.hasMany(link_image);
link_image.belongsTo(link);

module.exports = sequelize;
 