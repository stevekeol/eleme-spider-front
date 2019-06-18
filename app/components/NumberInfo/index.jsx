import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
  subTitle: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  suffix: PropTypes.string
};

const NumberInfo = ({ subTitle, total, suffix }) => (
  <div>
    <div className="subTitle">{subTitle}</div>
    <div className="total">
      <span>
        {total}
        <em className="suffix">{suffix}</em>
      </span>
    </div>
  </div>
);

NumberInfo.propTypes = propTypes;
export default NumberInfo;
