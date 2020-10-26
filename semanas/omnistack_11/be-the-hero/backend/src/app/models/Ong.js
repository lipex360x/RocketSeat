import Sequelize, { Model } from 'sequelize';
import crypto from 'crypto';

class Ong extends Model {
  static init(sequelize) {
    super.init(
      {
        user: Sequelize.STRING,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        whatsapp: Sequelize.STRING,
        city: Sequelize.STRING,
        uf: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async ong => {
      ong.user = crypto.randomBytes(4).toString('HEX');
    });

    return this;
  }
}

export default Ong;
