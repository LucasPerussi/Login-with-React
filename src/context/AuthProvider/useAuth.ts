import { useContext } from "react";
import { AuthContext } from ".";

// hooks -> recomendado para quando vai repetir comportamentos
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
