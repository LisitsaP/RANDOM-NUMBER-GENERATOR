import { useState } from "react";
import "./App.css";
import RandomNumbrt from "./components/RandomNumbrt";

function App() {
  const [data, setData] = useState(10);
  function getData(val) {
    setData(val.target.value);
    // console.warn(val.target.value);
    console.log(data);
  }
  return (
    <div className="App">
      <input type="text" placeholder="MAX NUMBER" onChange={getData} />
      <RandomNumbrt maxNum={data} />
    </div>
  );
}

export default App;
