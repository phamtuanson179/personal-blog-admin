export interface Blog {
  id: string;
  title: string;
  summary?: string;
  thumbnailFileId?: string;
  contentFileId?: string;
  tags: string[];
  categoryIds: string[];
  createdBy: string;
  updatedBy: string;
  createTime: number;
  updateTime: number;
}
