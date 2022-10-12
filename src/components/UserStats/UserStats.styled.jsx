import styled from '@emotion/styled';

export const UserStatsBox = styled.ul`
  list-style: none;
  display: flex;
  border-top: 1px solid #616858;
  background-color: #87c0b8;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const UserStatsCell = styled.li`
  text-align: center;
  flex-basis: 100%;
  padding: 10px 0;
  &:not(:last-child) {
    border-right: 1px solid #616858;
  }
`;
export const StatsCellLabel = styled.span`
  display: block;
`;
export const StatsCellQuantity = styled.span`
  font-weight: bold;
  display: block;
  margin-top: 10px;
`;
