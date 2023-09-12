import { createContext, useReducer } from "react";

interface STATE_TYPE {
  theme: string;
  fontSize: number;
}

interface ColorActionType {
  type: "CHANGE_THEME";
}
interface SizeActionType {
  type: "CHANGE_FONT_SIZE";
  payload: number;
}
type ActionType = ColorActionType | SizeActionType;

const INITIAL_STATE = {
  theme: "dark",
  fontSize: 16,
};

export const ThemeContext = createContext<{
  state: STATE_TYPE;
  dispatch: React.Dispatch<ColorActionType | SizeActionType>;
}>({ state: INITIAL_STATE, dispatch: () => {} });

const reducer = (state: STATE_TYPE, action: ActionType) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: state.theme === "dark" ? "light" : "dark" };
    case "CHANGE_FONT_SIZE":
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
