module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('casos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },

      ong_assoc: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'ongs', key: 'user' },
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('casos');
  },
};
