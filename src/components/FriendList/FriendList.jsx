import PropTypes from 'prop-types';
import { FriendListBox } from './FriendList.styled';
import { FriendListItem } from 'components/Friend/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListBox>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </FriendListBox>
  );
};
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
