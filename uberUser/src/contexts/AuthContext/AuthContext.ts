import { createContext } from "react";
import { User } from "../../models";

type AuthContextType = {
    authUser: any;
    dbUser: any;
    sub: string;
    addDbUser: (dataUser: any) => void;
    settingDbUser: (dataUser: any) => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);