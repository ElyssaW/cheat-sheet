'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tableOne extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.tableOne.belongsTo(models.tableThree)
      models.tableOne.belongsToMany(models.tableTwo, {through: 'join_table'})
    }
  };
  tableOne.init({
    tableThreeId: DataTypes.INTEGER,
    info: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tableOne',
  });
  return tableOne;
};