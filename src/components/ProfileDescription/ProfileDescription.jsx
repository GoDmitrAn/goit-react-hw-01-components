import PropTypes from 'prop-types';
import {
  NameProfile,
  UserAvatar,
  UserTag,
  UserLocation,
  Description,
} from './ProfileDescription.styled';
export const ProfileDescription = ({ avatar, nameUser, tag, location }) => {
  return (
    <Description>
      <UserAvatar src={avatar} alt="User avatar" />
      <NameProfile>{nameUser}</NameProfile>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </Description>
  );
};
ProfileDescription.propTypes = {
  nameUser: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
