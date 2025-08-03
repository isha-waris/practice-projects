// Using UseRef Hook-->If we want to control repaint cycles ourselves or avoid rerender we use useRef state
//so there is the advantage of using useRef hook as use state mei jb bhi koi word likh rhy thy pori state print ho rhi thi lkn is mei code bhi bht kam likhna pra hai or is sy hm mutable objects ko retain kr skty hain without rerendering
import { useRef } from "react";
import "./AddTodoItem.css";
import PropTypes from "prop-types";
import { BiMessageAdd } from "react-icons/bi";
export default function AddTodoItem({ onHandleItem }) {
  const todoNameElement = useRef("");
  const dueDateElement = useRef("");

  const handleButtonClicked = (event) => {
    console.log(event);
    //We use prevent default to prevent data sending to server by default..
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    todoNameElement.current.value = "";
    onHandleItem(todoName, dueDate);
  };
  return (
    <div>
      <div className="container ">
        <form className="row kg-row" onSubmit={handleButtonClicked}>
          <div className="col-6">
            <input
              type="text"
              //We'll make ref to each input that will call
              ref={todoNameElement}
              placeholder="Enter Todo Here"
            ></input>
          </div>
          <div className="col-4">
            <input
              type="date"
              //We'll make ref to each input that will call
              ref={dueDateElement}
            ></input>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success kg-button">
              <BiMessageAdd />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
AddTodoItem.propTypes = {
  onHandleItem: PropTypes.func.isRequired,
};
