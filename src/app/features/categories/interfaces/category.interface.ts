export interface Category {
  id: string;
  name: string;
  description?: string;
  order: number;
  createdBy?: string;
  updatedBy?: string;
}
