import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "Zara Khan",
    role: "Admin",
    avatar: "ZK",
  });
  const [token] = useState("eyJhbGciOiJIUzI1NiJ9.mock_token_abc123");

  const logout = () => setUser(null);
  const login  = () => setUser({ name: "Zara Khan", role: "Admin", avatar: "ZK" });

  return (
    <AuthContext.Provider value={{ user, token, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}
