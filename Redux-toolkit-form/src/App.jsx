import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Form from "./Pages/Form";

function App() {
  return (
    <Provider store={store}>
      {/* <div className="App"> */}
      <h1 className="text-center">Redux Toolkit Form Example</h1>
      <Form />
      {/* </div> */}
    </Provider>
  );
}

export default App;
