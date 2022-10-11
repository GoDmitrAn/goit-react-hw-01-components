import PropTypes from 'prop-types';
import {
  StaticticsSection,
  StaticticsSectionTitle,
  StatisticsItemLabel,
  StatisticsItemPercentage,
  StatisticsList,
  StatisticsListItem,
} from './Statistics.styled';
import { getRandomHexColor } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StaticticsSection>
      {title && <StaticticsSectionTitle>Upload stats</StaticticsSectionTitle>}

      <StatisticsList>
        {stats.map(stat => (
          <StatisticsListItem key={stat.id} color={getRandomHexColor()}>
            <StatisticsItemLabel>{stat.label}</StatisticsItemLabel>
            <StatisticsItemPercentage>
              {stat.percentage}
            </StatisticsItemPercentage>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StaticticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
