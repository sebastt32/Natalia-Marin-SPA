const { Sequelize } = require ("sequelize");
const Usermodel = require("./models/User");
const Postmodel = require("./models/Post");

require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/proyectspa`,{logging:false}
);

Usermodel(sequelize);
Postmodel(sequelize);


const { User, Post }= sequelize.models;

User.hasMany(Post); 
Post.belongsTo(User);

module.exports = { sequelize, ...sequelize.models };

// crear la conexion con la base de datos
// definir los modelos
// relacionarlos
// exportarla