import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import './style.scss';

const propTypes = {
  province: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};

const MoreListItem = ({ province, city, endTime, count, state }) => (
  <Row className="moreListItem">
    <Col span={4}>{province}</Col>
    <Col span={4}>{city}</Col>
    <Col span={8}>{endTime}</Col>
    <Col span={4}>{count}</Col>
    <Col span={4}>{state}</Col>
  </Row>
);

MoreListItem.propTypes = propTypes;
export default MoreListItem;
