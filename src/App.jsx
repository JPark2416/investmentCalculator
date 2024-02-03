import { useState } from "react";

import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [initialValue, setInitialValue] = useState(15000);
  const [annualValue, setAnnualValue] = useState(900);
  const [expectedValue, setExpectedValue] = useState(5);
  const [durationValue, setDurationValue] = useState(10);

  // const testVal = [initialValue, annualValue, expectedValue, durationValue];
  const investmentResults = calculateInvestmentResults({
    initialInvestment: initialValue,
    annualInvestment: annualValue,
    expectedReturn: expectedValue,
    duration: durationValue,
  });

  return (
    <main>
      <h1>React Investment Calculator</h1>
      <div id="user-input">
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
      </div>
      <ResultTable resultValue={investmentResults} />
    </main>
  );
}

export default App;
