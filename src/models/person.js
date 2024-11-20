import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define("Person", {
    fullName: { type: DataTypes.STRING, allowNull: false },
    documentId: { type: DataTypes.BIGINT, allowNull: false, unique: true },
    birthDate: { type: DataTypes.DATE, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.BIGINT, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    gender: { type: DataTypes.ENUM("male", "female", "other"), allowNull: false },
  });
};
