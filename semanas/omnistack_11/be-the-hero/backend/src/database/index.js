import Sequelize from 'sequelize';

import database from '../config/database';
import Ong from '../app/models/Ong';
import Caso from '../app/models/Caso';

const models = [Ong, Caso];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(database);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
