import { User } from "@auth0/auth0-react";
import { AUTH0_ROLE } from "../const";

export const isAdmin = (user: User) => {
    if (!user) {
        return false;
    }
    const userRole = user[AUTH0_ROLE];
    return userRole.includes('Admin');
}