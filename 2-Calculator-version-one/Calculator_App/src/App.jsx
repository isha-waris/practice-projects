import "./App.css";
import ButtonContainer from "./components/ButtonContainer/ButtonContainer";
import Display from "./components/Display/Display";

function App() {
  return (
    <div className="center-wrapper">
      <div className="calculator">
        <h1>Calculator</h1>
        <Display />
        <ButtonContainer />
      </div>
    </div>
  );
}

export default App;
