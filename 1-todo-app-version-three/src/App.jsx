import AddTodoItem from "./components/AddTodoItem/AddTodoItem.jsx";
import AppName from "./components/AppName/AppName.jsx";
import "./App.css";
import TodoItems from "./components/TodoItems/TodoItems.jsx";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage.jsx";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (name, dueDate) => {
    console.log(`New Item  ${name} Added with Due Date ${dueDate}`);
    const newId = todoItems.length + 1; // Generate a new ID
    const newItem = {
      id: newId,
      name: name,
      todoDate: dueDate,
    };
    // agr value set krni hai new item k base pr to spread operator perfect option hai but
    // const setNewItems = [...todoItems, newItem];
    // setTodoItems(setNewItems);
    // agr value set krni hai kisi purani item k base pr to phr function k undr async function bna kr pass krdo ya phr usko aisy bhi likh skty hain.yeh currrent value k basis py new value create kr rha hai
    setTodoItems((currValue) => [...currValue, newItem]);
  };
  const handleDelete = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodoItem onHandleItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDelete} />
    </center>
  );
}
export default App;
