import PropTypes from 'prop-types';
import React from 'react';
import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <ul>
      <li>
        Good: <span className={css.staticsics__count}>{good}</span>
      </li>
      <li>
        Neutral: <span className={css.staticsics__count}>{neutral}</span>
      </li>
      <li>
        Bad: <span className={css.staticsics__count}>{bad}</span>
      </li>
      <li>
        Total: <span className={css.staticsics__count}>{total}</span>
      </li>
      <li>
        Positive feedback:{' '}
        <span className={css.staticsics__count}>{positivePercentage}%</span>
      </li>
    </ul>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
