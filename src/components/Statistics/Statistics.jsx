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

export const Statistics = ({ title = null, stats }) => {
  return (
    <StaticticsSection>
      {title && <StaticticsSectionTitle>{title}</StaticticsSectionTitle>}

      <StatisticsList>
        {stats.map(stat => (
          <StatisticsListItem key={stat.id} color={getRandomHexColor()}>
            <StatisticsItemLabel>{stat.label}</StatisticsItemLabel>
            <StatisticsItemPercentage>
              {stat.percentage}%
            </StatisticsItemPercentage>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StaticticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
