import { createContext, useEffect, useState } from "react";
import { getUsers } from "../api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const name = localStorage.getItem("name")
  const [username, setUsername] = useState(() => {
    return name || "tickle122"
  })
  const [user, setNewUser] = useState({});
  useEffect(() => {
    getUsers().then((response) => {
      const [currentUser] = response.filter(e => e.username === username)
      setUser(currentUser)
    })
  }, [])

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