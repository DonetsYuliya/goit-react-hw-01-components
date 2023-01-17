import PropTypes from 'prop-types';
import css from './statisticItem.module.css';
import { getRandomHexColor } from 'randomColor';

export const StatisticItem = ({ statItem }) => {
  return statItem.map(item => {
    return (
      <li
        className={css.item}
        key={item.id}
        style={{ backgroundColor: getRandomHexColor() }}
      >
        <span className="label">{item.label}</span>
        <span className="percentage">{item.percentage}%</span>
      </li>
    );
  });
};

StatisticItem.propTypes = {
  statItem: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
