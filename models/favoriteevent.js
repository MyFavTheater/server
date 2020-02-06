'use strict';
module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize

  class FavoriteEvent extends Model {}

  FavoriteEvent.init({
    UserId: DataTypes.INTEGER,
    EventId: DataTypes.INTEGER
  }, {sequelize});
  FavoriteEvent.associate = function(models) {
    // associations can be defined here
  };
  return FavoriteEvent;
};