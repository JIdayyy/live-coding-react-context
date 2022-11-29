import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ShowTheme from "../components/ShowTheme";
import SwitchThemeButton from "../components/ShowTheme/SwitchButton";
import UserContext from "../context/UserContext";

function Home() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.userName) {
      navigate("/login");
    }
  }, [user]);

  if (!user.userName) return <p>Unauthorized</p>;

  return (
    <div className="flex flex-col space-y-2">
      <p>This is a protected page</p>
      <p>Username: {user.userName}</p>
      <ShowTheme />
      <SwitchThemeButton />
    </div>
  );
}

export default Home;
