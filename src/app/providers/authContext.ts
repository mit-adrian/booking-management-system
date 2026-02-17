import { createContext } from "react";

export interface User {
  id: string;
  name: string;
  role: "admin" | "staff" | "customer";
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
