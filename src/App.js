import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ComponentA from "./components/ComponentA";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <ComponentA />
      </div>
    </Provider>
  );
};

export default App;
