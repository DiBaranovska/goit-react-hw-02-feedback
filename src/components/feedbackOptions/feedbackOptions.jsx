import PropTypes from 'prop-types';
import React from 'react';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.feedback__btn_list}>
    {options.map(option => {
      return (
        <li key={option} className={css.feedback__btn_item}>
          <button
            className={css.feedback__btn}
            name={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      );
    })}
  </ul>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
