"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import { UserAttribute } from "../../interfaces/thriftease-interface";

interface UserModel extends Model<UserAttribute>, UserAttribute {}

const User = sequelize.define<UserModel>(
  "User",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
  }
);

export { User };
