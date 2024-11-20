import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define("File", {
    fileName: { type: DataTypes.STRING, allowNull: false },
    fileType: { type: DataTypes.ENUM("image/png", "image/jpeg", "application/pdf"), allowNull: false },
    filePath: { type: DataTypes.STRING, allowNull: false },
  });
};
