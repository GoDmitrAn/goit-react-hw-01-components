import { UserStats } from 'components/UserStats/UserStats';
import PropTypes from 'prop-types';
import { ProfileDescription } from '../ProfileDescription/ProfileDescription';
import { UserCard } from './Profile.styled';

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <UserCard>
      <ProfileDescription
        nameUser={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <UserStats statsUser={stats} />
    </UserCard>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
