import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import NumberInfo from 'components/NumberInfo';
import LessList from 'components/LessList';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';

import './style.scss';

const propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


class Default extends React.Component {
  componentDidMount() {
    this.props.actions.getSpiderSummaryData();
  }
  render() {
    const { state } = this.props;
    const { totalStoresCount, spideredCitys,
            currentCity, currentState, items } = state.defaultEntry;

    return (
      <div>
        <Row gutter={24}>
          <Col span={18}>
            <Card title="爬虫历史概况" bordered={false} style={{ marginBottom: 24 }}>
              <Row>
                <Col span={8}>
                  <NumberInfo
                    subTitle={"爬取总数"}
                    total={totalStoresCount}
                    suffix="条"
                  />
                </Col>
                <Col span={8}>
                  <NumberInfo
                    subTitle={"已爬取城市"}
                    total={spideredCitys}
                    suffix="座"
                  />
                </Col>
                <Col span={8}>
                  <NumberInfo
                    subTitle={"当前爬取"}
                    total={currentCity}
                    suffix={currentState}
                  />
                </Col>
              </Row>
              <Row>
                <h1 className="mapArea">全国地图可视化展示(待)</h1>
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="已爬取城市" bordered={false} style={{ marginBottom: 24 }}>
              <LessList items={items} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Default.propTypes = propTypes;

export default connect(
  state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(Default);
