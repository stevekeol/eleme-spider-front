import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, Col } from 'antd';
import MoreList from 'components/MoreList';
import { Cascader } from 'antd';
import { Button } from 'antd';
import ListHeader from 'components/ListHeader';

import * as actionCreators from 'actions';

import { options } from '../../utils/cityPositions.js';

const propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const spiderOptions = {
  province: '',
  city: '',
  longitude: '',
  latitude: ''
};

function onChange(value) {
  // console.log(value);
  // this.props.actions.fetchEntryList();
  // console.log(value[0]);
  // console.log(value[1]);
  // console.log(value[2]);
  spiderOptions.province = value[0];
  spiderOptions.city = value[1];
  spiderOptions.longitude = value[2][0];
  spiderOptions.latitude = value[2][1];
}

class Spider extends React.Component {
  componentDidMount() {
    this.props.actions.geCitySpiderInfo();
  }
  render() {
    const { state, actions } = this.props;
    const onButtonClick = actions.startSpiderTask;
    const { items } = state.cityInfo;

    function spider() {
      if (!!spiderOptions.province) {
        onButtonClick(spiderOptions);
      }
    }

    return (
      <div>
        <Card title="启动爬取任务" bordered={false} style={{ marginBottom: 24 }}>
          <Col span={18}>
            <Cascader options={options} onChange={onChange}
              expandTrigger={"hover"} placeholder="选择爬取城市"
            />
          </Col>
          <Col span={6}>
            <Button type="primary" onClick={spider}>开启爬虫</Button>
          </Col>
        </Card>
        <Card title="已经爬取的城市" bordered={false} style={{ marginBottom: 24 }}>
          <ListHeader
            province={'省份'}
            city={'城市'}
            endTime={'采集时间'}
            count={'商家数量'}
            state={'采集状态'}
          />
          <MoreList items={items} />
        </Card>
      </div>
    );
  }
}


Spider.propTypes = propTypes;

export default connect(
  state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(Spider);
