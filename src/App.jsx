import { useState } from "react";

import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <UserInput onChange={handleChange} userInput={userInput}/>
      {inputIsValid && <Results userInput={userInput}/>}
      {!inputIsValid && <p className="center">Please enter a duration equal to or greater than 1</p>}
    </>
  )
}

export default App
