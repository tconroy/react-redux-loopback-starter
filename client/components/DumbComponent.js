import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../assets/scss/boilerplate.scss';

const DumbComponent = (props) => {
  const { welcomeText } = props;
  return (
    <p className={styles.text}>{welcomeText || ''}</p>
  );
};

DumbComponent.propTypes = {
  welcomeText: PropTypes.string.isRequired,
};

export default CSSModules(DumbComponent, styles);
