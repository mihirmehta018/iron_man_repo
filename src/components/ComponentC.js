import React from "react";
import { connect } from "react-redux";

const ComponentC = ({ inputValue }) => {
  return (
    <div>
      <p>Value from Redux Store: {inputValue}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
});

export default connect(mapStateToProps)(ComponentC);
