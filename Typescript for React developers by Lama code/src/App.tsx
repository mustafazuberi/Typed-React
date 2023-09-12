import ChildrenPropExample from "./components/ChildrenPropExample";
import EventExample from "./components/EventExample";
import PostList from "./components/PostList";
import UseContextExample from "./components/UseContextExample";
import UseRefExample from "./components/UseRefExample";
import UseStateExample from "./components/UseStateExample";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div>
        {false ? <PostList /> : null}
        {false ? <ChildrenPropExample /> : null}
        {false ? <EventExample /> : null}
        {false ? <UseStateExample /> : null}
        {false ? <UseContextExample /> : null}
        <UseRefExample />
      </div>
    </ThemeProvider>
  );
}

export default App;
