import AddTodoItem from "./components/AddTodoItem";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      id: 1,
      name: "Buy Milk",
      todoDate: "4/10/23",
    },
    {
      id: 2,
      name: "Go to College",
      todoDate: "4/10/23",
    },
    {
      id: 3,
      name: "Go and Watch",
      todoDate: "4/10/23",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodoItem />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}
export default App;
