"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

import {SubCategoryAttribute} from "../../interfaces/thriftease-interface"

interface SubCategoryModel extends Model<SubCategoryAttribute>,  SubCategoryAttribute {}

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
    }
  },
  { freezeTableName: true }
);

export { SubCategory };
