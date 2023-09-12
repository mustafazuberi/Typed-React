import { useRef, useEffect } from "react";
import "./style.css";

const UseRefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const userNameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(`username is ${userNameInputRef.current?.value}`);
  };

  return (
    <div className="UseRefExample">
      <form>
        <input ref={inputRef} type="text" placeholder="focus here.." />
        <input ref={userNameInputRef} type="text" placeholder="username" />
        <button onClick={handleClick}>Send</button>
      </form>
    </div>
  );
};

export default UseRefExample;
