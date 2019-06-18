import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Col } from 'antd';
import MoreList from 'components/MoreList';
import { Cascader } from 'antd';
import { Button } from 'antd';
import ListHeader from 'components/ListHeader';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';

const ExportJsonExcel = require('js-export-excel');

import { options } from '../../utils/cityPositions.js';

const propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const downloadOptions = {
  province: '',
  city: ''
};

function onChange(value) {
  downloadOptions.province = value[0];
  downloadOptions.city = value[1];
  downloadOptions.longitude = value[2][0];
  downloadOptions.latitude = value[2][1];
}

class Download extends React.Component {
  componentDidMount() {
    this.props.actions.geCitySpiderInfo();
  }
  render() {
    const { resteraunts } = this.props.state.excel;
    if (!!resteraunts) {
      console.log(resteraunts);
      const sheetDatas = [];
      for (let i = 0; i < resteraunts.length; i++) {
        const sheetDataItem = {
          id: resteraunts[i].id,
          name: resteraunts[i].name,
          phone: resteraunts[i].phone,
          address: resteraunts[i].address,
          flavors: resteraunts[i].flavors,
          is_new: resteraunts[i].is_new,
          rating: resteraunts[i].rating,
          recent_order_num: resteraunts[i].recent_order_num,
          order_lead_time: resteraunts[i].order_lead_time,
          createTime: resteraunts[i].createTime,
          scheme: resteraunts[i].scheme
        };
        sheetDatas.push(sheetDataItem);
      }

      const option = {};
      option.fileName = '商家数据';
      option.datas = [
        {
          sheetName: '商家数据',
          sheetHeader: ['ID', '商家', '电话', '地址', '品类',
          '是否新商家', '评分', '销量', '配送时长', '爬取时间', '商家主页'],
          sheetData: sheetDatas
        }
      ];

      const toExcel = new ExportJsonExcel(option); // new
      toExcel.saveExcel(); // 保存
    }


    const { state, actions } = this.props;
    const onButtonClick = actions.exportDataToExcel;
    const { items } = state.cityInfo;

    function download() {
      if (!!downloadOptions.province) {
        onButtonClick(downloadOptions);
      }
    }

    return (
      <div>
        <Card title="导出商家数据" bordered={false} style={{ marginBottom: 24 }}>
          <Col span={18}>
            <Cascader options={options} onChange={onChange}
              expandTrigger={"hover"} placeholder="选择导出城市"
            />
          </Col>
          <Col span={6}>
            <Button type="primary" onClick={download}>开始导出</Button>
          </Col>
        </Card>
        <Card title="可导出商家数据的城市" bordered={false} style={{ marginBottom: 24 }}>
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


Download.propTypes = propTypes;

export default connect(
  state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(Download);
