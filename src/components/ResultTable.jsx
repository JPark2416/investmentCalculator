function ResultTable({ resultValue }) {
  // resultValue Structure
  // {
  //   year: i + 1, // year identifier
  //   interest: interestEarnedInYear, // the amount of interest earned in this year
  //   valueEndOfYear: investmentValue, // investment value at end of year
  //   annualInvestment: annualInvestment, // investment added in this year
  // }

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
        {resultValue.map((result, resultindex) => {
          return (
            <tr key={resultindex}>
              <td>{result.year}</td>
              <td>{result.valueEndOfYear}</td>
              <td>{result.interest}</td>
              <td>
                {resultValue
                  .slice(0, resultindex + 1)
                  .map((res) => res.annualInvestment)
                  .reduce((acc, current) => {
                    return acc + current;
                  })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultTable;
