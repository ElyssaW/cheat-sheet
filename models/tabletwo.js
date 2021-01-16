'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tableTwo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.tableTwo.belongsTo(models.tableThree)
      models.tableTwo.belongsToMany(models.tableOne, {through: 'join_table'})
    }
  };
  tableTwo.init({
    tableThreeId: DataTypes.INTEGER,
    info: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'tableTwo',
  });
  return tableTwo;
};