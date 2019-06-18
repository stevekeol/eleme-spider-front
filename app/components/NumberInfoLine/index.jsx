import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
  subTitle: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  suffix: PropTypes.string
};

const NumberInfo = ({ subTitle, total, suffix }) => (
  <div className="total">
    <span className="subTitle">{subTitle}</span>
    <span>
      {total}
      <em className="suffix">{suffix}</em>
    </span>
  </div>
);

NumberInfo.propTypes = propTypes;
export default NumberInfo;
