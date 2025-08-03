import "./Display.css";
import PropTypes from "prop-types";
export default function Display({ displayValue }) {
  return (
    <input className="display" type="text" value={displayValue} readOnly />
  );
}
Display.propTypes = {
  displayValue: PropTypes.any.isRequired,
};
