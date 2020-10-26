import Sequelize, { Model } from 'sequelize';

class Caso extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        value: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Ong, {
      foreignKey: 'ong_assoc',
      targetKey: 'user',
      as: 'ong',
    });
  }
}

export default Caso;
