import PropTypes from 'prop-types';
import {
  FriendListBox,
  FriendListItem,
  ItemAvatar,
  ItemName,
  ItemStatus,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListBox>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem key={id}>
          <ItemStatus status={isOnline}></ItemStatus>
          <ItemAvatar src={avatar} alt="User avatar" width="48" />
          <ItemName>{name}</ItemName>
        </FriendListItem>
      ))}
    </FriendListBox>
  );
};
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
};
