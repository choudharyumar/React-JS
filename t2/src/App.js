import logo from "./logo.svg";
import "./App.css";
import User from "./Component";
import Xlass from "./Class";
function App() {
  let Data = "umar hayat";
  function Click() {
    Data = "Ali";
    //here we call a function
    alert(Data);
  }
  return (
    <div className="App">
      <h1>{Data}</h1>
      {/* <User></User> */}
      {/* <Xlass></Xlass> */}
      {/* <button onClick={Click}>Click me</button> */}
      {/* we use arrow function for direct call */}
      <button onClick={() => Click()}>Click Me</button>
    </div>
  );
}

export default App;
