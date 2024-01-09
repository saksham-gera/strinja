import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const isLoggedIn = () => authData != null;

  useEffect(() => {
    console.log('AuthData updated:', authData);
  }, [authData]); // Only run the effect when authData changes

  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:6969/Admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username: username,
          Password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setAuthData(data);
        console.log("Login successful: ", isLoggedIn());
      } else {
        console.log("Login failed:", response);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContext;
};
