import { StatisticItem } from './StatisticItem/StatisticItem';
import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        <StatisticItem statItem={stats} />
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
