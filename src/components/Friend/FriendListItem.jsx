import PropTypes from 'prop-types';

import {
  ItemAvatar,
  ItemName,
  ItemStatus,
  FriendItem,
} from './FriendListItem.styled';
export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendItem>
      <ItemStatus status={isOnline}></ItemStatus>
      <ItemAvatar src={avatar} alt="User avatar" width="48" />
      <ItemName>{name}</ItemName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
