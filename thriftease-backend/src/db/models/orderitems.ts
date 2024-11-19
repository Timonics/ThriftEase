"use strict";
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

const OrderItem = sequelize.define(
  "OrderItem",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    orderId: {
      type: DataTypes.INTEGER,
    },
    productId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

export { OrderItem };
