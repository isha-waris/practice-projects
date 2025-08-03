import "./ButtonContainer.css";
import PropTypes from "prop-types";
export default function ButtonContainer({ onClickButton }) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="button-container">
      {buttonNames.map((buttonName, index) => {
        return (
          <button
            key={index}
            className="button"
            onClick={() => onClickButton(buttonName)}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );
}
ButtonContainer.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
