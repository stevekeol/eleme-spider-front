/*
 * @file component List
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import LessListItem from 'components/LessListItem';

import uuid from 'uuid';

const propTypes = {
  items: PropTypes.array.isRequired
};

function LessList({ items }) {
  const itemsContent = items.map(
    item => (
      <LessListItem
        subTitle={item.city}
        total={item.count}
        suffix="条"
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

LessList.propTypes = propTypes;

export default LessList;
