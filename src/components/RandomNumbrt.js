import { useState } from "react";
import generateRandomNum from "../utils/generateRandomNum";
function RandomNumbrt({ maxNum }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));
  const changeRandomNum = () => {
    return setRandomNum(generateRandomNum(maxNum));
  };
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate random number</button>
    </div>
  );
}
export default RandomNumbrt;
