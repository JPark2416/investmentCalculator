import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  // const [initialValue, setInitialValue] = useState(1500);
  // const [annualValue, setAnnualValue] = useState(1);
  // const [expectedValue, setExpectedValue] = useState(5);
  // const [durationValue, setDurationValue] = useState(9);

  // // const testVal = [initialValue, annualValue, expectedValue, durationValue];
  // const investmentResults = calculateInvestmentResults({
  //   initialInvestment: initialValue,
  //   annualInvestment: annualValue,
  //   expectedReturn: expectedValue,
  //   duration: durationValue,
  // });
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <main>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <ResultTable input={userInput} />}

      {/* <div id="user-input">
        <UserInput
          inputLabel="initial investment"
          onChangeInput={setInitialValue}
        />
        <UserInput
          inputLabel="annual investment"
          onChangeInput={setAnnualValue}
        />
        <UserInput
          inputLabel="expected return"
          onChangeInput={setExpectedValue}
        />
        <UserInput inputLabel="duration" onChangeInput={setDurationValue} />
      </div> */}
    </main>
  );
}

export default App;
