export interface Blog {
  id: string;
  title: string;
  summary?: string;
  thumbnail?: string;
  content: string;
  tags: string[];
  categoryIds: string[];
  createdBy: string;
  updatedBy: string;
  createTime: number;
  updateTime: number;
}
