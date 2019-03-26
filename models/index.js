'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize-oracle');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};

let sequelize = new Sequelize('oracle://perimnet:perimnet@192.168.2.3:1521/perim');

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


sequelize.authenticate()
    .then(() => {
        sequelize.sync()
        console.log('Connection has been established successfully.');
        console.log("------------------------------------MIGRAÇÃO TERMINADA------------------------------------")

    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
