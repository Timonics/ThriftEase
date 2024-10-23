import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import { CategoryAttribute } from "../../interfaces/thriftease-interface";
import { SubCategory } from "./subcategory";

interface CategoryModel extends Model<CategoryAttribute>, CategoryAttribute {}

const Category = sequelize.define<CategoryModel>(
  "Category",
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
  },
  { freezeTableName: true }
);


export { Category };
