import { Blog } from "@blogs/interfaces/blog.interface";

export interface BlogCreate extends Omit<Blog, "id"> {}
