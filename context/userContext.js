import { useState } from "react";
import React, { useContext, useEffect } from "react";

const defaultValues = {
  userData: null,
  getUserData: () => {},
};

const UserContext = React.createContext(defaultValues);

export function useUser() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  const fetchUserData = async () => {
    try {
      const userId = window.sessionStorage.getItem("dair_userId");
      if (!userId) {
        return;
      }
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ROUTE}/user/${userId}`);

      const data = await res.json();

      if (data) {
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const value = {
    userData:user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
