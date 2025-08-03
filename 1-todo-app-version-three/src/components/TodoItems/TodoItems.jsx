import PropTypes from "prop-types";
import TodoItem from "../TodoItem/TodoItem.jsx";
import "./TodoItems.css";
export default function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <>
      <div className="list-container">
        {todoItems.map((item) => (
          <TodoItem
            key={item.id}
            todoItems={item}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
}
TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      todoDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
