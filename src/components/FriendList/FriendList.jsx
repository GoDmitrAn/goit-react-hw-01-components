import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li class="item" key={id}>
          <span class="status">{isOnline ? 'true' : 'false'}</span>
          <img class="avatar" src={avatar} alt="User avatar" width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
};
