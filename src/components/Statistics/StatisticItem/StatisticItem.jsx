import PropTypes from 'prop-types';
import css from './statisticItem.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

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
