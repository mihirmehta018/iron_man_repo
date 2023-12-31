import React from "react";
import { connect } from "react-redux";
import { updateInputValue } from "../redux/actions";

const ComponentB = ({ inputValue, updateInputValue }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    updateInputValue(newValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

export default connect(mapStateToProps, { updateInputValue })(ComponentB);
