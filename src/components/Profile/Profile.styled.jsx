import styled from '@emotion/styled';

export const NameProfile = styled.p`
  font-size: 22px;
  font-weight: 700;
  text-transform: capitalize;
  padding-top: 10px;
`;
export const UserCard = styled.div`
  width: 300px;
  border: 1px solid #616858;
  border-radius: 5px;
  background-color: #fff;
`;
export const UserAvatar = styled.img`
  max-width: 100%;
  height: 150px;
  margin: auto;
`;
export const ProfileDescription = styled.div`
  padding: 20px;
  text-align: center;
`;
export const UserTag = styled.p`
  padding-top: 10px;
`;
export const UserLocation = styled.p`
  padding-top: 10px;
`;
export const UserStats = styled.ul`
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
