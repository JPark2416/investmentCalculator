import UserInput from "./components/UserInput";
import ResultTable from "./components/ResultTable";

function App() {
  return (
    <div>
      <div id="header">
        <h1>React Investment Calculator</h1>
      </div>
      <main>
        <UserInput />
        <ResultTable />
      </main>
    </div>
  );
}

export default App;
