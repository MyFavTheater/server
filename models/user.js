'use strict';

const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize

  class User extends Model {}

  User.init({
    fullname: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true
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
    beforeCreate(instance, options){
      instance.password = bcrypt.hashSync(instance.password, 10)
    }
    },
    sequelize
  });

  User.associate = function(models) {
    // User.hasMany
  };

  return User;
};