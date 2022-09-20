const { DataTypes, Sequelize } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("activity", {
    name: {
      type: DataTypes.STRING,
    },
    dificultad: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
    },
    duracion: {
      type: DataTypes.INTEGER,
    },
    temporada: {
      type: DataTypes.ENUM("Verano", "Invierno", "Primavera", "Otoño"),
    },
  });
};
