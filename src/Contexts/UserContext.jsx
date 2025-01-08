import { createContext, useEffect, useState } from "react";
import { getUsers } from "../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const name = localStorage.getItem("name") || "tickle122"

  const [user, setNewUser] = useState({});
  useEffect(() => {
      getUsers().then((response) => {
        const [currentUser] = response.filter(e => e.username === name)
        setUser(currentUser)
      })
  }, [name])

  const setUser = (newUser) => {
    localStorage.setItem("name", newUser.username)
    setNewUser(newUser)
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};