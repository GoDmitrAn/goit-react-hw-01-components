import PropTypes from 'prop-types';
import {
  NameProfile,
  ProfileDescription,
  StatsCellLabel,
  StatsCellQuantity,
  UserAvatar,
  UserCard,
  UserLocation,
  UserStats,
  UserStatsCell,
  UserTag,
} from './Profile.styled';

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <UserCard>
      <ProfileDescription>
        <UserAvatar src={avatar} alt="User avatar" />
        <NameProfile>{name}</NameProfile>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </ProfileDescription>

      <UserStats>
        <UserStatsCell>
          <StatsCellLabel>Followers</StatsCellLabel>
          <StatsCellQuantity>{stats.followers}</StatsCellQuantity>
        </UserStatsCell>
        <UserStatsCell>
          <StatsCellLabel>Views</StatsCellLabel>
          <StatsCellQuantity>{stats.views}</StatsCellQuantity>
        </UserStatsCell>
        <UserStatsCell>
          <StatsCellLabel>Likes</StatsCellLabel>
          <StatsCellQuantity>{stats.likes}</StatsCellQuantity>
        </UserStatsCell>
      </UserStats>
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
