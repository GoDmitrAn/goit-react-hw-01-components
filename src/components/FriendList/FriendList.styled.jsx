import styled from '@emotion/styled';

export const FriendListBox = styled.ul`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  row-gap: 10px;
`;
export const FriendListItem = styled.li`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  column-gap: 20px;
  background-color: #f3ebeb;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
export const ItemStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.status ? `green` : `red`;
  }};
`;
export const ItemAvatar = styled.img``;
export const ItemName = styled.p``;
