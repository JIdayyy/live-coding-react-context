import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });

  // This funcion handle changes on the input and set the state with the new value and the key is based on the input name
  const handleChange = (e) => {
    setCredentials((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = () => {
    setUser(credentials);
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center align-middle">
      <form className="flex space-y-2 w-4/5 md:w-1/3 shadow-md p-10 flex-col">
        <label htmlFor="userName">Username</label>
        <input
          className="border border-black"
          name="userName"
          value={credentials.userName}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>

        <input
          className="border border-black"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button
          className="bg-blue-400 text-white rounded-md px-2 py-1"
          onClick={handleLogin}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;
