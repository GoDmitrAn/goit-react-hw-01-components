import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  min-width: 300px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const TableHeadItem = styled.th`
  color: #f8f8f8;
  background-color: #4f7aac;
  font-weight: bold;
  padding: 10px 0;
  text-transform: uppercase;
`;
export const TableBodyItem = styled.td`
  padding: 10px 0;
  &:not(:last-child) {
    border-right: 1px solid #e1e1e1;
  }
`;
export const TableBodyRow = styled.tr`
  background-color: ${props => {
    return props.color % 2 === 0 ? `#fafafa` : `#ecf1f4`;
  }};
`;
