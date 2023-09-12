import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const UseContextExample = () => {
  const { state, dispatch } = useContext(ThemeContext);
  console.log(state)
  return (
    <div className="UseContextExample">
      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>
        Change Theme
      </button>
      <button
        onClick={() => dispatch({ type: "CHANGE_FONT_SIZE", payload: 32 })}
      >
        Change Font Size
      </button>
    </div>
  );
};

export default UseContextExample;
