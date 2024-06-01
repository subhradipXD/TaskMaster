import { createContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export const UserContext = createContext();

const baseURL = "http://localhost:4000";

export const UserContextProvider = ({ children }) => {
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getCurrentUser = async (hashedUserId) => {
      const res = await axios.get(
        `${baseURL}/user/currentuser/${hashedUserId}`
      );
      setUser(res.data.response.user);
      // console.log(res.data);
      console.log("from context", user);
    };
    const isRouteAllowed = window.location.pathname === "/";

    if (isRouteAllowed && cookies.token) {
      getCurrentUser(cookies.token);
    }
  }, [[cookies.token, window.location.pathname]]);

  return (
    <UserContext.Provider
      value={{ user, setUser, cookies, setCookies, removeCookie }}
    >
      {children}
    </UserContext.Provider>
  );
};
