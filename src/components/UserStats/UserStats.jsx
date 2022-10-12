import PropTypes from 'prop-types';
import {
  UserStatsBox,
  UserStatsCell,
  StatsCellLabel,
  StatsCellQuantity,
} from './UserStats.styled';
export const UserStats = ({ statsUser: { followers, views, likes } }) => {
  return (
    <UserStatsBox>
      <UserStatsCell>
        <StatsCellLabel>Followers</StatsCellLabel>
        <StatsCellQuantity>{followers}</StatsCellQuantity>
      </UserStatsCell>
      <UserStatsCell>
        <StatsCellLabel>Views</StatsCellLabel>
        <StatsCellQuantity>{views}</StatsCellQuantity>
      </UserStatsCell>
      <UserStatsCell>
        <StatsCellLabel>Likes</StatsCellLabel>
        <StatsCellQuantity>{likes}</StatsCellQuantity>
      </UserStatsCell>
    </UserStatsBox>
  );
};
UserStats.propTypes = {
  statsUser: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
