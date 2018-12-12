import { Permissions } from "./permissions";

export class User {
    _id: string;
    admin: boolean;
    name: string;
    email: string;
    username: string;
    password: string;
    permissions: Permissions[];
    picture: string;
}
