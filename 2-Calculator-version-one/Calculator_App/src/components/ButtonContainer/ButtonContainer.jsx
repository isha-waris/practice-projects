import "./ButtonContainer.css";
export default function ButtonContainer() {
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
          <button key={index} className="button">
            {buttonName}
          </button>
        );
      })}
    </div>
  );
}
