import { Permissions } from "./permissions";

export class User {
    admin: boolean;
    name: string;
    username: string;
    password: string;
    permissions: Permissions[];
    picture: string;
}
