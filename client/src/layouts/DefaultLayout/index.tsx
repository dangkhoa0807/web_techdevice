import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import useUserStore from "../../hooks/userStore";
import Cookies from 'js-cookie';

function DefaultLayout() {
  const { user, setUser, fetchUser, fetchRefresh } = useUserStore();

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = Cookies.get("token");
        const refreshToken = Cookies.get("refreshToken");

        if (!token) {
          const newToken = await fetchRefresh(refreshToken);
          await fetchUser(newToken);
          return;
        }

        await fetchUser(token);
      } catch (error) {
        const refreshToken = Cookies.get("refreshToken");
        if (refreshToken) {
          const newToken = await fetchRefresh(refreshToken);
          await fetchUser(newToken);
        } else {
          console.error("Error getting user:", error);
        }
      }
    };

    getUser();
  }, [fetchUser, fetchRefresh]);

  return (
    <>
      <Header user={user} setUser={setUser} />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
