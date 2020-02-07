'use strict';
const { hashPassword } = require('../helpers/bcrypt')
const createError = require('http-errors')
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize

  class User extends Model { }

  User.init({
    fullname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isExist(value){
          return User.count({ where: { email: value}})
          .then(count => {
            if (count != 0){
              throw createError(400, 'Account already registered')
            }
          })
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    hooks: {
      beforeValidate: (user) => {
        user.password = (hashPassword(user.password))
      }
    },
    sequelize
  });

  User.associate = function (models) {
    User.belongsToMany(models.Event, { through: 'FavoriteEvent' })
  };

  return User;
};