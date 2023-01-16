import css from './transactionHistory.module.css';
import { TransactionItem } from './TransactionItem/TransactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionItem items={items} />
      </tbody>
    </table>
  );
};
