/*
 * @file component List
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import MoreListItem from 'components/MoreListItem';

import uuid from 'uuid';

const propTypes = {
  items: PropTypes.array.isRequired
};

function MoreList({ items }) {
  const itemsContent = items.map(
    item => (
      <MoreListItem
        province={item.province}
        city={item.city}
        endTime={item.endTime}
        count={item.count}
        state={item.state}
        key={uuid.v4()}
      />
    )
  );
  return (
    <div>
      { itemsContent }
    </div>
  );
}

MoreList.propTypes = propTypes;

export default MoreList;
