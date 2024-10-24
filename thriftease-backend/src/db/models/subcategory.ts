"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

import { SubCategoryAttribute } from "../../interfaces/thriftease-interface";
import { Category } from "./category";

interface SubCategoryModel
  extends Model<SubCategoryAttribute>,
    SubCategoryAttribute {}

const SubCategory = sequelize.define<SubCategoryModel>(
  "SubCategory",
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
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Category",
        key: "id",
      },
    },
  },
  { freezeTableName: true }
);

Category.hasMany(SubCategory, { foreignKey: 'categoryId', as: 'subcategories' })
SubCategory.belongsTo(Category, { foreignKey: 'categoryId',  as: 'category' })

export { SubCategory };
