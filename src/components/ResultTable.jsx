function ResultTable({ resultValue }) {
  console.log("ResultTable function");
  console.log(resultValue);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
        </tr>
      </thead>
      <tbody>
        {resultValue.map((result) => {
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{result.valueEndOfYear}</td>
              <td>{result.interest}</td>
              <td>{result.valueEndOfYear}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultTable;
