'use strict';

const createError = require('http-errors')

module.exports = (sequelize, DataTypes) => {

  const {Model} = sequelize.Sequelize

  class FavoriteEvent extends Model {}

  FavoriteEvent.init({
    UserId: {
      type:DataTypes.INTEGER
    },
    EventId: {
      type: DataTypes.INTEGER
    }
  }, {sequelize,
    validate: {
      isExist() {
        return FavoriteEvent.count({ where: { UserId: this.UserId, EventId: this.EventId}})
          .then(count => {
            if (count != 0){
              throw createError(400, 'Already Add this Event')
            }
          })
      }
    }});
  FavoriteEvent.associate = function(models) {
    // associations can be defined here
  };
  return FavoriteEvent;
};