'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tableThree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.tableThree.hasMany(models.tableOne)
      models.tableThree.hasMany(models.tableTwo)
    }
  };
  tableThree.init({
    info: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tableThree',
  });
  return tableThree;
};