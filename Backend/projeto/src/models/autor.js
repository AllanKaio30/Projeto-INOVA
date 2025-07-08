const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autor', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vinculo: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    departamento: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    campus: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    universidade: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'autor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "autor_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
