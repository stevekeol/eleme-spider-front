import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';
import Default from 'components/Default';
import Spider from 'components/Spider';
import Download from 'components/Download';

import './style.scss';
import 'antd/dist/antd.css';

const propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};


class Entry extends React.Component {
  componentDidMount() {
    // console.log(this.props.actions);
    // console.log(this.props.state);
  }
  render() {
    return (
      <div>
        <Col span={4} className="leftNav">
          <Row className="title"><Link to="/">象扑 - 商家爬虫系统</Link></Row>
          <Row className="item"><Link to="/spider">指定爬取</Link></Row>
          <Row className="item"><Link to="/download">数据导出</Link></Row>
        </Col>
        <Col span={20} className="rightContent">
          <Row className="title">数据概况</Row>
          <Row className="contentArea">
            <Switch>
              <Route exact path="/" component={Default} />
              <Route path="/spider" component={Spider} />
              <Route path="/download" component={Download} />
            </Switch>
          </Row>
        </Col>
      </div>
    );
  }
}

Entry.propTypes = propTypes;
export default Entry;
