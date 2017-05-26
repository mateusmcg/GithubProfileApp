import { User } from './user.interface';

export interface Repository{
    name: String,
    description: String,
    owner: User
}