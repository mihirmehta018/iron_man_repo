import React from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const ComponentA = () => {
  return (
    <div>
      <h2>Component A</h2>
      <ComponentB />
      <ComponentC />
    </div>
  );
};

export default ComponentA;
