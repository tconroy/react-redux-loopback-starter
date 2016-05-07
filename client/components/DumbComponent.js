import React, { PropTypes } from 'react';
import '../public/stylesheets/boilerplate.css';

export default function DumbComponent(props) {
  const { welcomeText } = props;
  return (
    <p className="text">{welcomeText || ''}</p>
  );
}
DumbComponent.propTypes = {
  welcomeText: PropTypes.string.isRequired,
};
