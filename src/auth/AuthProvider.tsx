import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  setAccessToken: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const contextValue: AuthContextProps = {
    isAuthenticated,
    setAccessToken: (token) => {
      setAccessToken(token);
      setIsAuthenticated(true);
      localStorage.setItem("accessToken", token); // Almacena el token en localStorage
    },
    logout: () => {
      setAccessToken(null);
      setIsAuthenticated(false);
      localStorage.removeItem("accessToken");  // Elimina el token de localStorage
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");

    if (storedToken){ 
      setAccessToken(storedToken);
      setIsAuthenticated(true)
    }
  }, []);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
