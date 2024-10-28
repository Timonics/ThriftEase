"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import {
  Condition,
  Status,
  ProductAttribute,
} from "../../interfaces/thriftease-interface";
import { User } from "./user";
import { Category } from "./category";
import { SubCategory } from "./subcategory";

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
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    negotiable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    condition: {
      type: DataTypes.ENUM(...Object.values(Condition)),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM(...Object.values(Status)),
      allowNull: false,
      defaultValue: "Available",
    },
    deliveryOptions: {
      type: DataTypes.JSONB,
      allowNull: false,
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

SubCategory.hasMany(Product, { foreignKey: "subCategoryId", as: "products" });
Product.belongsTo(SubCategory, {
  foreignKey: "subCategoryId",
  as: "subCategory",
});

export { Product };
