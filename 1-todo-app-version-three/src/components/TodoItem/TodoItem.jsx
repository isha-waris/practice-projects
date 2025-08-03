import "./TodoItem.css";
import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
export default function TodoItem({ todoItems, onDeleteClick }) {
  return (
    <div>
      <div className="container ">
        <div className="row kg-row">
          <div className="col-6">{todoItems.name}</div>
          <div className="col-4">{todoItems.todoDate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => onDeleteClick(todoItems.name)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todoItems: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    todoDate: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
