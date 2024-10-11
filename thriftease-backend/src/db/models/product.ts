"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import { ProductAttribute } from "../../interfaces/thriftease-interface";
import { User } from "./user";
import { Category } from "./category";

interface ProductModel extends Model<ProductAttribute>, ProductAttribute {}

const Product = sequelize.define<ProductModel>(
  "Product",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    ownerId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

User.hasMany(Product, { foreignKey: "ownerId", as: "products" });
Product.belongsTo(User, { foreignKey: "ownerId", as: "user" });

Category.hasMany(Product, { foreignKey: "categoryId", as: "products" });
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

export { Product };
