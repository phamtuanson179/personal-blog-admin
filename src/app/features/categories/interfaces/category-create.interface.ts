import { Category } from "src/app/features/categories/interfaces/category.interface";

export interface CategoryCreate extends Omit<Category, "id"> {}
