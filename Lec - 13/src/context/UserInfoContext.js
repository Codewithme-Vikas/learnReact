import { createContext } from "react";

export const UserInfoContext = createContext({
    user: {
        name: "vikas",
        email: "vikas@email.com"
    }
});