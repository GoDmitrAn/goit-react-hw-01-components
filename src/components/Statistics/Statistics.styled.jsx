import styled from '@emotion/styled';

export const StaticticsSection = styled.section`
  border: 1px solid #616858;
  border-radius: 5px;
  background-color: #fff;
  text-align: center;
`;
export const StaticticsSectionTitle = styled.h2`
  margin: 10px 0;
`;
export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  min-width: 300px;
  border-top: 1px solid #616858;
`;
export const StatisticsListItem = styled.li`
  flex-basis: 100%;
  padding: 10px 0;
  background-color: ${props => props.color};
`;
export const StatisticsItemLabel = styled.span`
  display: block;
`;
export const StatisticsItemPercentage = styled.span``;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
