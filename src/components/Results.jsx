import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ userInput }) => {
  const investmentResult = calculateInvestmentResults(userInput);
  const initialInvestment =
    investmentResult[0].valueEndOfYear -
    investmentResult[0].interest -
    investmentResult[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResult.map((res) => {
          const totalInterest =
            res.valueEndOfYear -
            res.annualInvestment * res.year -
            initialInvestment;
          const totalAmountInvested = res.valueEndOfYear - totalInterest;
          return (
            <tr key={res.year}>
              <td>{res.year}</td>
              <td>{formatter.format(res.valueEndOfYear)}</td>
              <td>{formatter.format(res.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
