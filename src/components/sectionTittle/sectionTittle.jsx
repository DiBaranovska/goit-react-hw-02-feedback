import PropTypes from 'prop-types';
import React from 'react';
import css from './sectionTittle.module.css';

const Section = ({ tittle, children }) => (
  <section>
    <h1 className={css.section__tittle}>{tittle}</h1>
    {children}
  </section>
);

export default Section;

Section.propTypes = {
  tittle: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
