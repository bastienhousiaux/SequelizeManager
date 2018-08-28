"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SequelizeManager_1 = require("./SequelizeManager");
var sm = new SequelizeManager_1.SequelizeManager('db_test');
sm.createModel('boo', { name: "string", age: "number" });
var project = sm.createModel('project', {
    title: SequelizeManager_1.Sequelize.STRING,
    description: SequelizeManager_1.Sequelize.TEXT
});
project.findAll(function (data) {
    console.log(data);
});
//   project.sync({force: true}).then(() => {
//         // Table created
//         return project.create({
//           title: 'John',
//           description: 'Hancock'
//         });
//       });
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('db_test', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
//   operatorsAliases: false,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err:any) => {
//     console.error('Unable to connect to the database:', err);
//   });
//   const User = sequelize.define('user', {
//     firstName: {
//       type: Sequelize.STRING
//     },
//     lastName: {
//       type: Sequelize.STRING
//     }
//   });
//   // force: true will drop the table if it already exists
//   User.sync({force: true}).then(() => {
//     // Table created
//     return User.create({
//       firstName: 'John',
//       lastName: 'Hancock'
//     });
//   });
