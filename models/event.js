'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize

  class Event extends Model {}

  Event.init({
    title: DataTypes.STRING,
    announce_date: DataTypes.DATE,
    type: DataTypes.STRING,
    performersName: DataTypes.STRING,
    performersImage: DataTypes.STRING,
    url: DataTypes.STRING,
    city: DataTypes.STRING,
    lat: DataTypes.STRING,
    lon: DataTypes.STRING
  }, {sequelize});

  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsToMany(models.User, {through: 'FavoriteEvent'})
  };
  return Event;
};