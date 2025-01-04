import { createContext, useEffect, useState } from "react";
import { getUsers } from "../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUsers().then((response) => {
      const [currentUser] = response.filter(e => e.username === "tickle122")
      setUser(currentUser)
    })
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};