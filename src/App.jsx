import TodoList from "./components/TodoList";
import Logo from "./components/Logo";
import "./App.css";

const App = () => {
  return (
    <>
      <Logo />

      <div
        className="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <TodoList />
      </div>
    </>
  );
};
export default App;
