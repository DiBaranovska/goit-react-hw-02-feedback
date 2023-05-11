import PropTypes from 'prop-types';
import React from 'react';
import css from './notification.module.css';

const Notification = ({ message }) => (
  <p className={css.notification}>{message}</p>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
