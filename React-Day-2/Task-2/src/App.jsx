import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import InputField from "./components/InputField";
import ColorChanger from "./components/ColorChanger";
import TodoList from "./components/TodoList";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div>
      <Counter />
      <hr />

      <Toggle />
      <hr />

      <InputField />
      <hr />

      <ColorChanger />
      <hr />

      <TodoList />
      <hr />

      <UserForm />
    </div>
  );
}

export default App;