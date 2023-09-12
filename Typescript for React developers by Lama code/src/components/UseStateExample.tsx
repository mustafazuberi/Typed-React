import { useState } from "react";
import { UserType } from "../types/interfaces";
import "./style.css";

const UseStateExample = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState<UserType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleClick = () => {
    setUser({
      name: userName,
      sessionId: Math.random(),
    });
  };
  return (
    <div className="UseStateExample">
      {user ? (
        <h3>{user.name} Logged In !</h3>
      ) : (
        <form>
          <input type="text" placeholder="Username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>
      )}
    </div>
  );
};

export default UseStateExample;
