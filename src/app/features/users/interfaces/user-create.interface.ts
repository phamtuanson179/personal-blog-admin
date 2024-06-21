import { User } from "src/app/features/users/interfaces/user.interface";

export interface UserCreate extends Omit<User, "id"> {}
