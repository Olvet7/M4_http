import css from "../TransactionHistory/TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => {
          return (
            <tr key={id} className={index % 2 ? css.activeCell : css.notActive}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
          )  
        })}
        {/* <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr> */}
      </tbody>
    </table>
  );
};
