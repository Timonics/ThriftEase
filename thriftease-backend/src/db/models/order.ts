"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import { OrderItem } from "./orderitems";

const Order = sequelize.define(
  "Order",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    OrderItems: { 
      type: DataTypes.ARRAY(DataTypes.INTEGER) 
    },
  },
  { freezeTableName: true }
);
