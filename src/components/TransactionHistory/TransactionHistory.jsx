import PropTypes from 'prop-types';
import {
  TableHeadItem,
  TransactionHistoryTable,
  TableBodyItem,
  TableBodyRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <TableBodyRow key={id} color={index}>
            <TableBodyItem>{type}</TableBodyItem>
            <TableBodyItem>{amount}</TableBodyItem>
            <TableBodyItem>{currency}</TableBodyItem>
          </TableBodyRow>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};
