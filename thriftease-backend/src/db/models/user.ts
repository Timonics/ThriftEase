"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

interface UserAttribute {
  name: string;
  email: string;
  password: string;
}

interface UserModel extends Model<UserAttribute>, UserAttribute {}

const User = sequelize.define<UserModel>(
  "User",
  {
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
  },
  {
    freezeTableName: true,
  }
);

export { User };
